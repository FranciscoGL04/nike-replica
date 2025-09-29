import Home from "./home/Home";
import Men from "./men/men";
import Women from "./women/women";
import Kids from "./kids/kids";
import New from "./new/new";
import Sport from "./sport/sport";
import Sale from "./sale/sale";
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