import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import Button from "../components/Button";
import styles from "./Style";
import { DeleteAllData } from "../utils/async_Storage";

const Welcome = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Customer Manager!</Text>

            <Button style={styles.button}
                onPress={() => navigation.navigate("ListRegions")}
                text="Start Manager"
            />

            <Button onPress={() => DeleteAllData()} text="Delete Data" />
        </View>
    );
};

export default Welcome;