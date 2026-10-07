import PaymentSuccess from "./components/PaymentSucess";
import Product from "./components/Product"
import data from "./components/data"
import {BrowserRouter,Route,Routes} from "react-router-dom";
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={   <Product products={data}/>}>

      </Route>
      <Route path="/paymentSuccess" element={<PaymentSuccess/>}></Route>
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
