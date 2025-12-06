import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#CC3B3B",
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    backButton: {
        position: "absolute",
        left: 16,
        padding: 8,
    },
    backIcon: {
        width: 24,
        height: 24,
        tintColor: "#fff",
    },
    logo: {
        width: 120,
        height: 44,
        resizeMode: "contain",
    },
    content: {
        flex: 1,
        padding: 16,
    },
    imageContainer: {
        alignItems: "center",
        marginBottom: 24,
    },
    pokemonImage: {
        width: 280,
        height: 280,
        borderWidth: 4,
        borderColor: "#E5C547",
        borderRadius: 8,
        backgroundColor: "#f0f0f0",
    },
    infoTable: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        overflow: "hidden",
    },
    infoRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    infoRowLast: {
        borderBottomWidth: 0,
    },
    infoRowBlue: {
        backgroundColor: "#D8E4EF",
    },
    infoRowCream: {
        backgroundColor: "#FFF8DC",
    },
    infoLabel: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRightWidth: 1,
        borderRightColor: "#ccc",
    },
    infoLabelText: {
        fontSize: 16,
        color: "#333",
    },
    infoValue: {
        flex: 2,
        paddingVertical: 16,
        paddingHorizontal: 16,
        justifyContent: "center",
    },
    infoValueText: {
        fontSize: 16,
        fontWeight: "600",
        textTransform: "capitalize",
        color: "#333",
    },
    buttonContainer: {
        padding: 16,
    },
    actionButton: {
        backgroundColor: "#E5C547",
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: "center",
    },
    actionButtonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;
