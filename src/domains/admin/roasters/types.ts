interface addRoasterRequest {
    name: string
    slug: string
    email?: string
    phone?:string
}

interface updateRoasterRequest {
    name?: string
    slug?: string
    email?: string
    phone?:string
}