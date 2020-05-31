import React,{Component} from 'react';
//mport axios from 'axios';
import {Form,Button,Col} from 'react-bootstrap'
import Header from './Header';
//const Key = process.env.REACT_APP_API_KEY;
class Customer extends Component {
    constructor(props){
        super(props)
        this.state={
            customer:[]
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let customer = {...this.state.customer};
        customer[name] = value;
        this.setState({customer});
      }
    async handleSubmit(event) {
        event.preventDefault();
        // try{
        //   const result= await axios.post(`https://api.cloudmersive.com/validate/email/address/full`,Key);
        //     console.log(result);
        // }
        // catch (e){
        //   console.log(e);
        // }
        alert("button clicked");
    }
     render(){
        return (
            <div className='App'>
                <Header/>
                <br/>
                <h3 className="title">Buyer Registration Form:</h3>
                <h5> Your phone number will be validated</h5>
                <Form className="form">
                    <Form.Row className="row">
                        <Form.Group as={Col} controlId="firstName">
                        <Form.Label className="label">First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" onChange=
                        {this.handleChange} value={this.state.customer.firstName}/>
                        </Form.Group>
                   </Form.Row>
                   <Form.Row>
                    <Form.Group as={Col} controlId="firstName">
                            <Form.Label className="label">Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" onChange=
                        {this.handleChange}  value={this.state.customer.lastName}/>
                        </Form.Group>
        
                    </Form.Row>
                     <Form.Row  className="row">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="label">Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange=
                        {this.handleChange}  value={this.state.customer.email}/>
                        </Form.Group>
                        </Form.Row>  
                        <Form.Row  className="row">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label className="label">Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter PhoneNumber" onChange={this.handleChange}  value={this.state.customer.phone}/>
                            </Form.Group>
                        </Form.Row>                                                  
                          <Button variant="primary" type="button" className="btn btn-primary" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </Form>
              </div>
        
            );
    }
   
};
    
export default Customer;