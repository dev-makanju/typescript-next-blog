export interface PostProps {
    id: string,
    title: string,
    content: string,
    author: string,
    authorEmail?: string;
    date: string,
    category: string,
    links?: string[],
    thumbnail?: string,
}