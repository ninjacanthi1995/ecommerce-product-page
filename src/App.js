import './App.scss';
import TopMenu from "./components/top-menu";
import ProductImages from "./components/product-images";
import ProductDetail from "./components/product-detail";
import CartDetail from "./components/cart-detail";

function App() {
  return (
    <div className="App">
        <TopMenu />
        <main>
            <ProductImages/>
            <ProductDetail/>
        </main>
        <CartDetail/>
    </div>
  );
}

export default App;
