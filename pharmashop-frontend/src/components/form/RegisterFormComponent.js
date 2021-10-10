import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useContext } from 'react';
import { PharmaContext } from '../../PharmaContext';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterFormComponent() {
  const classes = useStyles();
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [currentUser,setCurrentUser]= useContext(PharmaContext)
  const history= useHistory();

  const  submitHandler= async(e)=>{
    e.preventDefault();
    const user={name,email,password};
    const data= await fetch('http://localhost:8000/api/register',{
        method:'POST',
        body:JSON.stringify(user),
        headers: {
            "Content-Type":'application/json',
            "Acept":'application/json'
        }

    });
    const res= await data.json();
    localStorage.setItem("user-info",JSON.stringify(res));
    setCurrentUser(JSON.parse(localStorage.getItem("user-info")));
    history.push('/');
    
    

  }
 
  return (
   
    <Container component="main" maxWidth="xs">
        <form onSubmit={submitHandler}>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign up
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField
                        onChange={(e)=>{setName(e.target.value)}}
                        value={name}
                        autoComplete="fname"
                        name="name"
                        variant="outlined"
                        required
                        fullWidth
                        id="name"
                        label="name"
                        autoFocus
                    />
                    </Grid>
                
                    <Grid item xs={12}>
                    <TextField
                        onChange={(e)=>{setEmail(e.target.value)}}
                        value={email}
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        onChange={(e)=>{setPassword(e.target.value)}}
                        value={password}
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                    <Link href="/login" variant="body2">
                        Already have an account? Sign in
                    </Link>
                    </Grid>
                </Grid>
               
            </div>
            <Box mt={5}>
            </Box>
      </form>
    </Container>
  );
}
