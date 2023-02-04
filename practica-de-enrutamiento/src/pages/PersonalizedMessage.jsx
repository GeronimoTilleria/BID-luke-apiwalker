import React from 'react'
import { useParams } from 'react-router-dom'

const PersonalizedMessage = () => {7

    const { text, color, bgColor } = useParams();

    return (
        <div 
            style={
                {
                    'color': color, 
                    'backgroundColor': bgColor,
                    'padding': '20px',
                    'text-align': 'center'
                }}>
            <h3>This is: {text}</h3>

        </div>
    )
}

export default PersonalizedMessage
