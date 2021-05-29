import React from 'react';
import { useForm } from 'react-hook-form';
import blogs from '../../fakeData/blogs/blogsData';
import Comment from '../Comments/Comment';
import './BlogDetails.css'

const BlogDetails = () => {
    const { title, img, desc, comments } = blogs[0]

    


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="row">
            <div className="col-md-8 mt-5 mx-5" >

                <div class="card " style={{ width: '70rem' }}>
                    <div className="text-center ">
                        <img src={img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4 class="card-text">{title}</h4>
                            <p class="card-text">{desc}</p>
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
                            comments.map(comment => <Comment comment={comment} key={comment.id}> </Comment>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogDetails;