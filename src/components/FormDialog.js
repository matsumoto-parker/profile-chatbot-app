import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          下記メールアドレスへお問い合わせください
        </DialogTitle>
        <DialogContent>miu.matsumoto04@gmail.com</DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
