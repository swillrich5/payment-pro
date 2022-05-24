import axios from 'axios';

    // Get all creditors
    const getCreditors = () => {
        return axios.get("/api/creditors/")
    }

    const saveCreditor = (creditorData) => {
        return axios.post("/api/creditors/", creditorData);
    }

    const creditors = {
        getCreditors, saveCreditor
    };

    export default creditors;