import React from 'react'
import './home.css'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
                <div>
                    <p class="title">
                        <img alt="" src={require('../assests/images/logo.jpeg')}
                        class="img-fluid"
                            style={{height: 115, width: 140}} />
                            Birthday App
                    </p>
                    <Link to='/bty' style={{cursor:'pointer', textDecoration:'none'}}>
                        <button style={{backgroundColor:'#737ef6',borderRadius:5,width:80,height:55,left:250,top:0,justifyContent:'center',position:'relative',fontSize:18,color:'#ffffff'}}>
                        Next

                        </button>
                    </Link>

                    <h1>Be a better friend</h1>

                    <h3>Never miss a birthday again</h3>
                    

                    <p class="description">
                        Birthday App automatically finds your friends&rsquo; birthdays and
                        creates a calendar without you needing to lift a finger. Then we
                        remind you when someone&rsquo;s big day is coming and make it easy
                        to help them feel special. There are also some fun surprises on your
                        birthday too. 😏
                    </p>

                    <div class="mt-5">

                        <img class="mt-2" src={require('../assests/images/google.png')} alt="My Happy SVG" />
                        <img class="appStore" src={require('../assests/images/download.png')}alt="My Happy SVG" />
                    </div>

                    <h4 style={{position: 'relative',top:-250,left:15}}>Our Privacy Promise:</h4>

                    <span class="info">
                        We only ever show month and day of birth. We never share your
                        information. We&rsquo;ll always be
                        free.
                    </span>

                    <ul>
                        <li style={{position: 'relative',left:15,top:-250}}>
                            <a href="https://birthday-capsule.breezy.hr/">Join our Team</a>
                        </li>
                        {/* <li>
                            <a href="./privacy.html">Privacy Policy</a>
                        </li> */}
                    </ul>
                    <ul></ul>
                </div>
                <div class="col-md-4">
                    <div class="app">
                        <img alt="" height="1200px" width="400px" src={require('../assests/images/app.png')} class="img-fluid" />
                    </div>
                </div>
            

       
        <div>
            <Link to='/bty' style={{cursor:'pointer', textDecoration:'none'}}>
                <button style={{backgroundColor:'#737ef6',borderRadius:5,width:302,height:55,left:63,top:-250,justifyContent:'center',position:'relative',fontSize:18,color:'#ffffff'}}>
                Next

                </button>
            </Link>
        </div>
        <div>
            <div class="container">
                <p class="footerText">© 2022 Birthday App.</p>
            </div>
            
        </div>
    </div>

  )
}

export default Home