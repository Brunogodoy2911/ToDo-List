import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Alert, TouchableOpacity } from "react-native";
import { AnimatePresence, MotiView } from "moti";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Checkbox from "expo-checkbox";
import { IconClipboardText, IconTrash } from "@tabler/icons-react-native";

import { s } from "./styles";

import { TaskCounter } from "../../components/TaskCounter";
import { Form } from "../Form";
import { Loader } from "../Loader";

type TaskData = {
  id: string;
  task: string;
  completed: boolean;
};

export function TasksList() {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setIsLoading(true);
      const value = await AsyncStorage.getItem("tasks");
      if (value !== null) {
        setTasks(JSON.parse(value));
      }
    } catch (e) {
      console.log("Erro ao recuperar a task: ", e);
    } finally {
      setIsLoading(false);
    }
  };

  const storeData = async (tasks: TaskData[]) => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (e) {
      console.log("Erro ao armazenar a task: ", e);
    }
  };

  const handleAddTask = (newTask: string) => {
    const taskAlreadyExists = tasks.some(
      (task) => task.task.trim().toLowerCase() === newTask.trim().toLowerCase()
    );

    if (taskAlreadyExists) {
      return Alert.alert(`${newTask} já está na lista!`, "Digite outra tarefa");
    }

    if (newTask.trim()) {
      const updatedTasks = [
        ...tasks,
        { id: Date.now().toString(), task: newTask, completed: false },
      ];
      setTasks(updatedTasks);
      storeData(updatedTasks);
    }
  };

  const handleRemoveTask = (taskId: string) => {
    Alert.alert("Remover Tarefa", `Deseja remover esta tarefa?`, [
      {
        text: "Sim",
        onPress: () => {
          const updatedTasks = tasks.filter((task) => task.id !== taskId);
          setTasks(updatedTasks);
          storeData(updatedTasks);
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  const toggleTaskCompleted = (taskId: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    storeData(updatedTasks);
  };

  function taskItem({ item }: { item: TaskData }) {
    return (
      <MotiView
        from={{
          opacity: 0,
          translateY: -10,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        exit={{
          opacity: 0,
          translateY: -10,
        }}
        style={s.itemContainer}
      >
        <View style={s.content}>
          <Checkbox
            value={item.completed}
            onValueChange={() => toggleTaskCompleted(item.id)}
            style={s.checkbox}
            color={item.completed ? "#5E60CE" : undefined}
          />
          <Text
            numberOfLines={2}
            style={[
              s.taskText,
              item.completed && {
                textDecorationLine: "line-through",
                color: "#808080",
              },
            ]}
          >
            {item.task}
          </Text>
          <TouchableOpacity onPress={() => handleRemoveTask(item.id)}>
            <IconTrash size={25} color="#808080" />
          </TouchableOpacity>
        </View>
      </MotiView>
    );
  }

  function emptyList() {
    return (
      <View style={s.emptyList}>
        <IconClipboardText
          size={76}
          color="#3d3c3c"
          style={{ marginBottom: 16 }}
        />
        <Text style={s.textEmpty}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={[s.textEmpty, { fontFamily: "Inter_400Regular" }]}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    );
  }

  const completedTasksCount = tasks.filter((tasks) => tasks.completed).length;

  return (
    <View style={s.container}>
      <Form onAddTask={handleAddTask} />

      <View style={s.taskCounters}>
        <TaskCounter label="Criadas" count={tasks.length.toString()} />
        <TaskCounter
          style={{ color: "#8284FA" }}
          label="Concluídas"
          count={completedTasksCount}
        />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          isLoading ? (
            <Loader />
          ) : (
            <AnimatePresence>{taskItem({ item })}</AnimatePresence>
          )
        }
        ListEmptyComponent={emptyList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
