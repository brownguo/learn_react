import React from 'react';
import ReactDOM from 'react-dom/client';

import HelloWorld from "./Common/HelloWorld";
import User from "./Common/FuncComponent"
import "./Common/TestES6Info"
import App from "./Common/App";
import EventBindComponent from "./Common/EventBindComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <HelloWorld />
        <User/>
        <App/>
        <EventBindComponent/>
    </div>
);
