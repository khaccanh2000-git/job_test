import Header from "./commons/header/Header";
import Footer from "./commons/footer/Footer";
import "./index.scss";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
