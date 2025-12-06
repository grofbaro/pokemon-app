
import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    flatListContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#CDDDEE",
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7BA3C9",
    },

    footer: {
        paddingVertical: 16,
        alignItems: "center",
    },
    errorText: {
        fontSize: 16,
        color: "#CC3B3B",
        marginBottom: 16,
    },
    retryButton: {
        backgroundColor: "#2E6EB5",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },
    retryButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
