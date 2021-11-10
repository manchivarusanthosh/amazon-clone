import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./style";
import countryList from "country-list";
import Button from "../../components/Button";

let countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);

  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");

  const [city, setCity] = useState("");

  const onCheckout = () => {
    if (addressError) {
      Alert.alert(
        "Fix all fields before checkout",
        "Fill up the required fields"
      );
      return;
    }
    if (!fullname) {
      Alert.alert(
        "Please fill in the Full Name Field",
        "Full Name field is empty"
      );
      return;
    }
    if (!phone) {
      Alert.alert(
        "Please fill in the Phone Number Field",
        "Phone Number field is empty"
      );
      return;
    }
    console.warn("Success!");
  };

  const validateAddress = () => {
    if (address.length < 3) {
      setAddressError("Address is too short");
    }
    if (address.length > 10) {
      setAddressError("Address is too long");
    }
    if (address.length < 1) {
      setAddressError("");
    }
  };
  return (
    <KeyboardAvoidingView>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          {/* added extra view to style the PICKER Component */}
          <View style={styles.pickerStyles}>
            {/*country picker  */}
            <Picker selectedValue={country} onValueChange={setCountry}>
              {countries.map((country, index) => (
                <Picker.Item
                  value={country.code}
                  label={country.name}
                  key={index}
                />
              ))}
            </Picker>
          </View>
        </View>
        {/* Full Name */}
        <View style={styles.row}>
          <Text style={styles.label}>Full Name (First Name and Last name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullname}
            onChangeText={setFullName}
          />
        </View>
        {/* Phone Number */}
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType={"phone-pad"}
          />
        </View>

        {/* Address */}
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={(text) => {
              setAddress(text), setAddressError("");
            }}
            onEndEditing={validateAddress}
          />
          {!!addressError && (
            <Text style={styles.errorLabel}>{addressError}</Text>
          )}
        </View>

        {/* Address */}
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
        </View>
        <Button text="Checkout" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
