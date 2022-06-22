import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

function Bty(){
  const [mobile,setMobile] = useState('');
  const [date,setDate] = useState('')

  const saveNumber=() =>{
const datas = {
  "name": "James",
  "email": "james@gmail.com",
  "mobile": mobile,
  "dob":date,
  "sender_Id": 1
}
    // event.preventDefault();
    // const mobile=event.target.mobile.value;
    // alert('hi')
    axios.post("http://64.227.178.54:3000/uniqueBdayDetails/insert",datas).then(response => {
      // console.log(response);
      this.setState(response.data.mobile);
      this.setState(response.data.dob);
    }).catch(error => {
      console.log(error);
    });
  };


    // function saveNumber(){
    //   let  data={number};
    //   fetch('http://localhost:3000/uniqueBdayDetails/insert',{
    //     method:'POST',headers:{'Accept':'applicaation/json','Content-Type':'application/json'},
    //     body:JSON.stringily(data)
    //   }).then((result)=>{
    //     result.json().then((resp)=>{
    //         console.warn(resp);
    //     })
    //   })
    // }

  return (
    <div>
        <div style={{height:74,width:428,top:63,}}>
            <div  style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',left:-15,position:'relative'}}>
                <img alt='' src={require('../assests/images/Rectangle93.png')} />
                <p style={{fontWeight:'600',fontSize:20,left:15,position:'relative'}}>Birthday App</p>
            </div >
            <div  style={{width:290,height:70,left:70,top:60,position:'relative'}}>
                <p style={{fontWeight:'600',fontSize:25,textAlign:'center',position:'relative'}}>Your Friends, want to know your birthday 🎂</p>
            </div >
            <div  style={{width:302,height:40,left:63,top:80,position:'relative'}}>
                <p style={{fontWeight:'500',fontSize:14,color:'rgba(0, 0, 0, 0.6)',textAlign:'center',position:'relative'}}>We along with your friends are going to make your next birthday the best one!</p>
            </div >
            <div div  style={{display:'flex',flexDirection:'row',borderBottomColor:'black',borderBottomWidth:1,top:150,width:308,left:63,position:'relative',borderTopWidth:0,borderRightWidth:0,borderLeftWidth:0}}>
                <p style={{fontWeight:'600',fontSize:18}}>+91</p>
                <input placeholder='Your Phone Number' style={{fontSize:18,left:30,borderBottomWidth:2,borderTopWidth:0,borderRightWidth:0,borderLeftWidth:0,position:'relative'}}  name="mobile" onChange={(e)=>setMobile(e.target.value)} />

            </div >

            <div  style={{display:'flex',flexDirection:'row',top:180,width:308,left:95,position:'relative'}}>
                <input placeholder='dd-mm-yyyy' style={{width:250,fontSize:18,borderBottomColor:'black',borderBottomWidth:2,borderTopWidth:0,borderRightWidth:0,borderLeftWidth:0,}} name='date' onChange={(e)=>setDate(e.target.value)}/>
                {/* <input placeholder='Date' style={{width:120,fontSize:18,borderBottomColor:'black',borderBottomWidth:1,left:30,borderTopWidth:0,borderRightWidth:0,borderLeftWidth:0,position:'relative'}} name='date2' onChange={(e)=>setDate(e.target.value)}/> */}

            </div >
            {/* <Link to='/VerifyNo' style={{cursor:'pointer', textDecoration:'none'}}> */}
            <div>
                <Link to='/VerifyNo' style={{cursor:'pointer', textDecoration:'none'}}>
                <button style={{backgroundColor:'#737ef6',borderRadius:5,width:302,height:55,left:63,top:300,justifyContent:'center',position:'relative',}} onClick={saveNumber} >Next</button>
                </Link> 
              
                  <button style={{backgroundColor:'#737ef6',borderRadius:5,width:302,height:55,left:63,top:150,justifyContent:'center',position:'relative',fontSize:18,color:'#ffffff'}} onClick={saveNumber}>
                  Make my b’day special!

                  </button>
                
            
            </div> 

            
            

        </div >
    </div >
  )
}

export default Bty