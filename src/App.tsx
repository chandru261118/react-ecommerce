import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import './App.css';
import NavBar from './Sharing/TopBar';
import Footer from './Sharing/Footer';
import Home from './Components/Home';

const AppInner: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(location.pathname === '/');

  useEffect(() => {
    // show loader only when entering Home (on initial load or nav)
    if (location.pathname === '/') {
      setLoading(true);
      const t = window.setTimeout(() => setLoading(false), 2000); // 2 seconds
      return () => window.clearTimeout(t);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  return (
    <>
      {loading && (
         <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
                <div className="preloader-circle"></div>
                <div className="preloader-img pere-text">
                    <img src="assets/img/logo/logo.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
      )}

      <NavBar />
      <main style={{ minHeight: '60vh' }}>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          {/* other routes */}
        </Switch>
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}

export default App;
