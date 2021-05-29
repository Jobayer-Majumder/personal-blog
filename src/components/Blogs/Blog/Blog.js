import React from 'react';
import styles from './Blog.module.css';
import { GrLike } from 'react-icons/gr';
import { GoComment } from 'react-icons/go';

const Blog = ({ blog, view }) => {
    const { author, img, title, desc, comments, like } = blog;
    console.log('from blog', view)

    return (
        <>
            <div className="col mb-4">
                <div className={`card h-100 shadow ${styles.borderNone}`}>
                    <img src={img} className={`card-img-top h-100 ${styles.cardImg}`} alt="..." />
                    <div className="card-body p-4">
                        <div>
                            <h6>{author}</h6>
                            {/* <h6>{new Date()}</h6> */}
                        </div>
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{desc}</p>
                    </div>
                    <div className={`card-footer d-flex justify-content-around p-3 ${styles.borderNone}`}>
                        <div className="like">
                            <button title='Like' className={`${styles.likeBtn} me-2`}>
                                <GrLike className='fs-4' />
                            </button>
                            <span class="fs-5">{like.length}</span>
                        </div>
                        <div className="comment">
                            <button title='Leave Comment' className={`${styles.likeBtn} me-2`}>
                                <GoComment className='fs-4' />
                            </button>
                            <span class="fs-5">{like.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;