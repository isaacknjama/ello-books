import React from 'react';
import { Alert, Snackbar } from '@mui/material';

interface NotificationProps {
  snackBarState: {
    open: boolean;
    Transition: React.ComponentType<any>;
    message: string;
  };
  handleClose: () => void;
}

export const Notification: React.FC<NotificationProps> = ({ snackBarState, handleClose }) => (
  <Snackbar
    open={snackBarState.open}
    onClose={handleClose}
    TransitionComponent={snackBarState.Transition}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    autoHideDuration={3000}
  >
    <Alert sx={{ background: '#CFFAFA' }}>{snackBarState.message}</Alert>
  </Snackbar>
);
