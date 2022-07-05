import React from 'react';
import ReactDOM from 'react-dom/client';

import App from "./ReactRedux/App";
import {Provider} from "react-redux";
import store from "./ReactRedux/redux/store";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Provider store={store}>
            <App/>
        </Provider>
    </div>
);
