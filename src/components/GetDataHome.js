import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import ContactList from './contactList';
import { connect } from "react-redux";
import { getData } from "../actions/myAction"

const GetDataHome = (props) =>{

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.mainContainer}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>props.getMyData()}
                    >
                <Text style={styles.btnText}>Get My Contacts</Text>
                </TouchableOpacity>
            </View>
            <ContactList/>
        </View>
        {/* <Button
          title="Add a new Contact"
          onPress={() =>props.navigation.navigate('AddContact')}
        /> */}
      </View>
    );
    }

  const styles = StyleSheet.create({
    mainContainer:{
      justifyContent:'center',
      flex:1,
      marginTop:0
    },
    header:{

    },
    buttonContainer:{
      flexDirection:'row',
      height:100,
      alignItems:'center',
      justifyContent:'center',
    },
    btn: {
      backgroundColor:'#4d94ff',
      paddingHorizontal:26,
      paddingVertical:10,
      borderRadius:4,
      elevation:2,
      shadowColor:'#000',
      shadowOffset:{
        width:2,
        height:2
      },
      shadowOpacity:0.25,
      shadowRadius:3.5
    },
    btnText: {
      color: '#fff',
      fontSize: 24,
      textAlign: 'center',
      fontWeight:'bold'
    }
});

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      contacts: state,
    };
  };

function mapDispatchToProps(dispatch) {
    return {
      getMyData: ()=> dispatch(getData())
    };
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(GetDataHome);
