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
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-nousgreen py-8'>
                <div className='md:float-left block'>
                    <Link href='/'>
                        <span className='cursor-pointer tracking-tighter font-black text-8xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                            nous.services
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-8 align-middle text-nouswhite ml-4 text-3xl tracking-tight font-semibold cursor-pointer'>{category.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Header
