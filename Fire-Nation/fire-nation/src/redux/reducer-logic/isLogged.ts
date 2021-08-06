const loggedReducer = (state = false, action: { type: any; }) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state;
    }

    return state;
};

export default loggedReducer;