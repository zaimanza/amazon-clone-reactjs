/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../css/Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="home__row">
                    <Product id="123456" title="The lean startup" price={29.99} image="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/6709/9780670921607.jpg" rating={5} />
                    <Product id="123456" title="The lean startup" price={29.99} image="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/6709/9780670921607.jpg" rating={5} />
                </div>

                <div className="home__row">
                    <Product id="123456" title="The lean startup" price={29.99} image="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/6709/9780670921607.jpg" rating={5} />
                    <Product id="123456" title="The lean startup" price={29.99} image="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/6709/9780670921607.jpg" rating={5} />
                    <Product id="123456" title="The lean startup" price={29.99} image="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/6709/9780670921607.jpg" rating={5} />
                </div>

                <div className="home__row">
                    <Product id="123456" title="The lean startup" price={29.99} image="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/6709/9780670921607.jpg" rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home