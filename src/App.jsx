import { Suspense } from "react"
import Heading from "./components/Heading"
import Logo from "./components/Logo"
import Navbar from "./components/Navbar"
import OrderContainer from "./components/OrderContainer"
import States from "./components/States"

const loadOrder = () => fetch('/orders.json').then(res => res.json());


function App() {
  
  const orderPromise = loadOrder();

  return (
    <>

    <header className="container mx-auto px-6 mt-2">
      <Navbar></Navbar>
    </header>
     <Heading>Kitchen Room</Heading>

     <main>
       
      <Suspense fallback={<span className="text-2xl flex justify-center items-center mt-4">Loading...</span>}>
        <OrderContainer promise={orderPromise}></OrderContainer>
      </Suspense>

     </main>
     
    </>
  )
}

export default App
