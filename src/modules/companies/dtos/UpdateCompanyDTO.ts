export interface UpdateCompanyDTO {
    id: number,
    code: string,
    corporate_name: string,
    fantasy_name: string | null,
    itr: string | null,
    registration_number: string | null,
    address: string | null,
    district: string | null,
    state: string | null,
    zip_code: string | null,
    created_at: Date,
    updated_at: Date
}