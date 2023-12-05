import './App.css';
import cupcake from './img/mermaid-cupcakes.jpg';
import Header from './Components/Header';

// const Header = () => {
//   return(
//     <>
//       <h1>This message comes from the header component</h1>
//     </>
//   )
// }

function App() {
  const name = "John";
  const x = false;
  return (
    <div className="App">
      <Header />
      <h1>Hello React!</h1>
      <h2>Hello {name}</h2>
      <h2>{x ? 'Yes' : 'No'}</h2>
      <img src={cupcake} alt="cupcake" />
    </div>
  );
}

export default App;
