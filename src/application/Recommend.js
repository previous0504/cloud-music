import React from 'react'
import { renderRoutes } from "react-router-config";

function Recommend({route}) {

    return (
        <div>
            Recommend
            { renderRoutes (route.routes) }
        </div>
    )
}
export default Recommend
