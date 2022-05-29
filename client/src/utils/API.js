import axios from 'axios';

    // Get all creditors
    const getCreditors = () => {
        return axios.get("/api/creditors/")
    }

    const saveCreditor = (creditorData) => {
        return axios.post("/api/creditors/", creditorData);
    }

    const savePayment = (paymentData) => {
        console.log(paymentData);
        return axios.post("/api/payments/", paymentData);
    }

    const creditors = {
        getCreditors, saveCreditor, savePayment
    };

    export default creditors;