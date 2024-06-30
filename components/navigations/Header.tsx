import Link from "next/link"


export default function Header() {
    return (
     <header className="flex justify-between pb-4 border-b mb-4">
        <div>
            <Link href={"/"}>
                <h1 className="text-dark text-4xl font-bold tracking-tighter">Tech News</h1> 
            </Link>
            <p className='text-sm'>Exploring tomorrow's innovations, <br/> One byte at a time</p>
        </div>
        <div className="flex items-center">
            <Link className="btn" href={"/sign-in"}>Sign In</Link>
        </div>
     </header>
    )
} 