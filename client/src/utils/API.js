import axios from 'axios';

    // Get all creditors
    const getCreditors = () => {
        return axios.get("/api/creditors/")
    }

    const creditors = {
        getCreditors
    };

    export default creditors;