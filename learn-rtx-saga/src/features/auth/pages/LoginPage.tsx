import * as React from 'react';
import { Box, makeStyles, Paper, Typography, Button, CircularProgress } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { authActions } from '../authSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  box: {
    padding: theme.spacing(4),
  },
  button: {
    paddingTop: theme.spacing(4),
  },
  header: {
    gridArea: 'header',
  },
  sidebar: {
    gridArea: 'sidebar',
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
  },
  main: {
    gridArea: 'main',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 3),
  },
}));

export default function AdminLayout() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector((state) => state.auth.logging);
  const handleLoginClick = () => {
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };

  return (
    <Box className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Students Management
        </Typography>
        <Box className={classes.button}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLoginClick}>
            {isLogging && <CircularProgress size={20} color="secondary" />} &nbsp; Fake Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
