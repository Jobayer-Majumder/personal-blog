import blogsData from "../../fakeData/blogs/blogsData";

export const GET_ALL_BLOGS = "GET_ALL_BLOGS";
export const ADD_NEW_COMMENT = "ADD_NEW_COMMENT";
export const TOOGLE_LIKE_BTN = "TOOGLE_LIKE_BTN";

export const getAllBlogs = () => {
    const data = blogsData;
    return {
        type: GET_ALL_BLOGS,
        payload: data
    }
}

export const addNewComment = data => {
    return {
        type: ADD_NEW_COMMENT,
        payload: data
    }
}
export const toogleLike = data => {
    return {
        type: TOOGLE_LIKE_BTN,
        payload: data
    }
}