import Header from "./commons/header/Header";
import Footer from "./commons/footer/Footer";
import HomePage from "./pages/homePage"
import "./index.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage/>
      <Footer />
    </div>
  );
}

export default App;
