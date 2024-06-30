import { cartigoriesData } from '@/data'
import Link from 'next/link'

export default function CartegoryList(){
   return (
    <div className='flex flex-wrap gap-2'>
        {  cartigoriesData && cartigoriesData.map( cartigory => (
               <Link 
                  className='px-4 py-1 rounded-md bg-slate-800 text-white cursor-pointer'
                  href={`/cartigories/${cartigory.name}`}>{cartigory.name}
                </Link>
           ))
        }
    </div>
   )
}