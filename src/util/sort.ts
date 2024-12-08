import { INote } from "./interface";

export const sortNotes = (notes: INote[]): INote[] => {
    return notes.sort((a, b) => {
        if (b.favorite !== a.favorite) {
            return b.favorite ? 1 : -1
        }
        return new Date(a.CreatedAt).getTime() - new Date(b.CreatedAt).getTime()
    })
}