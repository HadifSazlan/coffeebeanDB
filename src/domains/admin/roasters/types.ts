export interface addRoasterRequest {
    name: string
    slug: string
    email?: string
    phone?:string
}

export interface updateRoasterRequest {
    name?: string
    slug?: string
    email?: string
    phone?:string
}