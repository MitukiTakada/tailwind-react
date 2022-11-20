import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";


function App() {
  return (
    <div className="h-screen bg-body text-white">
     <Header />
     <BrowserRouter>
      <Routes>
        <Route path="/"/>
        <Route path="/aboutme"/>
        <Route path=""/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
