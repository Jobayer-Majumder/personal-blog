import React from 'react';
import styles from './Blog.module.css';
import { GrLike } from 'react-icons/gr';
import { GoComment } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toogleLike } from '../../../store/actions/BlogActions';

const Blog = ({ blog, view }) => {
    const { id, author, img, title, desc, comments, like } = blog;
    const user = useSelector(state => state.user.user);

    const dispatch = useDispatch();

    const handleLikeBtn = blogId => {
        dispatch(toogleLike({
            id: user.id,
            blogId: blogId
        }));
    }

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
                        <Link to={`/blog/${id}`}><h4 className="card-title">{title}</h4></Link>
                        <p className="card-text">{desc}</p>
                    </div>
                    <div className={`card-footer d-flex justify-content-around p-3 ${styles.borderNone}`}>
                        <div className="like">
                            <button onClick={() => handleLikeBtn(id)} title='Like' className={`${styles.likeBtn} me-2`}>
                                <GrLike className='fs-4' />
                            </button>
                            <span className="fs-5">{like.length}</span>
                        </div>
                        <div className="comment">
                            <button title='Leave Comment' className={`${styles.likeBtn} me-2`}>
                                <GoComment className='fs-4' />
                            </button>
                            <span className="fs-5">{comments.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;