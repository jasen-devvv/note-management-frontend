export interface INote {
    id: string,
    title: string,
    content: string,
    archived: boolean,
    favorite: boolean,
    CreatedAt: string,
    UpdatedAt: string
}

export interface NoteForm {
    title: string;
    content: string;
}