import React from 'react'
import { Link } from "react-router-dom";

function VerifyNo() {
  return (
    <div>
       <div style={{height:74,width:428,top:63,position:'relative'}}>
       <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',left:-15}}>
                <img alt='' src={require('../assests/images/Rectangle93.png')} />
                <p style={{fontWeight:'600',fontSize:20,left:15,position:'relative'}}>Birthday App</p>
            </div>
            <div style={{width:290,height:70,left:70,top:60,position:'relative'}}>
                <p style={{fontWeight:'600',fontSize:25,textAlign:'center'}}>Don’t let gifts go to wrong number</p>
            </div>
            <div style={{width:302,height:40,left:63,top:80,position:'relative'}}>
                <p style={{fontWeight:'500',fontSize:14,color:'rgba(0, 0, 0, 0.6)',textAlign:'center'}}>Please verify by entering the OTP below</p>
            </div>
            <div style={{display:'flex',flexDirection:'row',width:302,justifyContent:'space-between',left:63,top:125,position:'relative'}}>
                <input  style={{borderBottomColor:'black',borderBottomWidth:2,fontSize:18,width:30,justifyContent:'center'}}></input>
                <input  style={{borderBottomColor:'black',borderBottomWidth:2,fontSize:18,width:30,justifyContent:'center'}}></input>
                <input   style={{borderBottomColor:'black',borderBottomWidth:2,fontSize:18,width:30,justifyContent:'center'}}></input>
                <input   style={{borderBottomColor:'black',borderBottomWidth:2,fontSize:18,width:30,justifyContent:'center'}}></input>

            </div>
            <Link to='/Verified' style={{cursor:'pointer', textDecoration:'none'}}>
                <button style={{backgroundColor:'#737ef6',borderRadius:5,width:302,height:55,left:63,top:150,justifyContent:'center',position:'relative',fontSize:18,color:'#ffffff'}}>
                Make my b’day special!

                </button>
            </Link>
            
       </div>
    </div>
  )
}

export default VerifyNo