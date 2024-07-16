import { Routes, Route, BrowserRouter } from "react-router-dom"
import Inicial from "./pages/Inicial"
import NovoVideo from "./pages/NovoVideo"
import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import RolarPraCima from "../src/componentes/RolarPraCIma"
import AssistirVideo from "../src/pages/AssistirVIdeo"
import NotFound from "./pages/NotFound"

const AppRoutes = () => {
  
  return(
    <>
    <BrowserRouter>
    <RolarPraCima />
      <Routes>
        <Route path="/" element={<><Header/> <Inicial/> <Footer/></>}></Route>
        <Route path="/novo-video" element={<><Header/><NovoVideo /><Footer/></>}></Route>
        <Route path="/video/:id" element={<><Header/><AssistirVideo/><Footer/></>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRoutes