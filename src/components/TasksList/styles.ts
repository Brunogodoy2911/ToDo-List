import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1A1A1A",
  },
  taskCounters: {
    width: 327,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  emptyList: {
    width: 327,
    height: 208,
    borderTopColor: "#333333",
    borderTopWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textEmpty: {
    fontSize: 14,
    fontFamily: "Inter_700Bold",
    color: "#808080",
  },
  itemContainer: {
    width: 327,
    height: 64,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: "#262626",
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 999,
    borderColor: "#4EA8DE",
  },
  checkboxChecked: {
    borderColor: "#5E60CE",
    backgroundColor: "#5E60CE",
  },
  taskText: {
    color: "#F2F2F2",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    maxWidth: 200,
  },
});
