import { AppBar, Button, Toolbar, Typography } from 'material-ui';
import React from 'react';
import styles from './Primary.css';
import { withStyles } from 'material-ui/styles/index';
import Download from '@axetroy/react-download';
import UploadButton from './UploadButton';

const Primary = ({ classes, train, open, upload, save, content }) => {
  return (
    <AppBar position="fixed" className={classes.appBar} color="default">
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          Cyto
        </Typography>

        <Button onClick={train}>Run</Button>

        <input onChange={open} type="file" />

        <UploadButton upload={upload} />

        <Download file="example.cyto" content={JSON.stringify(content)}>
          <Button onClick={save}>Save</Button>
        </Download>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Primary);
