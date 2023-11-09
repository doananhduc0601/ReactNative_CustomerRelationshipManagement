import { useNavigation } from "@react-navigation/native";
import { View, TextInput, Text } from "react-native";
import { useUpdateFields } from "../../hooks";
import { PENDING, INPROGRESS } from "../../../../../utils/status";
import Button from "../../../../../components/Button";
import Switch from "../Switch";
import Combobox from "../Combobox";
import styles from "./styles";

const Form = ({ handleSubmit, customerID, status }) => {
    const navigation = useNavigation();

    const { fields, setFormField } = useUpdateFields(customerID);

    const { firstName, lastName, active, region } = fields;

    const onPress = () => {
        handleSubmit();
        navigation.navigate("ListByRegion");
    };

    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    key={"firstName"}
                    placeholder="First Name..."
                    value={firstName || ""}
                    style={styles.textInput}
                    onChangeText={(v) => setFormField("firstName", v)}
                />
                <TextInput
                    key={"lastName"}
                    placeholder="Last Name..."
                    value={lastName || ""}
                    style={styles.textInput}
                    onChangeText={(v) => setFormField("lastName", v)}
                />
            </View>

            <View>
                <Text>Active: </Text>
                <Switch setFormField={setFormField} />
            </View>
            <Combobox setFormField={setFormField} />

            <Button
                onPress={onPress}
                text="Submit"
                disabled={status !== PENDING && status !== INPROGRESS}
            />
        </View>
    );
};

export default Form;