import React from 'react';
import { Button } from 'react-bootstrap';
 import Header from './Header';
 import {connect} from 'react-redux';
 import {addBasket} from './actions/addAction';

function Product(props){
  let productList=''
  let productsInCart=[];
  console.log("props inside product",props);
  if(props.basketProps !==null && props.basketProps !== undefined && props.basketProps.products!==undefined){
      Object.keys(props.basketProps.products).forEach(element => {
          productsInCart.push(props.basketProps.products[element])
        })
      }
      productList = productsInCart.map((item,index)=>{
        return(
          <>
          <li key={index}>
           <div className="product-details">

            <img  src= {require(`../images/${item.urlSm}`)} style={{"width":"150px","height":"150px"}} alt="tanjore"  fluid="true" />
            Name: {item.product}
              Price: {item.price}
              Quantity:{item.quantity}
          
              <Button className="button" type="button" value="button" onClick ={()=>props.addBasket(`${item.product}`)}>Buy</Button>
          </div>
          </li>
        </>

        )
        })

          return (
                  <div className='App'>
                    <div className='product'>
                        <Header/>
                        <br></br>
                            <ul>
                              {productList}
    {/* //             <li>
    //               <img  src={require('../images/image-sm-1.jpg')}  alt="tanjore"  fluid="true" />
    //               <div className="product-details">
    //               <p>
    //                Name:  
    //                 Price: 20.00
    //                 Quantity:0
    //                  </p> 
    //                 <Button className="button" type="button" value="button" onClick ={()=>props.addBasket(product)}>Buy</Button>
    //               </div>
    //             </li>
    //             <li>
    //               <img  src={require('../images/image-sm-2.jpg')}  alt="tanjore"  fluid="true" />
    //               <div className="product-details">
    //               <p>
    //                Name: kalankari1 
    //                 Price: 20.00
    //                 Quantity:0
    //                  </p> 
    //                 <Button className="button" type="button" value="button" onClick ={()=>props.addBasket(product)}>Buy</Button>
    //               </div>
    //             </li>
    //             <li>
    //               <img  src={require('../images/image-sm-3.jpg')}  alt="tanjore"/>
    //               <div className="product-details">
    //               <p>
    //                Name:Tanjore1
    //                 Price:20
    //                 Quantity:0
    //                  </p> 
    //                 <Button color="success" type="button" value="button" >Buy</Button>
    //               </div>
    //             </li>
    //             <li>
    //               <img  src={require('../images/image-sm-4.jpg')}  alt="tanjore"/>
    //               <div className="product-details">
    //               <p>
    //                Name: Kalankari3
    //                 Price: 20.00
    //                 Quantity:
    //                  </p> 
    //                 <Button color="success" type="button" value="button"  >Buy</Button>
    //               </div>
    //             </li>
    //             <li>
    //               <img  src={require('../images/image-sm-5.jpg')}  alt="tanjore"/>
    //               <div className="product-details">
    //               <p>
    //                Name:Kondapalli1
    //                 Price:20.00
    //                 Quantity:
    //                  </p> 
    //                 <Button color="success" type="button" value="button" >Buy</Button>
    //               </div>
    //             </li>
    //             <li>
    //               <img  src={require('../images/image-sm-6.jpg')}  alt="tanjore"/>
    //               <div className="product-details">
    //               <p>
    //                Name:Kondapalli2
    //                 Price: 20.00
    //                 Quantity:
    //                  </p> 
    //                 <Button color="success" type="button" value="button" >Buy</Button>
    //               </div>
    //             </li>
    //             <li>
    //               <img  src={require('../images/image-sm-7.jpg')}  alt="tanjore"/>
    //               <div className="product-details">
    //               <p>
    //                Name: Nirmal1
    //                 Price: 20.00
    //                 Quantity:
    //                  </p> 
    //                 <Button color="success" type="button" value="button"  >Buy</Button>
    //               </div>
    //             </li>
    //             <li>
    //               <img  src={require('../images/image-sm-8.jpg')}  alt="tanjore"/>
    //               <div className="product-details">
    //               <p>
    //                Name: Nirmal2
    //                 Price: 20.00
    //                 Quantity:
    //                  </p> 
    //                 <Button color="success" type="button" value="button"  >Buy</Button>
    //               </div>
    //             </li>
    //             <li>
    //               <img  src={require('../images/image-sm-9.jpg')}  alt="tanjore"/>
    //               <div className="product-details">
    //               <p>
    //                Name: Kondapalli3
    //                 Price: 20.00
    //                 Quantity:
    //                  </p> 
    //                 <Button color="success" type="button" value="button"  >Buy</Button>
    //               </div>
    //             </li> */}
               </ul>
              </div>
              </div>
)
};
    
const mapStateToProps = state=>({
  basketProps:state.basketState
})
export default connect(mapStateToProps,{addBasket})(Product)