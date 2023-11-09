import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Text, View } from "react-native";
import { initialRegions } from "../../../../../utils/status";
import { styles } from "./styles";

const Combobox = ({ setFormField }) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={styles.label}>
                </Text>
            );
        }
        return null;
    };

    const onChange = (item) => {
        setValue(item.value);
        setIsFocus(false);
        setFormField("region", item.label);
    };

    return (
        <View style={styles.container}>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={initialRegions}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select a region" : "..."}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={onChange}
            />
        </View>
    );
};

export default Combobox;