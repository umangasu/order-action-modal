import './orderAction';
import OrderAction from "./orderAction";
import MyAlert from "./modalComponents/Alert";
import * as React from "react";

function App() {
    const [severity, setSeverity] = React.useState('');
    const [alertTitle, setAlertTitle] = React.useState('');
    const [alertMessage, setAlertMessage] = React.useState('');
  return (
    <div>
        <OrderAction setSeverity={setSeverity} setAlertTitle={setAlertTitle} setAlertMessage={setAlertMessage}/>
        {severity!='' && <MyAlert severity={severity} alertTitle={alertTitle} alertMessage={alertMessage}/>}
    </div>
  );
}

export default App;
