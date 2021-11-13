import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
<<<<<<< HEAD
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
=======
import { BlogProvider } from "./src/context/BlogContext";
>>>>>>> a0731a5a26423ffecf90021584af56b59201011c

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
<<<<<<< HEAD
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
=======
>>>>>>> a0731a5a26423ffecf90021584af56b59201011c
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
<<<<<<< HEAD
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
=======
      title: "Blog List",
    },
  }
);
const App = createAppContainer(navigator);

//wrapping the app, context can get to nested child alone, props only to child
//app is a child
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
>>>>>>> a0731a5a26423ffecf90021584af56b59201011c
  );
};
