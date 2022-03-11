import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPage';
import NavBar from './NavBar';
import Footer from './Footer';
import NotFoundPage from './pages/NotFoundPage';

import {
	BrowserRouter,
  Routes,
	Route
} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.css'; 
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div class="container">
          <Routes>
            <Route path="/" element={<HomePage/>} exact />
            <Route path="/Home/Privacy" element={<PrivacyPolicy/>} exact />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
