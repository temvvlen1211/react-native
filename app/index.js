import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import ProductCard from "../components/ProductCard";

function index() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        setLoading(false);
      });
  }, []);
  if (loading) return <Text>loading...</Text>;
  return (
    <FlatList
      data={items}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={{ width: "50%" }}>
          <Link href="/product">
            <ProductCard product={item} key={item.id} />
          </Link>
        </View>
      )}
    />
  );
}

export default index;
