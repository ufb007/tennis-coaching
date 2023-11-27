import { GetDateReturnType } from "@/types/DateFormatterType"

export const getDate = (date: string): GetDateReturnType => {
    const createDate = new Date(date)
    const formattedDate = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'short', day: '2-digit' }).format(createDate).split(' ')

    return {
        day: formattedDate[0],
        month: formattedDate[1],
        year: formattedDate[2]
    }
}

export const getTime = (date: string): string => {
    const createDate = new Date(date)
    return new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit' }).format(createDate)
}