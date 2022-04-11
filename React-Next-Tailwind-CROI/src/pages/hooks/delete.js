import axios from 'axios';
import endPoints from '../../services/rest/api';

const deleteUser = async (id) => {
    const config = {
        headers: { Authorization: `Bearer ${document.cookie}` }
    }
    const response = await axios.delete(endPoints.user.user_delete(id), config);
    return response.data;
}

const deleteCategory = async (id) => {
    const config = {
        headers: { Authorization: `Bearer ${document.cookie}` }
    }
    const response = await axios.delete(endPoints.category.category_delete(id), config);
    return response.data;
}

const deleteProject = async (id) => {
    const config = {
        headers: { Authorization: `Bearer ${document.cookie}` }
    }
    const response = await axios.delete(endPoints.project.project_delete(id), config);
    return response.data;
}

const deleteActions = async (id) => {
    const config = {
        headers: { Authorization: `Bearer ${document.cookie}` }
    }
    const response = await axios.delete(endPoints.actions.actions_delete(id), config);
    return response.data;
}
const deleteBonds = async (id) => {
    const config = {
        headers: { Authorization: `Bearer ${document.cookie}` }
    }
    const response = await axios.delete(endPoints.bonds.bonds_delete(id), config);
    return response.data;
}
const deleteInvestment = async (id) => {
    const config = {
        headers: { Authorization: `Bearer ${document.cookie}` }
    }
    const response = await axios.delete(endPoints.investment.investment_delete(id), config);
    return response.data;
}
const deleteLoans = async (id) => {
    const config = {
        headers: { Authorization: `Bearer ${document.cookie}` }
    }
    const response = await axios.delete(endPoints.loans.loans_delete(id), config);
    return response.data;
}

const deleteStateActions = async (id) => {
    const config = {
        headers: { Authorization: `Bearer ${document.cookie}` }
    }
    const response = await axios.delete(endPoints.state_actions.state_actions_delete(id), config);
    return response.data;
}

const deleteActionsBuy = async (id) => {
    const config = {
        headers: { Authorization: `Bearer ${document.cookie}` }
    }
    const response = await axios.delete(endPoints.actions_buy.actions_buy_delete(id), config);
    return response.data;
}
const deleteBondsBuy = async (id) => {
    const config = {
        headers: { Authorization: `Bearer ${document.cookie}` }
    }
    const response = await axios.delete(endPoints.bonds_buy.bonds_buy_delete(id), config);
    return response.data;
}
const deleteInvestmentBuy = async (id) => {
    const config = {
        headers: { Authorization: `Bearer ${document.cookie}` }
    }
    const response = await axios.delete(endPoints.investment_buy.investment_buy_delete(id), config);
    return response.data;
}

const deleteOrder = async (id) => {
    const config = {
        headers: { Authorization: `Bearer ${document.cookie}` }
    }
    const response = await axios.delete(endPoints.order.order_delete(id), config);
    return response.data;
}

export { deleteUser, deleteCategory, deleteProject, deleteActions, deleteBonds, deleteInvestment, deleteLoans, deleteStateActions, deleteActionsBuy, deleteBondsBuy, deleteInvestmentBuy, deleteOrder };
