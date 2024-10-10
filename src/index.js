import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ContextWrapper from "./context/ContextWrapper";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="dev-msft4ioc4edys4zl.us.auth0.com"
    clientId="2aLyXQBo1o2pIOPnuzh99kMCI35op8DK"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  

    <ContextWrapper>
      <App />
    </ContextWrapper>,
    </Auth0Provider>,
  document.getElementById("root")
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
