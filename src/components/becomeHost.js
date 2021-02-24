import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useSnackbar } from 'notistack';

import {
  Dialog,
  DialogContent,
  Box,
  Button,
  Typography,
  Slide,
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import useStyles from '../styles/components/becomeHostStyles';

import {
  closeBecomeHostModal,
  showSignupModal,
  showLoginModal,
} from '../redux/actions/modal/modalActions';
import { updateUserRoleToHost } from '../redux/actions/auth/authActions';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const BecomeHost = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();

  const {
    modal: { becomeHostModal },
    auth: { user },
  } = useSelector((state) => state);

  return (
    <Dialog
      TransitionComponent={Transition}
      open={becomeHostModal}
      onClose={() => dispatch(closeBecomeHostModal())}
      aria-labelledby='login-dialog'
      maxWidth='sm'
      className={classes.dialog}>
      <Typography className={classes.dialogTitle} variant='h3'>
        <FaceIcon className={classes.signupIcon} />
        <span>Become a Host </span>
      </Typography>

      {!user && (
        <Typography variant='body' align='center'>
          Please register or login to your account to become a host.
        </Typography>
      )}

      <DialogContent>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          padding={2}>
          {user?.role === 'user' ? (
            <Button
              variant='contained'
              color='primary'
              className={classes.submitBtn}
              style={{ marginRight: '0.5rem' }}
              onClick={() => {
                dispatch(updateUserRoleToHost(enqueueSnackbar));
              }}>
              Complete Application
            </Button>
          ) : (
            <>
              <Button
                variant='outlined'
                className={classes.cancelBtn}
                style={{ marginRight: '0.5rem' }}
                onClick={() => {
                  dispatch(closeBecomeHostModal());
                  dispatch(showSignupModal());
                }}>
                Sign Up
              </Button>
              <Button
                variant='contained'
                color='primary'
                className={classes.submitBtn}
                style={{ marginRight: '0.5rem' }}
                onClick={() => {
                  dispatch(closeBecomeHostModal());
                  dispatch(showLoginModal());
                }}>
                Login
              </Button>
            </>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default BecomeHost;
