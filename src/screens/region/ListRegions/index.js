import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import Button from "../../../components/Button";
import { initialRegions } from "../../../utils/status";
import styles from "./styles";

const ListRegions = () => {
    const navigation = useNavigation();

    const renderRegions = ({ item }) => (
        <View>
            <Button
                onPress={() => navigation.navigate("ListByRegion")}
                text={item.label}
            />
        </View>
    );
    return (
        <SafeAreaView style={styles.view}>
            <Button
                onPress={() => navigation.navigate("AddCustomer")}
                text="Create New Customer"
            />
            <Text style={styles.title}>Regions:</Text>
            <FlatList
                data={initialRegions}
                renderItem={renderRegions}
                keyExtractor={(item) => item.value}
            />
        </SafeAreaView>
    );
};

export default ListRegions;