import { produce } from 'immer';

const initialState = {
    worker: {}
}

export default produce((state, action) => {
    switch (action.type) {
        case 'SET_WORKER_DETAILS':
            state.worker = action.payload;
            break;
        case 'SET_USER_NAME':
            state.worker.userName = action.payload;
            break;
        case 'SET_PASSWORD':
            state.worker.password = action.payload;
            break;
        case 'SET_EMAIL':
            state.worker.email = action.payload;
            break;
        case 'SET_STATUS':
            state.worker.status = action.payload;
            break;
    }
}, initialState)