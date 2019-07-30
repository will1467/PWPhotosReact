import React, { Fragment, useEffect} from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { CLIENT_ID, API_KEY, DEV_URL, DISCOVERY_DOCS, OAUTH2_SCOPE}  from './config.js';

function App() {

  const loadGoogleAPI = () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";

    script.onload = () => {
      window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
          apiKey : API_KEY,
          clientId : CLIENT_ID,
          scope : OAUTH2_SCOPE,
          discoveryDocs : DISCOVERY_DOCS
        }).then( () => {
          var GoogleAuth = window.gapi.auth2.getInstance();
          GoogleAuth.isSignedIn.listen(updateSignInStatus);
        })
      });
    }

    document.body.appendChild(script);
  }
  
  useEffect(() => {
    loadGoogleAPI();
  })



  const updateSignInStatus = () => {
    console.log("Update");
  }

  return (
    <Fragment>
      <Header/>
      <Footer/>
    </Fragment>
  );
}

export default App;
