import axios from 'axios';

export function getData()
   {
    return async (dispatch) => {
    let resp = await axios.get('https://5f8304fc6b97440016f4e219.mockapi.io/contacts')
    const myData = resp.data.items;
    console.log(myData);
    dispatch({
                type: "GET_DATA",
                payload: myData,
              });
   };
  }



  export function postData(theName,thePhone)
   {     
    return async (dispatch) => {
     let resp = await axios.post('https://5f8304fc6b97440016f4e219.mockapi.io/contacts',{
      name:theName,
      phone:thePhone
    })
    alert('Contact Added Successfully');
    console.log(resp.data);
    dispatch({
      type: "POST_DATA",
      payload: resp.data
    });
  };
}

 export function deleteData(item)
  {
    return async (dispatch) => {
  let resp = await axios.delete('https://5f8304fc6b97440016f4e219.mockapi.io/contacts/'+item);
   console.log(resp.data);
   alert('Contact Deleted Successfully');
   dispatch({
    type: "DELETE_DATA",
    payload: item
  });
  };
}

