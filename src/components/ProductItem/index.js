import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const ProductItem = (props) => {
  const { item } = props;
  const ratingArray = [1, 2, 3, 4, 5];
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("ProductDetails");
  };

  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: `${item.image}`,
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={4}>
          {item.title}
        </Text>
        <View style={styles.ratingContainer}>
          {ratingArray.map((el, i) => (
            <FontAwesome
              key={item.id - i}
              style={styles.star}
              name={i < Math.floor(item.avgRating) ? "star" : "star-o"}
              size={18}
              color="#e47911"
            />
          ))}
          <Text sty>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          {`from ${item.price}`}
          {item.oldPrice && (
            <Text style={styles.oldPrice}>{` $ ${item.oldPrice}`}</Text>
          )}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;
