import './App.css';
import Header from './components/Header.js';
import InputForm from './components/InputForm';
import BodyImage from './components/BodyImage';
import Footer from './components/Footer';

import { Box, Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1, height: '100vh', display: 'flex', flexDirection: 'column', minWidth: '900px' }}>
        <Grid container justifyContent="center" sx={{ height: '10vh', background: 'white' }}>
          <Header />
        </Grid>

        <Grid container sx={{ flexGrow: 1, padding: '20px' }}>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <BodyImage />
          </Grid>

          <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <InputForm />
          </Grid>
        </Grid>

        <Grid container justifyContent="center" sx={{ height: '10vh', background: 'white' }}>
          <Footer />
        </Grid>
      </Box>
    </div>
  );
}

export default App;
