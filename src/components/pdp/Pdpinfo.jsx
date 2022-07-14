import React from "react";
function Pdpinfo() {
  return (
    <div>
      <h1>Apollo</h1>
      <p>Running Short</p>
      <div className="pdp-size">
        <h5>SIZE:</h5>
        <div>
            <div><p>XS</p></div>
            <div><p>S</p></div>
            <div><p>M</p></div>
            <div><p>L</p></div>
        </div>
      </div>
      <div className="pdp-color">
      <h5>COLOR:</h5>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </div>
      <div className="pdp-price">
      <h5>PRICE: <br /> $50.00</h5>
      </div>
      <div className="pdp-addtocart">
        <p>ADD TO CART</p>
      </div>
      <div className="pdp-desc">
        Find stunning women's cocktail dresses and party dresses. Stand out in
        lace and metallic cocktail dresses and party dresses from all your
        favorite brands.
      </div>
    </div>
  );
}

export default Pdpinfo;
