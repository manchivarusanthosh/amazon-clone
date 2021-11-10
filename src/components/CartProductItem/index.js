import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import QuantitySelector from "../QuantitySelector";

import styles from "./styles";

const CartProductItem = (props) => {
  const { item } = props;

  const ratingArray = [1, 2, 3, 4, 5];

  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: `${item.item.image}`,
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={4}>
            {item.item.title}
          </Text>
          <View style={styles.ratingContainer}>
            {ratingArray.map((el, i) => (
              <FontAwesome
                key={item.id - i}
                style={styles.star}
                name={i < Math.floor(item.item.avgRating) ? "star" : "star-o"}
                size={18}
                color="#e47911"
              />
            ))}
            <Text sty>{item.item.ratings}</Text>
          </View>
          <Text style={styles.price}>
            {`from ${item.item.price}`}
            {item.oldPrice && (
              <Text style={styles.oldPrice}>{` $ ${item.item.oldPrice}`}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};

export default CartProductItem;
