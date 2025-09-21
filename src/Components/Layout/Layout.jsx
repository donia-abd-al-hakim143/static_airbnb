import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>

            {/* call navbar component here */}
            <div className="container">
                <Outlet />
            </div>
            {/* call footer component here */}

        </div>
    )
}
