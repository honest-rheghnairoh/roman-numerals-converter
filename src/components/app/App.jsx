import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { IconButton } from '@material-ui/core';
import SwapHorizontalCircleOutlinedIcon from '@material-ui/icons/SwapHorizontalCircleOutlined';
import Alert from '@material-ui/lab/Alert';
import { useStyles } from './styles';
import { appName } from '../../helpers/constants';
import { RomanNumerals } from '../../helpers/RomanNumerals';

export default function App() {
  const classes = useStyles();
  const [valueOne, setValueOne] = React.useState('');
  const [valueTwo, setValueTwo] = React.useState('');
  const [labelOne, setLableOne] = React.useState('Integer Number');
  const [labelTwo, setLableTwo] = React.useState('Roman Numeral');
  const [mode, setMode] = React.useState('number');
  const [errors, setErrors] = React.useState([]);

  const handleChangeOne = event => setValueOne(event.target.value);
  const handleChangeTwo = event => setValueTwo(event.target.value);
  const handleSwap = () => {
    const l = labelOne;
    const v = valueOne;
    setLableOne(labelTwo);
    setLableTwo(l);
    setValueOne(valueTwo);
    setValueTwo(v);
    if (mode === 'number') setMode('roman');
    else setMode('number');
  };

  const handleConvert = event => {
    setErrors([]);
    event.preventDefault();
    if (valueOne === '') {
      setErrors([`${labelOne} is required!`]);
      setValueTwo('');
    } else if (mode === 'number') {
      let number = parseInt(valueOne, 10);
      if (!number) number = 0;
      setValueOne(number);
      RomanNumerals.toRoman(
        number,
        val => setValueTwo(val),
        err => {
          setErrors([err]);
          setValueTwo('');
        }
      );
    } else {
      const roman = valueOne.toUpperCase();
      setValueOne(roman);
      RomanNumerals.fromRoman(
        roman,
        val => setValueTwo(val),
        err => {
          setErrors([err]);
          setValueTwo('');
        }
      );
    }
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
                id="input-one"
                label={labelOne}
                multiline
                rows={3}
                variant="outlined"
                value={valueOne}
                onChange={handleChangeOne}
                className={classes.input}
              />
            </Grid>
            <Grid item xs={3}>
              <Grid container style={{ justifyContent: 'center' }}>
                <IconButton
                  aria-label="swap"
                  className={classes.swapButton}
                  onClick={handleSwap}
                >
                  <SwapHorizontalCircleOutlinedIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item xs>
              <TextField
                id="input-two"
                label={labelTwo}
                multiline
                disabled
                rows={3}
                variant="outlined"
                value={valueTwo}
                onChange={handleChangeTwo}
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
            onClick={handleConvert}
          >
            CONVERT
          </Button>
          {errors &&
            errors.map(err => (
              <Alert key={err} severity="error">
                {err}
              </Alert>
            ))}
        </form>
      </div>
    </Container>
  );
}
