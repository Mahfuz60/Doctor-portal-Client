import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css';
import john from "../../../images/john.png";
import emri from "../../../images/emri.png";
import wilson from "../../../images/wilson.png";


const Blogs = () => {
    const blogData=[
        {
            title : 'Check at least a doctor in a year for your teeth',
            description : 'Dr. Wilson Smith, MD is a Critical Care Medicine Specialist in Spartanburg, SC and has over 45 years of experience in the medical field.  He graduated from West Virginia U, School of Medicine medical school in 1976.  He is affiliated with medical facilities with pain-related problems. ',
            author:'Dr. Wilson Smith',
            authorImg : wilson,
            date : '23 April 2019'
        },
        {
            title : 'Two time brush in a day can keep you healthy',
            description : 'Dr. John Smith, MD is a Internal Medicine Specialist in Houston, TX.  He is affiliated with HCA Houston Healthcare West.  He is accepting new patients and has indicated that he accepts telehealth appointments and holistic approach to caring for patients with pain-related problems.',
            author:'Dr. John Smith',
            authorImg : john,
            date : '23 April 2019'
        },
        {
            title : 'The tooth cancer is taking a challenge',
            description : 'Dr Emri White is a consultant in Pain Medicine, with over 20 years’ experience in his field. Previously a Consultant at St Barts and The Royal London Hospitals, he is now firmly established in the independent sector. His breadth of experience ultimately resulted .',
            author:'Dr. Emri White',
            authorImg : emri,
            date : '23 April 2019'
        }
    ]
    return (
        <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h3 style={{color:'#17D2B6',textTransform:'uppercase',fontWeight:'600'}}>our blog</h3>
                    <h1>From Our Blog News</h1>
               </div>
               <div className="card-deck mt-5">
                        <div className="row">
                    
                            {
                                blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                            }
                        </div>

               </div>
           </div>
       </section>
    );
};

export default Blogs;