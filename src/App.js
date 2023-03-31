import "./App.css";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Main from "./Main";
import Archive from "./Archive";
import DetailedNews from "./DetailedNews";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#fff1e5]">
      <Header />
      <SubHeader />
      <main className="w-4/5 mx-auto ">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/archived/:id" element={<DetailedNews />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
