import * as React from 'react';

export default function Header() {
    return (
        <div
            className="header"
            style={{
                background: 'white',
                textAlign: 'center',
            }}
        >
            <h1
                style={{
                    background: 'linear-gradient(45deg, rgba(106, 155, 61, 1) 0%, rgba(2, 58, 11, 1) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '36px',
                    fontWeight: 'bold',
                    paddingBottom: '30px'
                }}
            >
                FOOD WASTE PREDICTION
            </h1>
        </div>
    );
}
