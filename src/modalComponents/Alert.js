import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const MyAlert = (props) => {
    const {severity, alertTitle, alertMessage} = props;
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity={severity} >
                <AlertTitle>{alertTitle}</AlertTitle>
                {alertMessage}
            </Alert>
        </Stack>
    );
}

export default MyAlert;