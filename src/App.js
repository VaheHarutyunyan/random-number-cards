import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.scss";

function App() {
  return (
    <div className="layout">
      <Header />
      <div className="common">
        <Main />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
