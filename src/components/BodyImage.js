import * as React from 'react';

export default function BodyImage() {
    return (
        <div
            className="bodyImage"
            style={{
                background: 'white',
                textAlign: 'center',
                padding: '20px',
                userSelect: 'none'
            }}
        >
            <img 
                src="/assets/logo_transparent.png" 
                alt="Logo" 
                style={{ height: '70vh' }} 
            />
        </div>
    );
}
