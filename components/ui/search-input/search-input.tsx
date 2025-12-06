import React, {useState, useEffect, useRef} from "react";
import {TextInput, View} from "react-native";
import styles from "./search-input.style";
import Ionicons from '@expo/vector-icons/Ionicons';

interface SearchInputProps {
    onChange?: (text: string) => void;
    debounceMs?: number;
}

export default function SearchInput({onChange, debounceMs = 300}: SearchInputProps) {
    const [value, setValue] = useState("");
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            onChange?.(value);
        }, debounceMs);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [value, debounceMs, onChange]);

    return <View style={styles.container}>
        <Ionicons name="search" size={24} color="#EBEDED" />
        <TextInput
            style={styles.searchInput}
            value={value}
            onChangeText={setValue}
        />
    </View>
}
