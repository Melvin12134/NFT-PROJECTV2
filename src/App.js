import { useEffect } from 'react';
import './App.css';
import { Sidebar } from './Sidebar/Sidebar';

import { Topbar } from './Topbar/topbar';
import { Route, BrowserRouter } from 'react-router-dom';
import { Profile } from './Profile/Profile';




function App() {




  return (
   


<div className="main">

     <BrowserRouter>
     <Topbar />

     <Sidebar />
     <Route exact path="/profile" component={Profile} />
      
      </BrowserRouter>
      </div>



     
    
      

  )
}

export default App;
