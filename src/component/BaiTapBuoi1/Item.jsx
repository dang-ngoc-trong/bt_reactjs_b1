import React, { Component } from 'react'
import img from "./img/ca825243bc9c405a9cac886925a3d12f.jpg"
export default class Item extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row py-5'>
                    <div className='card-body col-lg-3 col-xxl-4 text-center bg-light   '>
                        <div className='p-6 mb-5 mt-5'>
                            <img className='bt_bb_image ' src={img} alt="" />
                        </div>
                        <div className='fs-4 fw-bold mb-5'>
                            <h2>Card title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore totam vel maiores voluptatibus doloribus?</p>
                        </div>
                        <div className='p-4 bg-light'>
                            <a className='btn btn-primary btn-lg' href="#">Find Out More</a>
                        </div>
                    </div>
                    <div className='card-body col-lg-3 col-xxl-4 text-center bg-light'>
                        <div className='p-6 mb-5 mt-5'>
                            <img src={img} alt="" />
                        </div>
                        <div className='fs-4 fw-bold mb-5'>
                            <h2>Card title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore totam vel maiores voluptatibus doloribus?</p>
                        </div>
                        <div className='p-4 bg-light'>
                            <a className='btn btn-primary btn-lg' href="#">Find Out More</a>
                        </div>
                    </div>
                    <div className='card-body col-lg-3 col-xxl-4 text-center bg-light'>
                        <div className='p-6 mb-5 mt-5'>
                            <img src={img} alt="" />
                        </div>
                        <div className='fs-4 fw-bold mb-5'>
                            <h2>Card title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore totam vel maiores voluptatibus doloribus?</p>
                        </div>
                        <div className='p-4 bg-light'>
                            <a className='btn btn-primary btn-lg' href="#">Find Out More</a>
                        </div>
                    </div>
                    <div className='card-body col-lg-3 col-xxl-4 text-center bg-light'>
                        <div className='p-6 mb-5 mt-5'>
                            <img src={img} alt="" />
                        </div>
                        <div className='fs-4 fw-bold mb-5'>
                            <h2>Card title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore totam vel maiores voluptatibus doloribus?</p>
                        </div>
                        <div className='p-4 bg-light'>
                            <a className='btn btn-primary btn-lg' href="#">Find Out More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
