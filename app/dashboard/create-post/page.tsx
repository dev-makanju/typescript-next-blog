import CreatePostForm from "@/components/dashboard/create-post/CreatePostForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function CreatePost(){
    const session = await getServerSession(authOptions)
    console.log(session)
    if(!session){
       redirect('/sign-in')
    }
    return <CreatePostForm/>
}