import React, {useState, useEffect} from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
        .then((newCategories) => setCategories(newCategories))
    }, []);

    return (
        <div className='bg-white bg-opacity-10 shadow-2xl rounded-lg p-8 mb-8'>
            <h3 className='text-2xl text-nousblack mb-8 font-black tracking-tighter border-emerald-400 border-b pb-4'>
                Categories
            </h3>
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className='cursor-pointer block text-left pl-2 text-nousblack text-m hover:bg-emerald-300 rounded-lg pb-1 pt-1 mb-1'>
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Categories
