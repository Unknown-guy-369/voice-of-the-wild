import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainSite from './pages/MainSite';
import VolunteerUploadPage from './pages/Volunteer_page';
import AmbassadorUploadPage from './pages/Commitee_member';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainSite />} />
        <Route path='/volunteer' element={<VolunteerUploadPage />} />
        <Route path='/ambassdors' element={<AmbassadorUploadPage />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
