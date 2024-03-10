import React, { useEffect, useState } from 'react';

function Skill_Circularbar({ givenPer }) {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (percentage < givenPer) {
                setPercentage(percentage + 1);
            }
        }, 50);
    }, [percentage, givenPer]);

    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className='circularBar'>
            <svg class="progressCircle" viewBox="0 0 120 120">
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(170, 54, 124, 0.5)" />
                    <stop offset="100%" stopColor="rgba(74, 47, 189, 0.5)" />
                </linearGradient>

                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>

            <div id='percentage'> {percentage}% </div>
        </div>
    )
}

export default Skill_Circularbar