export interface addBeanRequest {
    name:string
    slug: string
    roaster_id?: number
    supplier_id?:number
    roast_profile?:string
    brew_type?:string
    origin?:string
    process?:string
    altitude?:string
    link?:string
}

export interface updateBeanRequest {
    name?:string
    slug?: string
    roaster_id?: number|null
    supplier_id?:number|null
    roast_profile?:string|null
    brew_type?:string|null
    origin?:string|null
    process?:string|null
    altitude?:string|null
    link?:string|null
}