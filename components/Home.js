import {Image, View, Text } from "react-native";


export default function RecipeCard({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
        source={{ uri: 'logo-recipiz.png'
    }}
        style={{ width: 50, height: 50 }}
      />
      <Text>Home Screen ABC</Text>
    </View>
  );
}


export default RecipeCard;

