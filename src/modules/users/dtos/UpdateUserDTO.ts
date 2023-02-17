export interface UpdateUserDTO {
    id: number
    name: string,
    email: string,
    password: string,
    active: boolean,
    group_id: number | null
}