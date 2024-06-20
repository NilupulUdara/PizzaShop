import './App.css'
import { AllRoutes } from './Routes/AllRoutes';
import { Header, Footer } from "./components";

function App() {

  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App