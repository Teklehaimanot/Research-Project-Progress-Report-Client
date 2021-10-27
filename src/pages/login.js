import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(10),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
    btn: {
        color: 'green'
    },
    cancel: {
        color: 'red'
    }
}));

const Login = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const url = 'http://localhost:5000/'
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault();

        axios.post(`${url}api/user/auth`, {
            username: email,
            password: password
        })
            .then(res => {
                localStorage.setItem('token', res.data.token)
                history.push('/')
            })
            .catch(err => {
                console.log(err)
                alert('incorrect password or username')
            })


        console.log(email, password);
        closeOpen()

    };

    const closeOpen = () => {
        setEmail('');
        setPassword('')
    }

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
                label="Email"
                variant="filled"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                variant="filled"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div>
                <Button variant="contained" onClick={closeOpen} className={classes.cancel}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained" className={classes.btn}>
                    Login
                </Button>
            </div>
        </form>
    );
};

export default Login;