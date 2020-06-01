import React from 'react';
import {connect} from 'react-redux';
//import {Container,Row,Col} from 'react-bootstrap';
import {Table,Button,Container} from 'react-bootstrap'
import Header from './Header'
import {productQuantity} from './actions/productQuantity';

function Cart({basketProps,productQuantity}) {
  const handleSubmit =(e)=>{
    alert("Button clicked");
  }
  let productsInCart=[];
  let cartTotal='';
  console.log("props in Cart",basketProps)
  if({basketProps} !==null){
    console.log("INSIDE CART IF TRUE")
    cartTotal= basketProps.products.cartTotal;
        Object.keys(basketProps.products).forEach(element => {
        if(basketProps.products[element].inCart){
          productsInCart.push(basketProps.products[element])
        }
        })
            productsInCart = productsInCart.map((item,index)=>{
              return (             
                    <>
                    <tr key={index}>
                        <td style={{whiteSpace: 'nowrap'}}> {item.product}</td>
                        <td><button type="button" onClick={()=>productQuantity("decrease",item.product)} > - </button>
                          {item.quantity}
                          <button className="glyphicon glyphicon-plus" onClick={()=>productQuantity("increase",item.product)} > + </button>
                          </td>
                        <td> {item.price}</td>
                        <td>
                          <img src = {require(`../images/${item.urlSm}`)} alt=" product"/>
                        </td>
                      </tr>

                    </>
              )}
        )}        
        return(
                <div>
                <Header/>

                <br></br>
                <Container fluid>
                  <div className="float-right">
                    <Button color="success" onClick={handleSubmit}>Submit</Button>
                  </div>
                  <h3>Items in your cart are :</h3>
                  <Table className="mt-4">
                    <thead>
                    <tr>
                      <th width="20%">Product Name</th>
                      <th width="20%">Quantity</th>
                      <th>Price</th>
                      <th width="10%"> </th>
                    </tr>
                    </thead>
                    <tbody>
                    {productsInCart}
                    </tbody>
                  </Table>
                </Container>
                <h3>Total cost: {cartTotal}</h3>
              </div>
             )
        }
   
const mapStateToProps = state=>({
  basketProps:state.basketState
})
export default connect(mapStateToProps,{productQuantity})(Cart)