// Displaying list of contacts
import React from "react";
import {
  View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet
  } from 'react-native';
import { deleteData } from "../actions/myAction"
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';

const ContactList = (props)=> {

const renderItem = ({item})=>{
  // console.log("item", props);
        return(
       <TouchableOpacity
       key={item.id}
       style={styles.userCard}>
           <Text style={styles.itemTxt}>{item.id}. {item.name}</Text>
           <Text style={styles.itemPhn}>{item.phone}</Text>
           <Icon name="trash" onPress={()=>props.deleteMyData(item.id)} style={styles.delete} size={30} color='#5353c6' />
       </TouchableOpacity>
       )
      }

  return (
    <View style={styles.contactsContainer}>
    <FlatList 
              data={props.contacts}
              renderItem={renderItem}
      />
  </View>
  )
}

const styles = StyleSheet.create({
  contactsContainer:{
    flex:1
  },
  userCard: {
    backgroundColor:'#cce0ff',
    paddingVertical:6,
    paddingHorizontal:6,
    borderRadius:10,
    marginTop:10,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    height:60,
    justifyContent:'space-evenly',
  },
  itemTxt: {
    fontSize:18,
    color: 'black',
    width:180,
  },
  itemPhn: {
    fontSize:14,
  },
  delete:{
    marginLeft:50
  }
});

const mapStateToProps = (state) => {
    // console.log("hello",state);
    return {
      contacts: state,
    };
  };
  
  function mapDispatchToProps(dispatch) {
    return {
      deleteMyData: (id)=> dispatch(deleteData(id))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
