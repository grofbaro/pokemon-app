import {StyleSheet} from "react-native";

export default StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 6,
        gap: 12,
    },
    itemCard: {
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 12,
        backgroundColor: "#fff",
        borderRadius: 7,
        borderWidth: 1,
        height: 32,
        borderColor: "#2E6EB5",
        color: "black",
        alignItems: "center",

    },
    itemCardCaught: {
        borderColor: "#E5C547",
        backgroundColor: "#FFFEF5",
    },
    actionButton: {
        height: 32,
        justifyContent: "center",
        borderRadius: 8,
        minWidth: 90,
        alignItems: "center",

    },
    catchButton: {
        backgroundColor: "#2E6EB5",
    },
    releaseButton: {
        backgroundColor: "#FFCB05",
    },
    actionButtonText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "400",
    },
    name: {
        width: "40%",
        textTransform: "capitalize",
        fontSize: 12,
    },
    type: {
        width: "30%",
        fontSize: 12,
    },
    status: {
        width: "30%",
        fontSize: 12,
    },
});
