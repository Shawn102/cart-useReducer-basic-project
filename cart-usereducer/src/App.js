import Nav from "./components/Nav";
import CartContainer from "./components/CartContainer";
import preload from "./Preload.gif";
import { MyGlobalContext } from "./Context";

function App() {
  const { loading } = MyGlobalContext();

  if (loading) {
    return (
      <div className="App">
        <div className="grid-loading">
          <div>
            <h3 className="loading-h3">This page is</h3>
            <img
              src={preload}
              alt="proload.gif"
              className="proload-gif-image"
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <Nav />
      <CartContainer />
    </div>
  );
}

export default App;
