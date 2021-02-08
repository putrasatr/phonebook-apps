const phonebooks = (state = [], action) => {
    switch (action.type) {
        
        case 'ADD_CONTACT':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    phone: action.phone,
                }
            ]

        case 'ADD_CONTACT_SUCCESS':
            return state.map(item => {
                item.sent = true
                return item
            });

        case 'ADD_CONTACT_FAILURE':
            return state.map((item) => {
                if (item.id === action.id) {
                    item.sent = false
                }
                return item
            });

        case 'LOAD_CONTACT_SUCCESS':
            return action.data.data.map((item) => {
                item.sent = true;
                item.isBtnSave = false;
                return item
            })

        case 'LOAD_CONTACT_FAILURE':
            return state;

        case 'DELETE_CONTACT':
            return state.filter(item => item.id !== action.id)

        case 'DELETE_CONTACT_SUCCESS':
            return state

        case 'DELETE_CONTACT_FAILURE':
            return state;

        default:
            return state;
    }
}

export default phonebooks


