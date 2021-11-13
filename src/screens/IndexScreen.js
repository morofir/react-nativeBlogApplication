<<<<<<< HEAD
import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context); //we'll never call any of this functions from main page, due to render
  // actions instead we use useEffect like this:
  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener("didFocus", () => {
      //this function will get called anytime this component render
      getBlogPosts();
    });

    return () => {
      //when indexScreen will be "removed" ,cleanup function
      listener.remove();
    };
  }, []); //empty array mean render only one time

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
=======
import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  [data, addBlogPost] = useContext(BlogContext);
  console.log(blogPosts);

  return (
    <View>
      <Text>Index screen</Text>
      <Button title="Add Post" onPress={addBlogPosts} />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
>>>>>>> a0731a5a26423ffecf90021584af56b59201011c
        }}
      />
    </View>
  );
};
<<<<<<< HEAD

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

=======
const styles = StyleSheet.create({});
>>>>>>> a0731a5a26423ffecf90021584af56b59201011c
export default IndexScreen;
