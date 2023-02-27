import './App.css';

function App() {

  const money = 100000000000;

  return (
    <div className="container">
      <div>
        <div className="title">
          <img className='header-img' src={require(`./billgates.jpg`)} alt="" />
          Spend Bill Gates' Money
        </div>
        <div className='money-bar'>
          $ {money.toLocaleString('en-EN')}
        </div>
        <div className="items">
          <div className="item-wrapper">
            <img src="" alt="" className="item-img" />
            <div className="item-name"></div>
            <div className="item-cost"></div>
            <div className="item-controls">
              <button className="item-sell">Sell</button>
              <input type="text" className="item-input" />
              <button className="item-buy">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
