import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getNumbers} from './actions/getAction'

function Header(props) {
  console.log("props in header",props)
    useEffect(()=>{
      getNumbers();
    },[]
  )
    return (
    <div className="header">
        <div className="cart">
            <h3>Cart is <span>
              {props.basketProps.basketNumber}
              </span></h3>
        </div>
      </div>

    );
};
    
const mapStateToProps = state=>({
  basketProps:state.basketState
})
export default connect(mapStateToProps,{getNumbers})(Header);