import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorComp() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 1200);
    }, [])

    return (
        <h1>404 not found</h1>
    )
}

export default ErrorComp