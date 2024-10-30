import './App.css';
import Header from './screen/Header';
import Footer from './screen/Footer';
import Sidebar from './screen/Sidebar';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          {/* Your main screen content goes here */}
          <h1>Main Content Area</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
