import "./App.css";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Main from "./Main";

function App() {
  return (
    <div className="bg-[#fff1e5]">
      <Header />
      <SubHeader />
      <main className="w-4/5 mx-auto">
        <Main />
      </main>
    </div>
  );
}

export default App;
