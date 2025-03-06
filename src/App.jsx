import React from 'react'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { XcitiumPage } from './components/XcitiumPage'
import { Firewall } from './components/Firewall'
import { Surveillance } from './components/Surveillance'
import { HomeNetworking } from './components/HomeNetworking'
import { CampusNetworking } from './components/CampusNetworking'
import { VpnSolutions } from './components/VpnSolutions'
import { Crm } from './components/Crm'
import { Erp } from './components/Erp'
import { Website } from './components/Website'
import { AppDesign } from './components/AppDesign'
import { DigitalMarketting } from './components/DigitalMarketting'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/endpoint-security" element={<XcitiumPage />} />
      <Route path="/firewall-protection" element={<Firewall />} />
      {/* alarms-surveillance */}
      <Route path="/alarms-surveillance" element={<Surveillance />} />
      {/* home-networking */}
      <Route path="/home-networking" element={<HomeNetworking />} />
      {/* campus-networking */}
      <Route path="/campus-networking" element={<CampusNetworking />} />
      {/* network-security */}
      {/* vpn-solutions */}
      <Route path="/vpn-solutions" element={<VpnSolutions />} />
      {/* crm */}
      <Route path="/crm" element={<Crm />} />
      {/* erp */}
      <Route path="/erp" element={<Erp />} />
      {/* web-development */}
      <Route path="/website" element={<Website />} />
      {/* mobile-apps */}
      <Route path="/app-design" element={<AppDesign />} />
      {/* digital-marketing */}
      <Route path="/digital-marketing" element={<DigitalMarketting />} />
      {/* cloud-services */}
    </Routes>
    </>
  )
}

export default App