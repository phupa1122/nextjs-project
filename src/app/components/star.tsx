import React from 'react'
import './styles.css'

import { Star } from 'lucide-react';

export default function star() {
    return (
        <div className="star-rating">
            <div className="stars">
                {Array.from({ length: 5 }, () => (
                    <Star color='#EC407A' size={12} />
                ))}
            </div>
            <div className="stars rating">
                <Star fill="#EC407A" color='#EC407A' size={12}/>
                <Star fill="#EC407A" color='#EC407A' size={12}/>
                <Star fill="#EC407A" color='#EC407A' size={12}/>
            </div>
        </div>
    )
}
