// Import components
function cardBox({ imgSrc, alert, model, spec1, spec2, price }) {
  return (
    <>
      <div className="cardContainer">
        <div className="cardBoxImg">
          <img src={imgSrc} alt="nike" border="0" />
        </div>
        <div className="cardBoxInfo">
          <p className="cardLineAlert">{alert}</p>
        </div>
        <div className="cardBoxInfo">
          <p className="cardLineModel"><b>{model}</b></p>
        </div>
        <div className="cardBoxInfo">
          <p className="cardLineSpec">{spec1}</p>
        </div>
        <div className="cardBoxInfo">
          <p className="cardLineSpec">{spec2}</p>
        </div>
        <div className="cardBoxPrice">
          <p><b>{price}</b></p>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <div className="container">
        <div className="hiBox">

          {cardBox({ imgSrc: "./images/nike00.png", alert: "สินค้ามาใหม่", model: "Nike Dunk High Retro", spec1: "รองเท้าผู้ชาย", spec2: "1 สี", price: "฿ 4,500" })}
          {cardBox({ imgSrc: "./images/nike00.png", alert: "สินค้ามาใหม่", model: "Nike Dunk High Retro", spec1: "รองเท้าผู้ชาย", spec2: "1 สี", price: "฿ 4,500" })}
          {cardBox({ imgSrc: "./images/nike00.png", alert: "สินค้ามาใหม่", model: "Nike Dunk High Retro", spec1: "รองเท้าผู้ชาย", spec2: "1 สี", price: "฿ 4,500" })}
          {cardBox({ imgSrc: "./images/nike00.png", alert: "สินค้ามาใหม่", model: "Nike Dunk High Retro", spec1: "รองเท้าผู้ชาย", spec2: "1 สี", price: "฿ 4,500" })}


        </div>
        <div className="loBox"></div>
      </div>
    </>
  );
}

// Render
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
