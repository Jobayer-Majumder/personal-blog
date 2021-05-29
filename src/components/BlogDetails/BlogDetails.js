import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import blogsData from '../../fakeData/blogs/blogsData';
import { addNewComment } from '../../store/actions/BlogActions';
import Comment from '../Comments/Comment';
import './BlogDetails.css'

const BlogDetails = () => {

    const { id } = useParams();
    const blog = blogsData.find(blog => blog?.id == id);
    const { title, img, desc, comments } = blog;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const onSubmit = data => {
        data.userId = user.id;
        data.blogId = id;
        dispatch(addNewComment(data));
    }

    return (
        <div className="row">
            <div className="col-md-8 mt-5 mx-5" >

                <div className="card " style={{ width: '70rem' }}>
                    <div className="text-center ">
                        <img src={img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-text">{title}</h4>
                            <p className="card-text">{desc}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 w-75" >
                    <h4>Comment: {comments.length}</h4>

                    <form className="input-group" onSubmit={handleSubmit(onSubmit)}>

                        <input {...register("comment", { required: true })} />
                        <br /> <br />
                        {errors.comment && <span>This field is required</span>}

                        <button className='button'>Submit</button>

                    </form>

                    <br /> <br />

                    <div>
                        {
                            comments.map((comment, index) => <Comment comment={comment} key={index}> </Comment>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogDetails;