import React, { Component } from 'react'
import Body from './Body'
import Footer from './Footer'
import Hearder from './Hearder'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Hearder/>

                <Body/>

                <Footer/>
            </div>
        )
    }
}
