import React from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { routes } from './routes';
import { Button } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Button component={Link} to={routes.home}>
                Home
            </Button>
            <Button component={Link} to={routes.login}>
                Login
            </Button>
            <Button component={Link} to={routes.notFound}>
                Not found
            </Button>
        </div>    
    </BrowserRouter>
  );
}

export default App;
