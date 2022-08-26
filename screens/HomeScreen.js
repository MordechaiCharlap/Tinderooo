import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-red-600">
      <Text className="bg-red-600">Hey, HomeScreen</Text>
      <Button
        title="Move to chats"
        className="w-auto"
        onPress={() => navigation.navigate("Chat")}
      ></Button>
    </View>
  );
};

export default HomeScreen;
