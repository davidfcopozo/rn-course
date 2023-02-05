import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import CustomButton from "./components/CustomButton";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function startAddGoalHandler() {
    setShowModal(true);
  }

  function endAddGoalHandler() {
    setShowModal(false);
  }

  function addGoaltHandler(enteredGoalText) {
    if (!enteredGoalText) return;
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoaltHandler(id) {
    setGoals((prevGoals) => prevGoals.filter((goals) => goals.id !== id));
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <CustomButton
          title="Add new Goal"
          buttonContainer={styles.buttonContainer}
          buttonStyles={styles.buttonStyles}
          onPressHandler={startAddGoalHandler}
          rippleEffect={styles.rippleEffect}
          buttonTextStyles={styles.buttonTextStyles}
        />
        <GoalInput
          onAddGoal={addGoaltHandler}
          onShowModal={showModal}
          onCloseModal={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(goalsData) => {
              return (
                <GoalItem
                  onDelete={deleteGoaltHandler}
                  value={goalsData.item}
                  id={goalsData.item.id}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
    alignItems: "center",
  },

  goalsContainer: {
    flex: 6,
    width: "90%",
  },
  buttonContainer: {
    marginVertical: 16,
    alignItems: "stretch",
    flex: 1,
    width: "80%",
  },
  buttonStyles: {
    backgroundColor: "#a065ec",
    borderRadius: 5,
    width: "100%",
    padding: 8,
    alignItems: "center",
  },
  buttonTextStyles: {
    color: "#ffffff",
  },
  rippleEffect: {
    opacity: 0.8,
  },
});
