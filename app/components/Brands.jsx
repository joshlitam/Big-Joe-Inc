import React from 'react'

const brands = [
    { "imgUrl": "/img/gatorade.png", "alt": "gatorade logo" },
    { "imgUrl": "/img/havaianas.png", "alt": "havaianas logo" },
    { "imgUrl": "/img/mountaindew.png", "alt": "mountain dew logo" },
    { "imgUrl": "/img/pepsi.png", "alt": "pepsi logo" },
    { "imgUrl": "/img/phoenix.png", "alt": "phoenix logo" },
    { "imgUrl": "/img/quaker.png", "alt": "quaker logo" },
    { "imgUrl": "/img/smart.png", "alt": "smart logo" },
    { "imgUrl": "/img/dito.jpg", "alt": "dito logo" },
]

const Brands = () => {
    return (
        <div className="div flex justify-center">
            <div className='brands mt-32 max-w-7xl flex flex-col'>
                <h2 className='brands-header text-4xl text-center font-extrabold text-red-500'>Brands we've worked with</h2>
                <div className="brands grid grid-cols-4 mt-16 gap-y-12">
                    {brands.map((brand) => (
                        <img className="col-span-1 w-3/4" src={brand.imgUrl} alt={brand.alt} key={brand.alt} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Brands
