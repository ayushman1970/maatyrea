import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import { WorkOrder } from './pages/workorder/workorder';
import {Login} from './pages/login/login'
import { AddEditWO } from './pages/updateworkorder/updateworkorder';
import { ExportWO } from './pages/exportworkorder/exportworkorder';
import { TripRegister } from './pages/trippanel/trippanel';
import { GenerateTripReport } from './pages/generatetripreport/generatetripreport';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/workorder/' element={<WorkOrder/>}/>
            <Route path="/updateworkorder/:id" element={<AddEditWO />}/>  
            <Route path="/exportworkorder/" element={<ExportWO />}/>
            <Route path="/generatetripreport/" element={<GenerateTripReport />}/>
             <Route path='/trippanel/' element={<TripRegister/>}/>   
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
