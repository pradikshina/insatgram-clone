// Just use relative paths here – the base URL is handled in apiconnector.js
const BASE_PATH = "/api/v1";

// Auth endpoints
export const authEndpoints = {
  SIGNUP_API: BASE_PATH + "/signup",
  LOGIN_API: BASE_PATH + "/login",
};

// Post endpoints
export const postEndpoints = {
  CREATE_POST_API: BASE_PATH + "/createPost",
  GET_ALL_POST_API: BASE_PATH + "/getAllPost",
  DELETE_POST_API: BASE_PATH + "/deletePost",
  EDIT_POST_API: BASE_PATH + "/editPost",
};

// Like and comments endpoints
export const likeCommentsEndpoints = {
  LIKE_API: BASE_PATH + "/like",
  DISLIKE_API: BASE_PATH + "/dislike",
  CREATE_COMMENT_API: BASE_PATH + "/createComment",
  EDIT_COMMENT_API: BASE_PATH + "/editComment",
  DELETE_COMMENT_API: BASE_PATH + "/deleteComment",
  VIEW_COMMENT_API: BASE_PATH + "/veiwComments",
};

// Save post
export const savePostEndpoints = {
  SAVE_POST_API: BASE_PATH + "/savePost",
};

// Follow user
export const followUserEndpoints = {
  FOLLOW_USER_API: BASE_PATH + "/follow",
  GET_ALL_USER_API: BASE_PATH + "/allUsers",
  GET_USER_NOT_FOLLOWED: BASE_PATH + "/userNotFollowed",
};

// User additional details
export const updateAddDeatailsEndpoints = {
  CREATE_ADDITIONAL_DETAILS: BASE_PATH + "/editProfile",
};

export const getUserEndpoints = {
  GET_USER_API: BASE_PATH + "/findCurrentUser",
};
