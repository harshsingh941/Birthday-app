import React from 'react'

function Verified() {
  return (
    <div>
      <div style={{height:500,width:428,top:53,position:'relative'}}>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',left:-15,position:'relative'}}>
                    <img alt='' src={require('../assests/images/Rectangle93.png')} />
                    <p style={{fontWeight:'600',fontSize:20,left:15,position:'relative'}}>Birthday App</p>
                </div>
                <div style={{width:290,height:70,left:70,top:60,position:'relative'}}>
                    <p style={{fontWeight:'600',fontSize:25,textAlign:'center'}}>Just 23 days for the treat!</p>
                </div>
                <img alt='' src={require('../assests/images/s1.png')} style={{width:402,height:368,left:13,top:10}} />
                <div style={{width:290,height:70,left:70,top:-10,position:'relative'}}>
                    <p style={{fontWeight:'600',fontSize:20,textAlign:'center'}}>Never miss another birthday. Download Birthday app</p>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    
                    <img alt='' src={require('../assests/images/download.png')}  style={{top:0,left:25,width:160,height:120,borderRadius:8,position:'relative'}}/>

                    <img alt='' src={require('../assests/images/google.png')}  style={{top:0,left:55,width:160,height:120,borderRadius:8,position:'relative'}}/>

                   
                </div>
        </div>
    </div>
  )
}

export default Verified