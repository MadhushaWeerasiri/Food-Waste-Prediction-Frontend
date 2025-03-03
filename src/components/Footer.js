import * as React from 'react';

import { Typography } from '@mui/material';

export default function Footer() {
    return (
        <footer className="footer"
            style={{
                background: 'linear-gradient(45deg, rgba(106, 155, 61, 1) 0%, rgba(2, 58, 11, 1) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '6px',
                fontWeight: 'bold',
                marginTop: 'auto'
            }}
        >
            <Typography className='landingpageFooter-copyrights'>
                © 2025 Food Waste Prediction.
                All rights reserved.
                Designed & Developed by <a href='https://www.linkedin.com/in/madhushaweerasiri/' style={{ textDecoration: 'underline' }}>Madhusha Weerasiri</a>
            </Typography>
        </footer>
    );
}
