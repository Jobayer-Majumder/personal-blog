import React from 'react';

const Blog = ({ blog }) => {
    const { author, img, title, desc, publishDate } = blog;

    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top h-100" alt="..." />
                    <div className="card-body">
                        <div>
                            <h6>{author}</h6>
                            {/* <h6>{new Date()}</h6> */}
                        </div>
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{desc}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;