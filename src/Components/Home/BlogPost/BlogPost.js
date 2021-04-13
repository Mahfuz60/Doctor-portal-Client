import React from 'react';

const BlogPost = (props) => {
    const {title,description,author,authorImg,date}=props.blog;
    return (
        <div className="col-md-4 card-group">
             <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={authorImg} alt="" width="60"/>
                <div>
                    <h6 className="text-dark">{author}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text text-secondary mt-4">{description}</p>
                <button style={{backgroundColor:'black' ,color:'white',width:'100px',height:'30px',border:'1px solid black',borderRadius:'5px'}}>See More</button>
            </div>
            
       </div>

        </div>
    );
};

export default BlogPost;