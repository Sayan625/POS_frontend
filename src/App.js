import './App.css';
import PageLayout from './components/PageLayout';
// import AddSale from './pages/AddSale';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DailyReport from './pages/DailyReport';
import AllSales from './pages/AllSales';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            {/* <Route path='/' element={<PageLayout page={<AddSale />} />} /> */}
            <Route path='/' element={<PageLayout page={<AllSales />} />} />
            <Route path='/top-sale' element={<PageLayout page={<DailyReport />} />} />
          </Route>
          <Route path='/login' element={<PageLayout page={<Login />} />} />
          <Route path='/reg' element={<PageLayout page={<Registration />} />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
