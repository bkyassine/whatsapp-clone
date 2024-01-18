import { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
const InputBox = () => {
  const [newMessage, setNewMessage] = useState("");
  const onSend = () => {
    console.warn("Sending a message", newMessage);
    setNewMessage("");
  };
  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        style={styles.input}
        placeholder="Type a message..."
      />
      <MaterialIcons
        onPress={onSend}
        style={styles.send}
        name="send"
        size={24}
        color="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    padding: 5,
  },
  input: {
    fontSize: 18,
    flex: 1,
    backgroundColor: "lightgray",
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
    height: 40,
  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 30,
  },
});

export default InputBox;
