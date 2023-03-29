// import { legacy_createStore as createStore } from 'redux';
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composeEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composeEnhancers)

// export default store

import { configureStore } from "@reduxjs/toolkit"; 
import TodoSlice from "../components/TodoList/TodoSlice";
import FiltersSlice from "../components/Filters/FiltersSlice";

const store = configureStore({
    reducer: {
        filters: FiltersSlice.reducer,
        todoList: TodoSlice.reducer,
    }
})

export default store