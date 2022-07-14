import React, { useState } from "react";
import img from "../../images/Image.jpg";
function Pdpimg() {
  
  return (
    <div className="pdp-img">
      <div className="pdp-galery">
        <img src={img} defaultValue={img} alt="" />
        <img src={img} defaultValue={img} alt="" />
        <img src={img} defaultValue={img} alt="" />
      </div>
      <div className="pdpmain-img">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Pdpimg;
