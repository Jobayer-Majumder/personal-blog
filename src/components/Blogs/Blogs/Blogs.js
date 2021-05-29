import React from 'react';
import blogsData from '../../../fakeData/blogs/blogsData';
import { BsGrid } from 'react-icons/bs';
import { ImList2 } from 'react-icons/im';
import styles from './Blogs.module.css';
import Blog from '../Blog/Blog';



const Blogs = () => {
    const [view, setView] = React.useState(false)

    const handleChangeView = () => {
        setView(!view)
    }

    console.log('view is', view)
    return (
        <>
            <section className="container">
                <div className='p-4 d-flex justify-content-end align-items-center'>
                    <h5 className='me-3'>Change View</h5>
                    {
                        view ? <BsGrid onClick={handleChangeView} className='fs-5'/> :
                        <ImList2 onClick={handleChangeView} className='me-3 fs-5'/>
                    }
                </div>
                <div className={`${view ? `${styles.listView}` : `row row-cols-md-3 g-4`}`}>
                    {
                        blogsData.map((blog, index) => <Blog key={index++} view={view} blog={blog} />)
                    }
                </div>
            </section>
        </>
    );
};

export default Blogs;