import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/layout';
import Home from './pages/home';
import About from './pages/about';
import Vans from './pages/vans';
import VanDetails from './pages/vans/vandetails';
import HostLayout from './components/hostlayout';
import Dashboard from './pages/dashboard';
import Income from './pages/income';
import Reviews from './pages/reviews';
import HostVans from './pages/hostvans';
import HostVansDetail from './pages/hostvans/hostvansdetail'
import VansDetail from './pages/vans/vaninfo';
import Pricing from './pages/hostvans/pricing';
import Photos from './pages/vans/photos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetails />} />

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVansDetail />}>
              <Route index element={<VansDetail />} />
              <Route path='pricing' element={<Pricing />} />
              <Route path='photos' element={<Photos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
