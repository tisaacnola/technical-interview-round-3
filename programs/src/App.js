import Banner from './components/Banner';
import './App.css';
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <div className="container">
          <img
            src="https://res.cloudinary.com/wherewego/image/upload/v1633703966/lntpxfldojazr0wkpdhb.png"
            alt="WhereWeGo logl"
          />
          <nav>
            <a target="_blank" rel="noreferrer" href="https://wherewego.org">
              Learn more
            </a>
          </nav>
        </div>
      </header>
      <Banner />
      <Card/>
    </div>
  );
}

export default App;
