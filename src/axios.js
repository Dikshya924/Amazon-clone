import axios from 'axios'
const instance=axios.create({
    baseURL: 'http://localhost:5001/clone-df2a6/us-central1/api' //Api (cloud function URL)
});
export default instance
