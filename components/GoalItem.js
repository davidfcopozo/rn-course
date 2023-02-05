import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ value, onDelete, id }) {
  function deleteGoalHandler() {
    onDelete(id);
  }
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      style={({ pressed }) => pressed && styles.pressedItem}
      onPress={deleteGoalHandler}
    >
      <View style={styles.goalsListItems}>
        <Text style={styles.goalText}>{value.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalsListItems: {
    borderRadius: 5,
    width: "100%",
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: "#5e08cc",
    color: "#ffffff",
    margin: 6,
  },
  goalText: { color: "#ffffff" },
  pressedItem: { opacity: 0.5 },
});
