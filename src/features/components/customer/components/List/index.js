import React from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useListCustomers } from "../../hooks";
import ShowCustomer from "../ShowCustomer";
import Button from "../../../../../components/Button";

const List = () => {
    const { navigate } = useNavigation();
    const customers = useListCustomers();
    console.log(customers)

    return (
        <View>
            <Text>Customers List</Text>

            {customers && customers.length > 0 ? (
                <FlatList
                    data={customers || []}
                    renderItem={(props) => <ShowCustomer {...props} />}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <>
                    <Text>{"No Customers"}</Text>
                    <Button
                        text="Add Customer"
                        onPress={() => {
                            navigate("AddCustomer");
                        }}
                    />
                </>
            )}
        </View>
    );
};

export default List;