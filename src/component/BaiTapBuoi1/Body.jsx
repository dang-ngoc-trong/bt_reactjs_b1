import React, { Component } from 'react'
import Banner from './Banner'

import Item from './Item'

export default class Body extends Component {
    render() {
        return (
            <div className='container'>
                <div className='py-5'><Banner /></div>
                <div className='pt-4'>
                    <Item />
                </div>



            </div>
        )
    }
}
