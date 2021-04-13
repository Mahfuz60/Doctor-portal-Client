import React from "react";
import Blogs from "../Blogs/Blogs";
import Contacts from "../Contacts/Contacts";
import Doctors from "../Doctors/Doctors";
import FeatureServices from "../FeatureServices/FeatureServices";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <FeatureServices></FeatureServices>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
      <Doctors></Doctors>
      <Contacts></Contacts>
      <Footer></Footer>
     
      
    </div>
  );
};

export default Home;