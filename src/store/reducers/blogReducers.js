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
            const filteredBlog = blogsData?.find(blog => blog?.id === parseInt(action.payload.blogId));

            const index = filteredBlog?.like.findIndex(singleLyk => singleLyk === parseInt(action.payload.id));

            if (index !== -1) filteredBlog?.like?.splice(index, 1);
            if (index === -1) filteredBlog?.like?.push(action.payload.id);

            console.log(state);

            // if (filteredBlog.like.includes(action.payload.id)) {
            //     filteredBlog.like.splice()
            // }
            return state;
        }

        default:
            return state;
    }
}

export default blogReducers;