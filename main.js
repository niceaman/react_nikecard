// Import components
function App() {
  return (
    <>
      <div className="container">
        <div className="hiBox">

          <div className="cardContainer">
            <h2>NIKE</h2>
          </div>




          <div>
            <h2>NIKE AIR MAX 270</h2>
          </div>
          <div>
            <h2>NIKE AIR MAX 270</h2>

          </div>

        </div>
        <div className="loBox">

        </div>

      </div>
    </>
  );
}

// Render
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
