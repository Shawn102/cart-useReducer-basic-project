import Navbar from "./components/Navbar";
import Product from "./components/Product";
import LoadingImg from './loading.webp';
import { useGlobalContext } from './context';

function App() {
  const {loading} = useGlobalContext();
  if(loading) {
    return (
      <div className="grid-loading">
        <div>
          <h3 className="loading-h3">This page is...</h3>
          <img src={LoadingImg} alt="loading" className="proload-gif-image" />
        </div>
      </div>
    )
  }
  return (
    <div className="App">
      <Navbar />
      <Product />
    </div>
  );
}

export default App;
