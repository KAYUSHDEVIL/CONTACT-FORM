import React, { useState } from "react";
import "./Contact.css"
const Contact = () => {
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        message:""
    });
    let name,value;
    const update = (e) =>{
        name = e.target.name;
        value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
    };
    const postData = async(e) =>{
        let res;
       e.preventDefault();
       const {name,email,password ,message}=user;
       if(name&&email&&password &&message){
        res = await fetch("https://contactform-6299c-default-rtdb.europe-west1.firebasedatabase.app/ContactUser.json",
       {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            name,
            email,
            message,
            password
        })
       })
    }
    else{
        alert("Enter All Data");
    }
       if(res){
        setUser({
            name:"",
            email:"",
            password:"",
            message:""
        })
        alert(`Hello ${user.name} You Data Store Succesfully!!!!!`);
       }
    };
    return (
        <body>
            <div className="container">
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="topic">Address</div>
                            <div className="text-one">MADAN MOHAN MALVIYA UNIVERSITY OF TECHNOLOGY</div>
                            <div className="text-two">GORAKHPUR</div>
                        </div>
                        <div className="phone details">
                            <i className="fas fa-phone-alt"></i>
                            <div className="topic">Phone</div>
                            <div className="text-one">+91-8077246917</div>
                            <div className="text-two">+91-9761748571</div>
                        </div>
                        <div className="email details">
                            <i className="fas fa-envelope"></i>
                            <div className="topic">Email</div>
                            <div className="text-one">kayush5069.com@gmail.com</div>
                            <div className="text-two">kayush5369@gmail.com</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">CONTACT US</div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <p>If you have any work from me or any types of quries related to my tutorial, 
                        you can send me message from here. It's my pleasure to help you.</p>
                        <br/>
                        <form action="#" method="POST">
                            <div className="input-box">
                                <input type="text" placeholder="Enter Your Name" name="name" value={user.name} onChange={update}/>
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Enter Your Email" name="email"  value={user.email} onChange={update}/>
                            </div>
                            <div className="input-box">
                                <input type="password" placeholder="Enter Your Email Password" name="password"  value={user.password} onChange={update}/>
                            </div>
                            <div className="input-box">
                            <textarea rows={4} column={40} style={{
                                height:"8vw"
                            }} name="message" value={user.message} onChange={update}> Enter Your Message</textarea>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <div className="button" onClick={postData}>
                                <button type="submit" className="button" > submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    );
};


export default Contact;