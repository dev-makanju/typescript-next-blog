export type TCartegory = {
    id: string,
    catName: string,
}

export type TPost = {
    id: string,
    title: string,
    content: string,
    imageUrl?: string,
    publicId?: string,
    catName?: string,
    link: null | string[],
    createdAt: string,
    authorEmail: string,
    author: {
        name: string
    }
}