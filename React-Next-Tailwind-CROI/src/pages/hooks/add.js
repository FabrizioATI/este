import axios from 'axios';
import endPoints from '../../services/rest/api';

const addUser = async (body) => {
    const config = {
        headers: { Authorization: `Bearer ${document.cookie}` }
    }
    const response = await axios.post(endPoints.user.user_add, body, config);
    return response.data;
};

const addCategory = async (body) => {
    const config = {
        headers: { Authorization: `Bearer ${document.cookie}` }
    }
    const response = await axios.post(endPoints.category.category_add, body, config);
    return response.data;
};

export { addUser, addCategory };