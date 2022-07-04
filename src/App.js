import './App.css';
import {Header} from "./components/Headers/Header";
import {Blog} from "./components/Blog/Blog";
import {Footer} from "./components/Footer/Footer";

export function App() {
    return (
        <div className="App">

            <Header> </Header>

            <main>
            <Blog random = "Random props"> </Blog>
            </main>
            <Footer year ={new Date().getFullYear()}></Footer>

        </div>
    );
}

