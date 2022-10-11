import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Offers from "../pages/Offers/Offers";
import PrivateRoute from "../private/PrivateRouter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route
          path="/Offers"
          element={
            <PrivateRoute>
              <Offers />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
