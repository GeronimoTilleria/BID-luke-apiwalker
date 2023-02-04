import React from 'react'
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Pagina no encontrada</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default NotFound
