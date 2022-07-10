export type Inhabitant = {
    id?: number
    name: string
    thumbnail?: string
    age: number
    weight?: number
    height?: number
    hair_color?: string
    professions?: string[]
    friends?: string[]
 }

export type Personaje = {
    data: Inhabitant, 
}