import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
import prodData from "./prod.json";
import style from "./app.style";
import { StatusBar } from "expo-status-bar";
import ProdCard from "./Components/ProdCard";

export default function App() {
  const itemRender = ({item, index}) => {
    const isLast = index === prodData.length - 1;
    return(
      <ProdCard style={isLast ? style.lastItem : null} prodInfo={item}></ProdCard>
    )
  }
  return (
    <View>
      <StatusBar hidden />
      <Text style={style.mainHeader}>Diji Store</Text>
      <TextInput style={style.input} />
      <FlatList
        data={prodData}
        renderItem={itemRender}
        numColumns={2}
      />
    </View>
  );
}
