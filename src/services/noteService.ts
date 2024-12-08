import API from "./api"
import { INote, NoteForm } from "../util/interface"
import { Ref, ref } from "vue"
import { sortNotes } from "../util/sort"

export const notes = ref<INote[]>()
export const note = ref<NoteForm>({
    title: '',
    content: '',
})
export const loading = ref<boolean>(true)
export const err = ref<string | null>(null)

export const fetchNotes = async (): Promise<void> => {
    loading.value = true
    err.value = null

    try {
        const response = await API.get<INote[]>('/notes')
        const filter = response.data.filter((note) => note.archived === false && note.favorite === false || note.archived === false && note.favorite === true)
        notes.value = sortNotes(filter)
    } catch (error) {
        err.value = err instanceof Error ? err.message : 'Failed to fetch notes'
        Swal.fire({
            title: 'Failed to retrieved notes',
            text: err.value,
            icon: 'error',
            timer: 2000,
            timerProgressBar: true,
        })
    } finally {
        loading.value = false
    }
}

export const fetchArchived = async (): Promise<void> => {
    loading.value = true
    err.value = null

    try {
        const response = await API.get<INote[]>('/notes')
        const filter = response.data.filter((note) => note.archived === true)
        notes.value = sortNotes(filter)
    } catch (error) {
        err.value = err instanceof Error ? err.message : 'Failed to fetch archived notes'
        Swal.fire({
            title: 'Failed to retrieve archived notes',
            text: err.value,
            icon: 'error',
            timer: 2000,
            timerProgressBar: true,
        })
    } finally {
        loading.value = false
    }
}

export const fetchNoteByID = async (id:string): Promise<void> => {
    try {
        const response = await API.get(`/notes/${id}`)
        note.value!.title = response.data.title
        note.value!.content = response.data.content
    } catch (error) {
        Swal.fire({
            title: "Failed retrieved note!",
            icon: 'error',
            timer: 1000,
            timerProgressBar: true,
        })
    }
}

export const archiveHandler = async ({ id, status }: { id: string, status: boolean }): Promise<void> => {   
    try {
        await API.patch(`/notes/${id}/archive?status=${status}`)
        if (notes.value) {
            const index = notes.value.findIndex((note) => note.id === id)
            if (index !== -1) {
                notes.value[index].archived = status
                notes.value.splice(index, 1)
            }

            const archive = notes.value[index].archived ? 'unarchive' : 'archive'
            Swal.fire({
                title: `Success to ${archive} notes`,
                icon: 'success',
                timer: 2000,
                timerProgressBar: true,
            })
        }
    } catch (error) {
        err.value = err instanceof Error ? err.message : 'Failed to fetch notes'
        Swal.fire({
            title: 'Failed to retrieved notes',
            text: err.value,
            icon: 'error',
            timer: 2000,
            timerProgressBar: true,
        })
    }
}

export const favoriteHandler = async ({ id, status }: { id: string, status: boolean }): Promise<void> => {
    try {
        await API.patch(`/notes/${id}/favorite?status=${status}`)
        if (notes.value) {
            const index = notes.value.findIndex((note) => note.id === id)
            if (index !== -1) {
                notes.value[index].favorite = status
                notes.value = sortNotes(notes.value)
            }

            const favorite = notes.value[index].favorite ? 'favorite' : 'unfavorite'
            
            Swal.fire({
                title: `Success to ${favorite} note`,
                icon: 'success',
                timer: 2000,
                timerProgressBar: true,
            })
        }

        
    } catch (error) {
        err.value = err instanceof Error ? err.message : 'Failed to fetch notes'
        Swal.fire({
            title: 'Failed to retrieved favorite notes',
            text: err.value,
            icon: 'error',
            timer: 2000,
            timerProgressBar: true,
        })
    }
}

export const createHandler = async (form: Ref<NoteForm>): Promise<void> => {
    try {
        await API.post('/notes', form.value)
        Swal.fire({
            title: "Successfully create note!",
            icon: 'success',
            timer: 1000,
            timerProgressBar: true,
        })
    } catch (error) {
        Swal.fire({
            title: "Failed create note!",
            icon: 'error',
            timer: 1000,
            timerProgressBar: true,
        })
    }
}

export const updateHandler = async ({id, form}: {id: string, form: Ref<NoteForm>}): Promise<void> => {
    try {
        await API.put(`/notes/${id}`, form.value)
        Swal.fire({
            title: "Successfully update note!",
            icon: 'success',
            timer: 2000,
            timerProgressBar: true,
        })
    } catch (error) {
        Swal.fire({
            title: "Failed update note!",
            icon: 'error',
            timer: 2000,
            timerProgressBar: true,
        })
    }
}

export const deleteHandler = async (id: string): Promise<void> => {
    Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result: { isConfirmed: boolean }) => {
        if (result.isConfirmed) {
            try {
                await API.delete(`/notes/${id}`)
                if (notes.value) {
                    const index = notes.value.findIndex((note) => note.id === id)
                    if (index !== -1) {
                        notes.value.splice(index, 1)
                    }
                }
                Swal.fire({
                    title: 'Success to deleted note',
                    icon: 'success',
                    timer: 2000,
                    timerProgressBar: true,
                })
            } catch (error) {
                err.value = err instanceof Error ? err.message : 'Failed to fetch notes'
                Swal.fire({
                    title: 'Failed to deleted notes',
                    text: err.value,
                    icon: 'error',
                    timer: 2000,
                    timerProgressBar: true,
                })
            }
        }
      });
}