import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './orderAction.css';
import './modalComponents/RightDiv';
import axios from "axios";
import RightDiv from "./modalComponents/RightDiv";
import ClearIcon from '@mui/icons-material/Clear';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#fffcf9',
    boxShadow: 24,
    p: 4,
    width: 600,
    borderRadius: 5,
    outline: 0
};

const OrderAction = (props) => {
    const {setSeverity, setAlertTitle, setAlertMessage} = props;
    const [open, setOpen] = React.useState(true);
    const [ordersResponse, setOrdersResponse] = React.useState();

    React.useEffect(() => {
        axios.get('https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123')
            .then( (response) => {
                // handle success
                setOrdersResponse(response.data);
            })
            .catch( (error) => {
                // handle error
                console.log(error);
            })
    },[])
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAccept = () => {
        axios.post('https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/accept/')
            .then( (response) => {
                setSeverity('success');
                setAlertTitle('Success');
                setAlertMessage('Successfully accepted sale!')
                handleClose()
            })
            .catch( (error) => {
                // handle error
                console.log(error);
                setSeverity('error');
                setAlertTitle('Error');
                setAlertMessage('Error occurred. Unable to accept sale')
            })
    }

    const handleDecline = () => {
        axios.post('https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/decline')
            .then( (response) => {
                handleClose()
                setSeverity('success');
                setAlertTitle('Success');
                setAlertMessage('Successfully rejected sale!')
            })
            .catch( (error) => {
                // handle error
                console.log(error);
                setSeverity('error');
                setAlertTitle('Error');
                setAlertMessage('Error occurred. Unable to reject sale')
            })
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
                <div className={"main"}>
                    <div className={"div1"}>
                        <div>
                            <p style={{fontSize: 12}}>
                                CONGRATS!
                            </p>
                            <p style={{fontSize: 24}}>
                                Your watch sold!
                            </p>
                            <p style={{fontSize: 12}}>
                                You have 1 business day to accept the sale. If you do not accept, it will be automatically rejected.
                            </p>
                        </div>

                        <div className={"button-div"}>
                            <Button sx={{
                                ":hover": {
                                    bgcolor: "#5A5A5A",
                                    color: "white"
                                },
                                width: '100%', borderRadius: 15,
                                backgroundColor: '#1a3a32',
                                color: 'white', textTransform: 'capitalize', marginTop: 2}}
                                    onClick={handleAccept}>
                                Accept sale
                            </Button><br/>
                            <Button sx={{width: '100%', borderRadius: 15,
                                backgroundColor: 'white',
                                color: '#1a3a32', textTransform: 'capitalize', marginTop: 1}}
                                    onClick={handleDecline}>
                                Reject sale
                            </Button>
                        </div>
                    </div>
                    <RightDiv ordersResponse={ordersResponse}/>
                </div>
                <div className={"clear"}>
                    <ClearIcon></ClearIcon>
                </div>

            </Box>
        </Modal>
    )
}

export default OrderAction;