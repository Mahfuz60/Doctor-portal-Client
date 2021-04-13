import React from 'react';
import "./Contacts.css"

const Contacts = () => {
    return (
        <section className="contact my-5 py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h5 style={{fontWeight:'700',color:'#1CC7C1',textTransform:'uppercase'}}>Contact Us</h5>
                    <h1 style={{color:'white'}}>Always  connect with us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control p-3" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group my-5">
                           <input type="text" className="form-control p-3" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center my-3">
                           <button type="button" className="btn btn-info w-25"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contacts;