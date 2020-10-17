export const GET_DATA = "GET_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";


export const DELETE_DATA = "DELETE_DATA";
export const RECEIVE_DELETED_DATA = "RECEIVE_DELETED_DATA";


export const POST_DATA = "POST_DATA";
export const RECEIVE_POSTED_DATA = "RECEIVE_POSTED_DATA";

export const getData = () => ({ type: GET_DATA});
export const receiveApiData = payload => ({ type: RECEIVE_API_DATA, payload });

export const deleteData = (id) => ({ type: DELETE_DATA, id});
export const receiveDeletedData = payload => ({ type: RECEIVE_DELETED_DATA, payload });

export const postData = (name, phone) => ({ type: POST_DATA, name, phone });
export const receivePostedData = payload => ({ type: RECEIVE_POSTED_DATA, payload });
