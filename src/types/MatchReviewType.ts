export type ReviewNextType = {
    title: string,
    list: {
        date: string,
        venue: string,
        competing: [string, string]
    }[]
}

export type ReviewLatestType = {
    title: string,
    description: string,
    match: {
        date: string,
        venue: string,
        score: string,
        competing: {
            name: string,
            img: string 
        }[]
    }
}