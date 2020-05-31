import React from 'react';
import {connect} from 'react-redux';
import {getNumbers} from './actions/getAction'

function Cart(props) {
  console.log("props in Cart",props)
    return (
    <div className="header">
        <div className="cart">
            <h3> items in your cart are <span>
              </span></h3>
        </div>
      </div>

    );
};
    
const mapStateToProps = state=>({
  basketProps:state.basketState
})
export default connect(mapStateToProps,{getNumbers})(Cart);