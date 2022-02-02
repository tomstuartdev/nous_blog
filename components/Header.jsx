import Link from 'next/link'
import React, {useState, useEffect} from 'react';
import { getCategories } from '../services';



const Header = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
        .then((newCategories) => setCategories(newCategories))
    }, []);

    return (
        <div className='container mx-auto px-8 md:px-10 mb-3'>
            <div className='border-b-2 w-full inline-block border-nousblack border-opacity-0 py-6'>
                <div className='md:float-left block'>
                    <Link href='/'>
                        <span className='cursor-pointer tracking-tight font-black text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-400'>
                            nous.services
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-7 align-middle text-nousblack ml-10 text-m tracking-tight font-semibold cursor-pointer'>{category.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Header
