import React from 'react';
import Button from '@material-ui/core/Button';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        
        <div className="background_image">
        <div className="container">
          <div className="slider_contant">
            <div className="slider_title">
              <h1 className="text-white">AUTO <br/>REPAIRING <br/> SERVICES</h1>
            </div>
            <div className="slider_dec">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, quae. Tempora similique a dolorem temporibus!
              </p>
            </div>
            <div className="hhhh">
            {/* <Button variant="contained" color="primary" href="#contained-buttons">
                Order Now
                </Button> */}
                <button className="btn btn-success">Order Now</button>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default HeaderMain;