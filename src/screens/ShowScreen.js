<<<<<<< HEAD
import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.text}>{blogPost.content}</Text>
    </View>
  );
};
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={
          () => navigation.navigate("Edit", { id: navigation.getParam("id") }) //navigate to right post
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    padding: 10,
    borderWidth: 0.5,
    borderColor: "black",
    margin: 10,
  },
  text: {
    fontSize: 18,
    padding: 10,
  },
});

export default ShowScreen;
=======
import React,{useContext} from "react";
import {Text,View,StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext'


const ShowScreen = ({navigation}) =>{
    const {state}= useContext(Context);

    const blogPost = state.find(blogPost=> blogPost.id === navigation.getParam('id')); //in the state searching for the right blog


    return (<View>
        <Text>title: {blogPost.title}</Text>
        <Text>Content: {blogPost.content}</Text>
        </View>);

};
const styles = StyleSheet.create({});

export default ShowScreen;
>>>>>>> a0731a5a26423ffecf90021584af56b59201011c
