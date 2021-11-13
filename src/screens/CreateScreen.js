<<<<<<< HEAD
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
=======
import React,{useState,useContext} from "react";
import {Text,View,StyleSheet,TextInput,Button} from 'react-native';
import {Context} from '../context/BlogContext'


const CreateScreen = ({navigation}) =>{
    const [title,setTitle]= useState("");
    const [content,setContent]= useState("");
    const {addBlogPost} = useContext(Context);
 


    return (<View>
        <Text style={styles.label}>Title: </Text>
        <TextInput style={styles.inputText} value={title} onChangeText={(text)=>setTitle(text)}/>

        <Text style={styles.label}>Enter Content: </Text>
        <TextInput  style={styles.inputText} value={content}  onChangeText={(text)=>setContent(text)}/>

        <Button onPress={()=>{
            addBlogPost(title,content,()=>{ //handling outside api, approved or
            navigation.navigate('Index')
        });
        }} 
        title="Add Blog Post"/>
        </View>);

};
const styles = StyleSheet.create({
    inputText:{
        fontSize:18,
        borderWidth:1,
        borderColor:"black",
        marginBottom:15,
        padding:5,
        margin:5
    },
    label:{
        fontSize:20,
        marginBottom:5,
        margin:5
    }
});

export default CreateScreen;
>>>>>>> a0731a5a26423ffecf90021584af56b59201011c
