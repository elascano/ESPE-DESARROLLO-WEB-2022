import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Button from '@mui/material/Button';



const URI="http://localhost:8081/clientes/clients/";

class Client extends Component {
state={
  data:[],
  modalInsert: false,
  modalDelete: false,
  form:{
    _id: '',
    name: '',
    lastName: '',
    age: '',
    subTotal: ''
    
  }
}

callGet=()=>{
axios.get(URI).then(response=>{
  this.setState({data: response.data});
}).catch(error=>{
  console.log(error.message);
})
}

callPost=async()=>{
  delete this.state.form._id;
 await axios.post(URI,this.state.form).then(response=>{
    this.modalInsert();
    this.callGet();
  }).catch(error=>{
    console.log(error.message);
  })
}

callPut=()=>{
  axios.put(URI+this.state.form._id, this.state.form).then(response=>{
    this.modalInsert();
    this.callGet();
  })
}

callDelete=()=>{
  axios.delete(URI+this.state.form._id).then(response=>{
    this.setState({modalDelete: false});
    this.callGet();
  })
}

modalInsert=()=>{
  this.setState({modalInsert: !this.state.modalInsert});
}

selectClient=(client)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      _id: client._id,
      name: client.name,
      lastName:client.lastName,
      age:client.age,
      subTotal: client.subTotal
    }
  })
}

captureData=async data=>{
data.persist();
await this.setState({
  form:{
    ...this.state.form,
    [data.target.name]: data.target.value
  }
});
console.log(this.state.form);
}

  componentDidMount() {
    this.callGet();
  }
  

  render(){
    const {form}=this.state;
  return (
    <div className="App">
    <div class="table-responsive-md">
    <table className="table ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>LastName</th>
          <th>Age</th>
          <th>Sub Total</th>
        </tr>
      </thead>
      
      <tbody>
        {this.state.data.map(client=>{
          return(
            <tr>
          <td>{client._id}</td>
          <td>{client.name}</td>
          <td>{client.lastName}</td>
          <td>{client.age}</td>
          <td>{client.subTotal}</td>
          
          <td>
                <button className="btn btn-primary" onClick={()=>{this.selectClient(client); this.modalInsert()}}><FontAwesomeIcon icon={faEdit}/></button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.selectClient(client); this.setState({modalDelete: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                </td>
          </tr>
          
          )
        })}
      </tbody>
    </table>
    </div>
    <Modal isOpen={this.state.modalInsert}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsert()}>x</span>
                </ModalHeader>
                <ModalBody>
                
                  <div className="form-group">
                    <label htmlFor="_id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.captureData} value={form?form._id: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="Name">Name</label>
                    <input className="form-control" type="text" name="name" id="name" onChange={this.captureData} value={form?form.name: ''}/>
                    <br />
                    <label htmlFor="LastName">LastName</label>
                    <input className="form-control" type="text" name="lastName" id="lastName" onChange={this.captureData} value={form?form.lastName: ''}/>
                    <br />
                    <label htmlFor="age">Age</label>
                    <input className="form-control" type="text" name="age" id="age" onChange={this.captureData} value={form?form.age:''}/>
                    <br />
                    <label htmlFor="subTotal">Sub Total</label>
                    <input className="form-control" type="text" name="subTotal" id="subTotal" onChange={this.captureData} value={form?form.subTotal:''}/>
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal=='insertar'?
                    <button className="btn btn-success" onClick={()=>this.callPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.callPut()}>
                    Actualizar
                  </button>
  }
                    <button className="btn btn-danger" onClick={()=>this.modalInsert()}>Cancelar</button>
                </ModalFooter>
          </Modal>


          <Modal isOpen={this.state.modalDelete}>
            <ModalBody>
               Estás seguro que deseas eliminar el cliente: {form && form.name}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.callDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalDelete: false})}>No</button>
            </ModalFooter>
          </Modal>
          <Button
                className='login'
                fullWidth
                variant="contained"
                style={{ color: 'white', backgroundColor: "#5DC1B9" }}
                onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsert()}}
              >
                <strong><p>Add client</p></strong>
              </Button>
  </div>
  


  );
}
}
export default Client;
