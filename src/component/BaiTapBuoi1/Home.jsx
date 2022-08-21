import React, { Component } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className='bg-dark'>
                    <Header />
                </div>
                <Body />
                <div className='pt-4' >
                    <Footer />
                </div>


            </div>
        )
    }
}
