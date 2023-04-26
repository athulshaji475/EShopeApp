import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
function Additems({GetItemData}) {

    const [item,setitem]=useState('')
    const [price,setprice]=useState(0)
    const [description,setdescription]=useState('')
    const [catogory,setcatogory]=useState('')
   
    const Itemdata={}

    const GetAllData=()=>{
     
      Itemdata.Name=item
      Itemdata.price=price
      Itemdata.description=description
      Itemdata.catogory=catogory
      Itemdata.key=Date.now()
      Itemdata.fav=false
      console.log("List from additepage"+Itemdata.Name)
      GetItemData(Itemdata)

      console.log(Itemdata);
    }

  return (
    <div>
        <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Itmes</p>

        <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput 
          label='Item Name' 
          id='form1' 
          type='text' 
          className='w-100'
            value={item}
            onChange={(e)=>{setitem(e.target.value)}}
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput 
          label='Price' 
          id='form2' 
          type='text'
          value={price}
            onChange={(e)=>{setprice(e.target.value)}}
       
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput 
          label='Description' 
          id='form3' 
          type='text'
          value={description}
            onChange={(e)=>{setdescription(e.target.value)}}
       
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
        
          <MDBInput 
          label='Catogory' 
          id='form4' 
          type='text'
          value={catogory}
            onChange={(e)=>{setcatogory(e.target.value)}}
       
          />
        </div>

        <div className='mb-4'>
           </div>
           <br/>

        <MDBBtn className='mb-4' size='lg' onClick={GetAllData}>Add Itm</MDBBtn>

      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>
    </div>
  )
}

export default Additems
