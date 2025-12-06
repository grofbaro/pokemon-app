import React, {useState} from "react";
import {View, Text, Modal, Pressable, FlatList, Platform} from "react-native";
import {Picker} from "@react-native-picker/picker";
import styles from "./type-select.style";

interface TypeSelectProps {
    value: string | null;
    onChange: (value: string | null) => void;
    types: string[];
}

interface TypeOption {
    name: string;
    label: string;
}

export default function TypeSelect({value, onChange, types}: TypeSelectProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const displayValue = value
        ? value.charAt(0).toUpperCase() + value.slice(1)
        : "Select...";

    const typeOptions: TypeOption[] = [
        {name: "", label: "Select..."},
        ...types.map(t => ({
            name: t,
            label: t.charAt(0).toUpperCase() + t.slice(1),
        })),
    ];

    const handleSelect = (typeName: string) => {
        onChange(typeName === "" ? null : typeName);
        setIsModalVisible(false);
    };

    // Use modal approach on iOS for reliable tap handling
    if (Platform.OS === "ios") {
        return (
            <View>
                <Text style={styles.label}>Pokemon Types</Text>
                <Pressable
                    style={styles.container}
                    onPress={() => setIsModalVisible(true)}
                >
                    <View style={styles.selectorButton}>
                        <Text style={styles.selectorText}>{displayValue}</Text>
                        <Text style={styles.chevron}>▼</Text>
                    </View>
                </Pressable>

                <Modal
                    visible={isModalVisible}
                    transparent
                    animationType="slide"
                    onRequestClose={() => setIsModalVisible(false)}
                >
                    <Pressable
                        style={styles.modalOverlay}
                        onPress={() => setIsModalVisible(false)}
                    >
                        <View style={styles.modalContent} onStartShouldSetResponder={() => true}>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalTitle}>Select Type</Text>
                                <Pressable onPress={() => setIsModalVisible(false)}>
                                    <Text style={styles.closeButton}>Done</Text>
                                </Pressable>
                            </View>
                            <FlatList
                                data={typeOptions}
                                keyExtractor={item => item.name || "all"}
                                renderItem={({item}) => (
                                    <Pressable
                                        style={[
                                            styles.optionItem,
                                            (item.name === "" ? null : item.name) === value && styles.optionItemSelected,
                                        ]}
                                        onPress={() => handleSelect(item.name)}
                                    >
                                        <Text style={styles.optionText}>{item.label}</Text>
                                    </Pressable>
                                )}
                            />
                        </View>
                    </Pressable>
                </Modal>
            </View>
        );
    }

    // Use native Picker on Android (works reliably)
    return (
        <View>
            <Text style={styles.label}>Pokemon Types</Text>
            <View style={styles.container}>
                <Picker
                    selectedValue={value ?? ""}
                    onValueChange={(itemValue) => onChange(itemValue === "" ? null : itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Select..." value="" />
                    {types.map((type) => (
                        <Picker.Item
                            key={type}
                            label={type.charAt(0).toUpperCase() + type.slice(1)}
                            value={type}
                        />
                    ))}
                </Picker>
            </View>
        </View>
    );
}
