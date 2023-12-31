import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import SignupForm from './SignupForm';
import Loginpage from './Loginpage';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowLoginPage(false);
  };

  const handleLoginButtonClick = () => {
    setShowLoginPage(true);
  };

  const handleSwitchToSignup = () => {
    setShowLoginPage(false);
  };

  const handleGoogleLogin = () => {
    // Open Google authentication window
    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/auth' +
      '?client_id=931107241311-471l9no4t5ig9k49rkr42hdbv237lq4k.apps.googleusercontent.com' +
      '&redirect_uri=YOUR_REDIRECT_URI' +
      '&response_type=token';

    window.location.href = googleAuthUrl;
  };

  const handleGitHubLogin = () => {
    // Open GitHub authentication window
    const githubAuthUrl = 'https://github.com/login/oauth/authorize' +
      '?client_id=9ba714f99c64f4fbe8a4' +
      '&redirect_uri=https://rendes.azurewebsites.net/' +
      '&scope=user';

    window.location.href = githubAuthUrl;
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Login/Signup
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <center>{showLoginPage ? 'Login' : 'Registration'}</center>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            {showLoginPage ? (
              <>
                <Loginpage />
                <center>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSwitchToSignup}
                  >
                    Switch to Signup
                  </Button>
                  <br />
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={handleGoogleLogin}
                  >
                    Login with Google
                  </Button>
                </center>
              </>
            ) : (
              <>
                <SignupForm />
                <center>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleLoginButtonClick}
                  >
                    Login
                  </Button>
                  <br />
                  <Button
                  variant="contained"
                  color="warning"
                  onClick={handleGoogleLogin}
                >
                  Login with Google
                </Button>
                  <Button
                    variant="contained"
                    color="info"
                    onClick={handleGitHubLogin}
                  >
                    Login with GitHub
                  </Button>
                </center>
              </>
            )}
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
