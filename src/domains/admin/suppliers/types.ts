export interface addSupplierRequest {
    name: string
    slug: string
    email?: string
    phone?:string
}

export  interface updateSupplierRequest {
    name?: string
    slug?: string
    email?: string
    phone?:string
}
