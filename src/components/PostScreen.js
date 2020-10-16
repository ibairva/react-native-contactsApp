import React, {useState , useRef} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    TouchableHighlight
  } from 'react-native';
import { postData } from "../actions/myAction";
import { connect } from "react-redux";
import { Icon } from 'react-native-elements';



const PostScreen = (props) => {
        const [name, setName] = useState('');
        const [phone, setPhone] = useState();

        const numInput = useRef();
        const phoneInput = useRef();

    return(
          <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <View style={styles.inputView}>
                            <Icon
                                color='#333'
                                name='user'
                                type='font-awesome'
                                size={20}/>
                            <TextInput 
                                      ref={numInput}
                                      placeholder={"Enter Name"} 
                                      style={{flex:1,
                                      paddingHorizontal:12}}
                            onChangeText = {e=> {setName(e)}}>
                            </TextInput>
                          </View>
                          <View style={styles.inputView}>
                          <Icon
                                color='#333'
                                name='phone'
                                type='font-awesome'
                                size={20}/>
                            <TextInput 
                                      ref={phoneInput}
                                      placeholder={"Enter Phone No."} 
                                      style={{flex:1,
                                        paddingHorizontal:12}}
                                      onChangeText = {e=> {setPhone(parseInt(e))}}>
                            </TextInput>
                          </View>

                          <TouchableHighlight
                              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                              onPress={()=>{
                                props.postMyData(name,phone); 
                                numInput.current.clear();
                                phoneInput.current.clear();}}>
                              <Text style={styles.textStyle}>Submit</Text>
                          </TouchableHighlight>
                        </View>
                        {/* <Button title="Go back" onPress={() =>props.navigation.goBack()} /> */}
                    </View>
    )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width:350,
    height:500,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    marginLeft:30
  },
  modalView: {
    margin: 20,
    width:350,
    backgroundColor: "#5c5c8a",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  inputView:{
    width:'100%',
    height:44,
    marginBottom:10,
    backgroundColor:'#f1f3f6',
    borderRadius:8,
    paddingHorizontal:10,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  openButton: {
    backgroundColor:'#ef5777',
      paddingHorizontal:26,
      paddingVertical:10,
      borderRadius:4,
      marginTop:10,
      elevation:2,
      shadowColor:'#000',
      shadowOffset:{
        width:2,
        height:2
      },
      shadowOpacity:0.25,
      shadowRadius:3.5
  },
  textStyle:{
    color: '#fff',
      fontSize: 18,
      textAlign: 'center',
      fontWeight:'bold'
  }
});

function mapDispatchToProps(dispatch) {
    return {
      postMyData: (name,phone) => dispatch(postData(name,phone)),
    };
  }

const mapStateToProps = (state) => {
    console.log(state);
    return {
      contacts: state.contacts,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);