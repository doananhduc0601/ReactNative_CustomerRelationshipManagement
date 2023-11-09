import AsyncStorage from "@react-native-async-storage/async-storage";

export const SetData = async (key, value) => {
    const serialized = JSON.stringify(value);
    return await AsyncStorage.setItem(key, serialized);
};

export const GetData = async (key) => {
    const raw = await AsyncStorage.getItem(key);
    return JSON.parse(raw);
};

export const RemoveData = async (key) => {
    return await AsyncStorage.removeItem(key);
};

export const RemoveAllData = async () => {
    return await AsyncStorage.clear();
};