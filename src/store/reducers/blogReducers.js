import blogsData from '../../fakeData/blogs/blogsData';
import * as actions from '../actions/BlogActions';

const initialState = blogsData;

const blogReducers = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_ALL_BLOGS:
            return state;

        case actions.ADD_NEW_COMMENT: {
            const filteredBlog = blogsData?.find(blog => blog?.id === parseInt(action.payload.blogId));
            filteredBlog.comments.unshift({
                userId: action.payload.userId,
                comment: action.payload.comment
            })
            return state;
        }

        case actions.TOOGLE_LIKE_BTN: {
            const filteredBlog = blogsData?.findIndex(blog => {
                action.payload.userId = 1;
                if (blog.id === parseInt(action.payload.blogId)) {
                    if (blog.like.includes(action.payload.userId)) {
                        const index = blog.like.indexOf(action.payload.userId);
                        if (index > -1) {
                            blog.like.splice(index, 1);
                        }
                    } else {
                        blog.like.push(action.payload.userId);
                    }
                }
            });

            return [...state];
        }

        default:
            return state;
    }
}

export default blogReducers;