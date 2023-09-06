import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import Home from "./Page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
     const [loading, setLoading] = useState(false);
   useEffect(() => {
     setLoading(true);
     setTimeout(() => {
       setLoading(false);
     }, 3000);
   }, []);
  
   
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
  
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          </BrowserRouter>
      )}
    </>
  );
}

export default App;
