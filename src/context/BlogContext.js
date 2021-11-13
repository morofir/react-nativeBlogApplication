import createDataContext from "./createDataContext";
<<<<<<< HEAD
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload; //this is the data list

    case "edit_blogpost": //iterating over all the array, if i found the right id ill return the edited object
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");

    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });
    if (callback) {
      callback();
    }
  };
};
const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id }); //refresh on client side
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content }); //the second elemnt id the object to update

    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  [] //initial post for testing like: { title: "TEST POST", content: "Test Content", id: 1 }
);
=======

const blogReducer = (state,action)=>{
  switch(action.type){
    case "add_blogpost":
      return [...state,
        {
        id:Math.floor(Math.random()*999999),
        title:action.payload.title,
        content:action.payload.content}
    ];

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload ); //filter out the one im pressing


    // case "edit_blogpost":
    //   return;
      default:
        return state;
  }
};

const addBlogPost = dispatch => {
  return (title,content,callback)=>{
    dispatch({type:"add_blogpost",payload:{title,content}});
    callback(); //going back to index.js(after sucssefully create)
  };
};

const deleteBlogPost = dispatch => {
  return (id)=>{
    dispatch({type:"delete_blogpost",payload: id});
  };
};

export const {Context,Provider} = createDataContext(blogReducer ,{addBlogPost,deleteBlogPost}, []);
>>>>>>> a0731a5a26423ffecf90021584af56b59201011c
