import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Edit from "../screens/customer/Edit";
import New from "../screens/customer/New";
import ListByRegion from "../screens/region/ListByRegion";
import ListRegions from "../screens/region/ListRegions";
import Welcome from "../screens/Welcome";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Welcome"}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="ListRegions" component={ListRegions} />
                <Stack.Screen name="ListByRegion" component={ListByRegion} />
                <Stack.Screen name="AddCustomer" component={New} />
                <Stack.Screen name="EditCustomer" component={Edit} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;