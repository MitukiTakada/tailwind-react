import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";


function App() {
  return (
    <div className="h-screen bg-body text-white">
     <Header />
     <BrowserRouter>
      <Routes
     </BrowserRouter>
    </div>
  );
}

export default App;
