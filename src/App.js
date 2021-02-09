import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';



function App() {
  const products = [
    { name: 'Photoshop', price: '$99.23' },
    { name: 'Illustator', price: '$60.23' },
    { name: 'Pdf Reader', price: '$80.23' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person </p>

        <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
        
      </header>
    </div>
  );
}

function Products(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height :'250px',
    width :'200px',
    float :'left',
  }
  
  const { name, price } = props.product;

  //console.log(name, price);

  return (
    <div style={productStyle}>
      <h3>{name }</h3>
      <h5>{price }</h5>
      <button>Buy Now</button>
    </div>
  );
}
export default App;
