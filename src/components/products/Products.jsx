import React from 'react'
import './products.scss'
import {useState} from 'react'
import heart from '../../img/heart.svg'
import star from '../../img/star.svg'


import products from '../helpers/data'

function Products() {
   
        const productsArray = Array.isArray(products) ? products : Object.values(products);
    
    const [filters, setFilters] = useState({
        cat: false,
        dog: true,
        bird: true,
        all: false
    })

 
    const filteredProducts = productsArray.filter(product => {

        if (filters.all || (!filters.cat && !filters.dog && !filters.bird)) {
            return true;
        }
  
        return (
            (product.category === 'cat' && filters.cat) ||
            (product.category === 'dog' && filters.dog) ||
            (product.category === 'bird' && filters.bird)
        );
    })


    const handleFilterClick = (filterType) => {
        if (filterType === 'all') {
            setFilters({
                cat: false,
                dog: false,
                bird: false,
                all: true
            })
        } else {
            setFilters(prev => ({
                ...prev,
                all: false,
                [filterType]: !prev[filterType]
            }))
        }
    }

    return (
        <section className="products" id='shop'>
            <div className="products__top">
                <h1 className='products__top-title'>Products</h1>
                <div className="products__top-filter">
                    <a href='#' onClick={(e) => { e.preventDefault(); handleFilterClick('all') }}>
                        ALL
                    </a>
                    <a href='#' onClick={(e) => { e.preventDefault(); handleFilterClick('cat') }}>
                        CAT
                    </a>
                    <a href='#' onClick={(e) => { e.preventDefault(); handleFilterClick('dog') }}>
                        DOG
                    </a>
                    <a href='#' onClick={(e) => { e.preventDefault(); handleFilterClick('bird') }}>
                        BIRD
                    </a>
                </div>
                <button className="products__top-btn">SHOP ALL</button>
            </div>
            
            <div className="products__catalog">
                {filteredProducts.map((product) => (
                    <div className="products__catalog-card" key={product.id || product.title}>
                        <img src={product.img} alt="" className='card-img'/>
                        <div className="card-info">
                            <h3 className="card-title">{product.title}</h3>
                            <div className="card-rating">
                                {star}
                                <p>{product.rating}</p>
                            </div>
                            <p className="card-price">{product.price}</p>
                            <div className="card-btns">
                                <button className="btn-Add">ADD TO CART</button>
                                <button className="btn-like">{heart}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Products