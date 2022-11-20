import Header from './Header';
import Nav from './Navigation';
import Project from './Project';
import Footer from './Footer';

function App() {
  return (
    <div className="App" >
      <div className='Container'>
      <Header title="John Doe" />
      <Nav />
      </div>
      <Project />
      <Footer />
    </div>
  );
}

export default App;
