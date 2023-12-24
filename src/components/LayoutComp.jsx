import React from 'react'
import NavBarComp from './NavBarComp'
import ProductComp from './ProductComp'
import FooterComp from './FooterComp'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux/store'


export default function LayoutComp() {
    return (
        <>
            <Provider store={store}>
                <NavBarComp />
                <Outlet />
                {/* <FooterComp /> */}
            </Provider>

        </>

    )
}
