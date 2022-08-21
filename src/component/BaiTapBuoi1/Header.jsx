import React, { Component } from 'react'


export default class Header extends Component {
    render() {
        return (
            <div className='container '>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className=''>
                        <a class="navbar-brand" href="#">Start Bootstrap</a>
                    </div>
                    <div class="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>


                    </div>
                </nav>
            </div>
        )
    }
}
