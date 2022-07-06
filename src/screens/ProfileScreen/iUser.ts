import { UserTypeEnum, WeekdaysEnum } from './../../generated/graphql';

export interface iUser {
    id: number
    name: string
    email: string
    cpf: string
    birthdate?: number | null
    biography?: string | null
    avatar?: string | null
    userType: UserTypeEnum
    
    availability?: {
        id: string
        day: WeekdaysEnum
    }[] | null
    
    skills?: {
        id: string
        techId: number
        price: number
    
        tech: {
            id: number
            title: string
            thumbnail: string
        }
    }[] | null
}