import { Link, Stack, useRouter } from "expo-router";
import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { LoremIpsum } from "lorem-ipsum";

function product() {
  const router = useRouter();
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        source={{ uri: "https://via.placeholder.com/500" }}
        style={{ width: "100%", height: 300 }}
      />

      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 12 }}>
          {lorem.generateSentences(3)}
        </Text>
        <Text
          style={{
            fontSize: 28,
            color: "green",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          120'000₮
        </Text>
        <Text style={{ fontSize: 18, lineHeight: 24 }}>
          {lorem.generateParagraphs(3)}
        </Text>
      </View>
      <TouchableOpacity onPressIn={() => router.back()}>
        <View
          style={{
            position: "absolute",
            right: 12,
            bottom: 12,
            zIndex: 1,
            paddingHorizontal: 20,
            paddingVertical: 12,
            backgroundColor: "#ff",
            borderWidth: 1,
            borderRadius: 5,
          }}
        >
          <Text>butsah</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default product;
