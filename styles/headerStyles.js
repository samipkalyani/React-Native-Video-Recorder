
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  header:{
      width: width,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#6fa5b1",
      padding: 18,
      paddingTop: 30,
      paddingBottom: 15,
      marginBottom: 40
  },
  headerText:{
      fontSize: 22,
      fontWeight: "300",
      color: "#fff",
      marginLeft: 2
  }
})