import React from 'react'
import { renderRoutes } from "react-router-config";

function Home({route}) {

    return (
        <div>
            Home
            { renderRoutes (route.routes) }
        </div>
    )
}
export default React.memo(Home)
