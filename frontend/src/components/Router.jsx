import { BrowserRouter, Routes , Route} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import HomeList from "../Routes/Home/Home";
import List1 from "../Routes/List/List";


function Router () {
  return (

  

      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeList/>}/>
        <Route path="/list1" element={<List1/>}/>
        <Route path="/list2" element={<>상품페이지2</>}/>
        <Route path="/list3" element={<>상품페이지3</>}/>
        
        
         
      </Routes>
        <Footer/>
      </BrowserRouter>
  
  )
}

export default Router;