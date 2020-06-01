import React,{Component} from 'react';
import Header from './Header'
import { Container,Table} from 'react-bootstrap';
import axios from 'axios'

//let serverUrl="http://localhost:8080";
let emptyCustomer = {
  firstName: '',
  lastName: '',
  email: ''
};

let emptyOrder = {
  firstName: '',
  lastName: '',
  email: ''
};
class Order extends Component {

      constructor(props){
        super(props)
        this.state={
            isLoaded:false,
            order:emptyOrder,
            customer:emptyCustomer
        }
     }    
    async componentDidMount(){
        console.log(" indide order component did mount")
        axios.headers={
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json', 
        }
        try{
          let url="/store_api/v1/orders"    
            const response = await axios.get(url);
             const results = response.data;
             console.log(" results in order 1",results)
             this.setState({order: results, isLoaded: true});

        }
        catch (e){
          console.log(e);
        }
     }
    render=()=>{
      let orderList=''
              if(this.state.order!==null && this.state.order!==undefined && (this.state.order.length>0))
                orderList = this.state.order.map((item,index)=>{
                     return(

                    <tr key={index} >
                            <td style={{whiteSpace: 'nowrap'}}>{item.name}</td>
                            <td>{item.email} </td>
                            <td>{item.product}</td>
                            <td>{item.price}
                            </td>
                            <td>{item.quantity}
                            </td>
 
                          </tr>

                        )
                  })

                return (
                    <div className="App">
                      <Header/>
                         <Container>
                           <h3>Orders List is:</h3>
                            <Table className="mt-4">
                            <thead>
                            <tr>
                            <th width="20%">Customer</th>
                            <th width="20%">Email</th>
                            <th>Product</th>
                            <th width="10%">Price</th>
                            <th width="10%">Quantity</th>

                            </tr>
                            </thead>
                            <tbody>
                            {orderList}
                            </tbody>
                            </Table>
 
                        </Container>
                    </div>
                );
              
 }
 };

 
export default Order;






 