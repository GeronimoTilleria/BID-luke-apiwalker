import React from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {

    const { param } = useParams()

    return (
        <h2 style={
            {
                'text-align': 'center',
                'margin-top': '20px'
            }
            }>
            {
                isNaN(param) ? 
                    param :
                    `This number is: ${param}`
            }
        </h2>
    )
}

export default Number
