import React from "react";

function Home(props) {
  console.warn('Props',props);
  return (
    <>
      <div className="add-cart">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRTh7fOkgg_rX-jYuZjXf3Sgm1NMiyhgRiA&usqp=CAU" />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper ">
        <div className="img-wrapper item">
          <img src=" https://www.pakmobizone.pk/wp-content/uploads/2023/03/Samsung-Galaxy-S23-Ultra-5G-Phantom-Black-1.jpg " />
        </div>
        <div className="text-wrapper item">
          <span>Samsung S23 Ultra-5G</span>
          <br />
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: "1000$", name: "SamsungS23" })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
export default Home;
