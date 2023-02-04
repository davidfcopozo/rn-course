import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoaltHandler() {
    setGoals((prevGoals) => [...prevGoals, enteredGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoaltHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(goalsData) => {
            return (
              <View key={goalsData.goal} style={styles.goalsListItems}>
                <Text style={styles.goalText}>{goalsData.item}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 8,
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    justifyContent: "#cccccc",
    width: "70%",
    padding: 8,
  },
  goalsContainer: {
    flex: 6,
  },
  goalsListItems: {
    borderRadius: 5,
    width: "90%",
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: "#5e08cc",
    color: "#ffffff",
    margin: 6,
  },
  goalText: { color: "#ffffff" },
});
