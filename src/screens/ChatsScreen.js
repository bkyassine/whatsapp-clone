import { View, StyleSheet, Text, FlatList } from "react-native";
import Chats from "../../assets/data/chats.json";
import ChatListItem from "../components/ChatListItem";

const ChatsScreen = () => {
  return (
    <FlatList
      data={Chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
      style={{ backgroundColor: "white" }}
    />
  );
};

const styles = StyleSheet.create({});

export default ChatsScreen;
