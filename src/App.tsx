import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Track from './Pages/Track'
import AirFreight from './Pages/Airfreight'
import OceanFreight from './Pages/OceanFreight'
import RoadFreight from './Pages/RoadFreight'
import ProjectImport from './Pages/ProjectImport'
import CostomClearance from './Pages/CostomClearance'
import ShippingService from './Pages/ShippingService'
import ExpressDelivery from './Pages/ExpressDelivery'
import InternationalFreight from './Pages/InternationalFreight'
import EcommerceShipping from './Pages/EcommerceShipping'
import SameDayShipping from './Pages/SameDayShipping'
import BulkHeavyGoods from './Pages/BulkHeavyGoods'
import SecureAndInsured from './Pages/SecureAndInsured'
import BookingPage from './Pages/BookingPage'
import Destination from './Pages/Destination'
import ScrollToTop from './Components/ScrollToTop'
import GoogleTranslate from './Components/GoogleTranslator'

function App() {
  return (
    <div className='overflow-hidden'>
      <Router>
      <Layout>
        {/* Scroll to top on route change */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/track" element={<Track />} />
          <Route path="/services/air-freight" element={<AirFreight />} />
          <Route path="/services/ocean-freight" element={<OceanFreight />} />
          <Route path="/services/road-freight" element={<RoadFreight />} />
          <Route path="/services/project-import" element={<ProjectImport />} />
          <Route path="/services/costom-clearance" element={<CostomClearance />} />
          <Route path="/services/shipping-service" element={<ShippingService />} />
          <Route path="/express-delivery" element={<ExpressDelivery />} />
          <Route path="/international-freight" element={<InternationalFreight />} />
          <Route path="/ecommerce-shipping" element={<EcommerceShipping />} />
          <Route path="/same-day-shipping" element={<SameDayShipping />} />
          <Route path="/bulk-heavy-goods" element={<BulkHeavyGoods />} />
          <Route path="/secure-insured" element={<SecureAndInsured />} />
          <Route path="/booking-page" element={<BookingPage />} />
          <Route path="/services/destination" element={<Destination />} />
        </Routes>
        {/* <GoogleTranslate /> */}
      </Layout>
    </Router>
    </div>
  )
}

export default App
