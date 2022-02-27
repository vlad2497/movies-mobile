import { useState } from "react";
import { View } from "react-native";
import AppLoading from "expo-app-loading";
import { loadFonts } from "fonts";
import List from "screens/favorites/list";

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setLoading(false)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View style={{ paddingTop: 60 }}>
      <List />
    </View>
  );
}
