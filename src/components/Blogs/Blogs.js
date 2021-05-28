import React from 'react';
import blogsData from '../../fakeData/blogs/blogsData';
import Blog from './Blog/Blog';


const Blogs = () => {
    return (
        <>
            <div className="container">
                <div className="row row-cols-md-3 g-4">
                    {
                        blogsData.map((blog, index) => <Blog key={index++} blog={blog}/>)
                    }
                </div>
            </div>
        </>
    );
};

export default Blogs;