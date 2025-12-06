import React from "react";
import {View, Text, Pressable} from "react-native";
import ExpoCheckbox from "expo-checkbox";
import styles from "./checkbox.style";

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export default function Checkbox({label, checked, onChange}: CheckboxProps) {
    return (
        <Pressable onPress={() => onChange(!checked)} style={styles.container}>
            <ExpoCheckbox
                value={checked}
                onValueChange={onChange}
                style={{borderColor: "#EBEDED"}}
            />
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
}
