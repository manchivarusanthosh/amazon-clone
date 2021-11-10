import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import Button from "../../components/Button";

import styles from "./styles";
import product from "../../data/product";
import QuantitySelector from "../../components/QuantitySelector";

import { Picker } from "@react-native-picker/picker";
import ImageCarousel from "../../components/ImageCarousel";

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      <ImageCarousel images={product.images} />

      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}
      >
        {product.options.map((option, id) => (
          <Picker.Item label={option} key={id} value={option} />
        ))}
      </Picker>

      <Text style={styles.price}>
        {`from ${product.price}`}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>{` $ ${product.oldPrice}`}</Text>
        )}
      </Text>

      <Text style={styles.description}>{product.description}</Text>

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      <Button
        text={"Add To Cart"}
        onPress={() => console.warn("Added")}
        containerStyles={{ backgroundColor: "#fec76f" }}
      />

      <Button
        text={"Buy Now"}
        onPress={() => console.warn("Bought")}
        containerStyles={{ backgroundColor: "#f9b45a" }}
      />
    </ScrollView>
  );
};

export default ProductScreen;
