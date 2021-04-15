import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { IconButton } from '@material-ui/core';
import SwapHorizontalCircleOutlinedIcon from '@material-ui/icons/SwapHorizontalCircleOutlined';
import Copyright from './Copyright';
import { useStyles } from './styles';
import { appName } from '../../helpers/app';

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {appName}
        </Typography>
        <form className={classes.form} noValidate>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justify="space-between"
            className={classes.gridContainer}
          >
            <Grid item xs>
              <TextField
                id="outlined-multiline-static"
                label="Decimal Number"
                multiline
                rows={3}
                defaultValue="Default Value"
                variant="outlined"
                value={value}
                onChange={handleChange}
                className={classes.input}
              />
            </Grid>
            <Grid item xs={3}>
              <Grid container style={{ justifyContent: 'center' }}>
                <IconButton aria-label="swap" className={classes.swapButton}>
                  <SwapHorizontalCircleOutlinedIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item xs>
              <TextField
                id="outlined-multiline-static"
                label="Roman Numeral"
                multiline
                disabled
                rows={3}
                defaultValue="Default Value"
                variant="outlined"
                value={value}
                onChange={handleChange}
                className={classes.input}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            size="large"
            fullWidth
          >
            CONVERT
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
