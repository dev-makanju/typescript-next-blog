'use client'
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"

export default function Header() {
    const {status} = useSession();
    
    return (
     <header className="flex justify-between pb-4 border-b mb-4">
        <div>
            <Link href={"/"}>
                <h1 className="text-dark text-4xl font-bold tracking-tighter">Tech News</h1> 
            </Link>
            <p className='text-sm'>Exploring tomorrow's innovations, <br/> One byte at a time</p>
        </div>

        {status === 'authenticated' ? 
            <div>
                <button onClick={() => signOut()} className="btn">Sign Out</button>
            </div> 
        : 
            <div className="flex items-center">
                <Link className="btn" href={"/sign-in"}>Sign In</Link>
            </div>
        }

     </header>
    )
} 