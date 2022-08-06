import React from 'react'
import Layout from '../layouts/Layout'

const NotFound = () => {
    return (
        <Layout>
            <div className="grid h-screen place-items-center">
                <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">404 | Not Found</h1>
            </div>
        </Layout>
    )
}

export default NotFound