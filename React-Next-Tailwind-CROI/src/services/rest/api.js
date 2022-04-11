const API = "http://localhost:3001/api/v1"

const endPoints = {
	auth: {
		login: `${API}/auth/login`
	},
	user:{
		user_list: `${API}/user`,
		user_add: `${API}/user`,
		user_delete: (id) => `${API}/user/${id}/`
	},
	category:{
		category_list: `${API}/category`,
		category_add: `${API}/category`,
		category_delete: (id) => `${API}/category/${id}/`
	},
	type_financing:{
		type_financing_list: `${API}/type`
	},
	project: {
		project_list: `${API}/project`,
		project_list_one: (id) => `${API}/project/${id}`,
		project_update: (id) => `${API}/project/${id}/`,
		project_delete: (id) => `${API}/project/${id}/`,
	},
	actions:{
		actions_list: `${API}/action`,
		actions_delete: (id) => `${API}/action/${id}/`
	},
	bonds:{
		bonds_list: `${API}/bond`,
		bonds_delete: (id) => `${API}/bond/${id}/`
	},
	investment:{
		investment_list: `${API}/investment`,
		investment_delete: (id) => `${API}/investment/${id}/`
	},
	loans:{
		loans_list: `${API}/loans`,
		loans_delete: (id) => `${API}/loans/${id}/`
	},
	state_actions:{
		state_actions_list: `${API}/stateaction`,
		state_actions_delete: (id) => `${API}/stateaction/${id}/`
	},
	actions_buy:{
		actions_buy_list: `${API}/actionbuy`,
		actions_buy_delete: (id) => `${API}/actionbuy/${id}/`
	},
	bonds_buy:{
		bonds_buy_list: `${API}/bondbuy`,
		bonds_buy_delete: (id) => `${API}/bondbuy/${id}/`
	},
	investment_buy:{
		investment_buy_list: `${API}/investmentbuy`,
		investment_buy_delete: (id) => `${API}/investmentbuy/${id}/`
	},
	order:{
		order_list: `${API}/order`,
		order_delete: (id) => `${API}/order/${id}/`
	},
	
}

export default endPoints;

