import {
    GET_ME,
    SHOW_LOADING,
    SHOW_ERROR,
    HIDDEN_LOADING,
    HIDDEN_ERROR,
    LOGOUT,
} from '../Types';

const initislSate = {
    user: {},
    loading: false,
    error: null,
};

export const AuthReducer = (state = initislSate, action) => {
    const {type,payload}=action
    switch (type) {
        case GET_ME: {
            return {
                ...state,
                user: payload,
            };
        }
        case LOGOUT: {
            return {
                ...state,
                user: {}
            }
        }
        case SHOW_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case HIDDEN_LOADING: {
            return {
                ...state,
                loading: false
            }
        }
        case HIDDEN_ERROR: {
            return {
                ...state,
                error: null
            }
        }
        case SHOW_ERROR: {
            return {
                ...state,
                error: "ой что то не так!"
            }
        }

        default:
            return state
    }
}