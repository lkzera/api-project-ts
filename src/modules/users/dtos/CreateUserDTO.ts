export interface CreateUserDTO {
    name: string,
    email: string,
    password: string,
    active: boolean,
    group_id: number | null
}