
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from "axios";
import BusinessDetailsDescription from './AboutBuisness';
import Alert from '@mui/material/Alert';
import AdminBuisness from './adminBuisness';
export default function Login() {
  const [name, setUserName] = useState('admin');
  const [password, setPassword] = useState('123456');
  const[detailsOfBuisness,setDetailsOfBuisness]=useState(false);
  const[isError,setIsError]=useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:8787/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, password: password })
    })
      .then((res) => {
        if (res.status === 401) {
          setUserName(''); 
          setPassword(''); 
          throw new Error('Unauthorized');
        }
        console.log(res.status);
        setDetailsOfBuisness(true);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  };

  return (
    <>{detailsOfBuisness ? <AdminBuisness/>:
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="User Name"
          variant="standard"
           value={name}
          onChange={(e) => setUserName(e.target.value)}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Password"
          variant="standard"
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      {isError&&
      <Alert severity="error">Error,the userName and password isnt correct!</Alert>
    }
      <Button type='submit' variant="outlined" size="small">
        Login
      </Button>

    </form>}
    </>
  );
}