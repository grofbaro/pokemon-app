import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#A5A7A7",
        borderRadius: 8,
        overflow: "hidden",
    },
    picker: {
        height: 50,
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#333",
    },
    // iOS modal styles
    selectorButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        paddingHorizontal: 12,
        backgroundColor: "#fff",
    },
    selectorText: {
        fontSize: 16,
        color: "#333",
    },
    chevron: {
        fontSize: 12,
        color: "#666",
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        maxHeight: "60%",
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    closeButton: {
        fontSize: 16,
        color: "#007AFF",
    },
    optionItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    optionItemSelected: {
        backgroundColor: "#E8F4FD",
    },
    optionText: {
        fontSize: 16,
    },
});
