import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNav from "./bottomTabNav";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import { SafeAreaView, Text, TextInput, StyleSheet, View } from "react-native";

import { Feather } from "@expo/vector-icons";

const HeaderComponent = ({ searchValue, setSearchValue }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#22e3dd" }}>
      <View style={styles.input}>
        <Feather name="search" size={20} />
        <TextInput
          style={{ marginLeft: 10, width: "100%" }}
          placeholder="Search..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const Stack = createStackNavigator();

  const [searchValue, setSearchValue] = useState("");

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}
    >
      <Stack.Screen name="HomeScreen" options={{ title: "Home" }}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="ProductDetails" />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    height: 40,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HomeStack;
