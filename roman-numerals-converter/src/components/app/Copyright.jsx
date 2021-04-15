import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { appName } from '../../helpers/app';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        {appName}
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
