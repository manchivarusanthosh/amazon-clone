import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import Button from "../../components/Button";
import CartProductItem from "../../components/CartProductItem";
import { useNavigation } from "@react-navigation/native";
import cartProducts from "../../data/cart";

const ShoppingCartScreen = () => {
  const totalPrice = cartProducts.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0
  );

  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <FlatList
        data={cartProducts}
        renderItem={({ item }) => <CartProductItem item={item} />}
        keyExtractor={({ id }) => id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Subtotal ({cartProducts.length} items):
              <Text style={{ color: "#e47911", fontWeight: "bold" }}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Button
              text="Proceed to checkout"
              onPress={() => navigation.navigate("Address")}
              containerStyles={{
                backgroundColor: "#f7e300",
                borderColor: "#c7b702",
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default ShoppingCartScreen;
