import axios from 'axios';

export const fetchData = async () => {
    try {
    let resp = await axios.get('https://5f8304fc6b97440016f4e219.mockapi.io/contacts')
    const myData = resp.data.items;
      return myData;
    } catch (e) {
      console.log(e);
    }
  };


  export const fetchDeletedData = async (id) => {
    try {
    let resp = await axios.delete('https://5f8304fc6b97440016f4e219.mockapi.io/contacts/'+id);
    const myData = resp.data;
    alert('Contact Deleted Successfully');
      return myData;
    } catch (e) {
      console.log(e);
    }
  };

  export const fetchPostedData = async (name, phone) => {
    try {
      let resp = await axios.post('https://5f8304fc6b97440016f4e219.mockapi.io/contacts',{
              name:name,
              phone:phone
            })
      const myData = resp.data;
      alert('Contact Added Successfully');
      console.log("posted this", myData);
      return myData;
    } catch (e) {
      console.log(e);
    }
  };