import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import {PayPalScriptProvider, PayPalButtons} from '@paypal/react-paypal-js'
import "react-toastify/dist/ReactToastify.css"
import 'react-icons'
import "animate.css"
import "./styles/App.css"


const App = () => {
  const initialOptions = {
    "client-id": "AUmzQOR5IE1EVLzofw9yEN8jl2sjIQ7Qw7KeUPa4kEO-E8NTPXy1YW8oMdm9TKdSl49iJk8uCVAwkwNf",
    currency: "USD",
    intent: "capture"
  }
  return (
    <PayPalScriptProvider>
      <div className="App">
        <Outlet />
        <ToastContainer position="top-left" theme="dark" autoClose={2000} />
      </div>
    </PayPalScriptProvider>
  )
}

export default App;
