import React from "react";
import ReactDom from "react-dom";
import "./index.css"
ReactDom.render(<>
                 <center>
                   <div class="main">
                        <div class="div1">
                            <h2>Resistration</h2>
                             <input type="text" name="name" value="" placeholder="Enter Your Name"/><br/><br/>
                             <input type="text" name="email" value="" placeholder="Enter Your Email"/><br/><br/>
                             <input type="pass" name="password" value="" placeholder="Enter Your Password"/><br/><br/>
                             <input type="pass" name="password1" value="" placeholder="Enter Confirm Password"/><br/><br/>
                             <p><input type="checkbox" name="s" value=""/>I accept all terms and conditions</p>
                             <input type="button" name="btn" value="Register Now"/> <br/>
                              <h5>Already have an account?<a href="#">Login now</a></h5><br/>
                           </div>
                         <div class="div2">
                           <h1>Beutiful <br/>Sign Up <br/>Form</h1>
                        </div>
                   </div>
                 </center>


 </>,document.getElementById("root"));