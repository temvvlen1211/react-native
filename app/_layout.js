import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView } from "react-native";

function _layout() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "my -first app" }} />
      </Stack>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default _layout;
