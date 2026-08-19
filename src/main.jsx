import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import {Provider} from "react-redux"
import { store } from "./app/store.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
createRoot(document.getElementById("root")).render(
 <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
 </Provider>
  
  
);