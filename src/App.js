import Home from "../src/pages/home/Home";
import Men from "../src/pages/men/men";
import Women from "../src/pages/women/women";
import Kids from "../src/pages/kids/kids";
import New from "../src/pages/new/new";
import Sport from "../src/pages/sport/sport";
import Sale from "../src/pages/sale/sale";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App2() {
  return(
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/men" element={<Men/>}/>
            <Route path="/women" element={<Women/>}/>
            <Route path="/kids" element={<Kids/>}/>
            <Route path="/kids" element={<Kids/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/sport" element={<Sport/>}/>
            <Route path="/sale" element={<Sale/>}/>

        </Routes>
    </Router>
  )
}

export default App2;