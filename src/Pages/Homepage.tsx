import React from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native";
import { Input } from "./Homepage.style";

const Homepage = () => {
  return (
    <ScrollView>
      <Image
        source={{ uri: "https://source.unsplash.com/800x800" }}
        style={{ display: "flex", width: 400, height: 400 }}
      />
      <Text>Welcome home with image</Text>
      <Input placeholder="Type here" />
    </ScrollView>
  );
};

export default Homepage;
