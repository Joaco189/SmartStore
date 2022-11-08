import React from 'react'
import { Link } from 'react-router-dom'
import "./CategorySelector.css"

const CategorySelector = () => {
    return (
        <div className="category-container">
            <div>
                <Link className='category-link' to="/category/mouse">Mouse</Link>
                <Link className='category-link' to="/category/teclados">Teclados</Link>
            </div>
        </div>
    )
}

export default CategorySelector