import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'My Contacts',
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 18,
    backgroundColor: '#4d79ff',
  },
  text: {
    color: 'white',
    fontSize: 29,
    fontWeight:'bold',
    textAlign: 'center',
  },
});

export default Header;