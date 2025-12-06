import React from "react";
import {Text, View} from "react-native";
import styles from "./pokemon-list-header.style";

export default function PokemonListHeader() {
    return (
        <View style={styles.headerRow}>
            <Text style={{...styles.headerText, width: "40%"}}>Name</Text>
            <Text style={{...styles.headerText, width: "30%"}}>Type</Text>
            <Text style={{...styles.headerText, width: "30%"}}>Status</Text>
        </View>
    );
}
