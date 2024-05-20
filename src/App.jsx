import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StoreProvider } from './store/StoreContext';
import Portfolio from './components/pages/developer/dashboard/portfolio/Portfolio';
import Home from './components/pages/developer/ui/Home';
import About from './components/pages/developer/ui/About';
import Services from './components/pages/developer/dashboard/services/Services';
import Contacts from './components/pages/developer/ui/Contacts';
import Login from './components/pages/developer/access/Login';
import ForgotPasswrod from './components/pages/developer/access/ForgotPassword';
import CreatePassword from './components/pages/developer/access/CreatePassword';
import User from './components/pages/developer/dashboard/users/User';



function App() {
 const queryClient = new QueryClient

  return (
    
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
    <Router>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="user" element={<User />} />

          <Route path="/services" element={<Services />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPasswrod />} />
          <Route path="create-password" element={<CreatePassword />} />
          
        </Routes>
    </Router>
    </StoreProvider>
    </QueryClientProvider>
  
  )
}

export default App
