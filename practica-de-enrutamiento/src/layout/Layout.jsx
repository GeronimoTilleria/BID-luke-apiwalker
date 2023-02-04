import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div style={
            {
                'text-align': 'center',
                'margin-top': '20px'
            }}>
            <Outlet />
        </div>
    )
}

export default Layout
