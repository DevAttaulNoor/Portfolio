import React, { useEffect, useState } from 'react';

function CircularProgressBar({ givenPer }) {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (percentage < givenPer) {
                setPercentage(percentage + 1);
            }
        }, 50);
    }, [percentage, givenPer]);

    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div style={{ width: 100, position: 'relative' }} className='circleprogressbar'>
            <svg viewBox="0 0 100 100">
                <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(170, 54, 124, 0.5)" />
                    <stop offset="100%" stopColor="rgba(74, 47, 189, 0.5)" />
                </linearGradient>
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke={`url(#progress-gradient)`}
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                {percentage}%
            </div>
        </div>
    );
}

export default CircularProgressBar;