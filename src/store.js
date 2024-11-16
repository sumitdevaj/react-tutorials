// import { createStore } from "redux";
// import rootReducer from "./reducers/rootReducer";

import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(rootReducer);

// export default store;
import productReducer from "../src/components/product/ProductSlice";
const store =  configureStore({
    reducer:{
        products:productReducer
    }
})

export default store;