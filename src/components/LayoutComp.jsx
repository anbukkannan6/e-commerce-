import React from 'react'
import NavBarComp from './NavBarComp'
import ProductComp from './ProductComp'
import FooterComp from './FooterComp'
import { Outlet } from 'react-router-dom'


export default function LayoutComp() {
    return (
        <>
            <NavBarComp/>
            <Outlet/>
            
            <FooterComp/>
        </>

    )
}
