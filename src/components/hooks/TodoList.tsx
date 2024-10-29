import { View, Text, StyleSheet, TextInput, FlatList, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

// Todoアイテムの型定義
interface Todo {
  id: string;    // TodoのユニークなID
  text: string;  // Todoの内容
}

// TodoItemコンポーネントのProps型定義
interface TodoItemProps {
  item: Todo;
}

const TodoList =() =>{
  // テキスト入力の状態管理
  const [text, setText] = useState<string>("");
  // Todoリストの状態管理
  const [todos, setTodos] = useState<Todo[]>([]);

  // 新しいTodoを追加する関数
  const addTodo = () => {
    if (text.trim()) {  // 空白でない場合のみ追加
      setTodos([
        ...todos,  // 既存のTodoを保持
        {
          id: Date.now().toString(),  // 一意のIDを生成
          text: text  // 入力されたテキスト
        }
      ]);
      setText("");  // 入力欄をクリア
    }
  };

  // Todoを削除する関数
  const removeTodo = (id: string) => {
    // 指定されたid以外のTodoだけを残す
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // キーボードのDoneボタンが押された時の処理
  const handleSubmit = () => {
    addTodo();
  };

  // 各Todoアイテムのレンダリング
  const renderTodo = ({ item }: TodoItemProps) => (
    <TouchableOpacity
      onPress={() => removeTodo(item.id)}  // タップで削除
      style={styles.todoItem}
    >
      <Text style={styles.todoText}>{item.text}</Text>
    </TouchableOpacity>
  );

  // UIの構築
  return (
    <View>
      {/* ヘッダー */}
      <Text style={styles.header}>Todo</Text>

      {/* 入力フォーム */}
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Add a new task"
        onSubmitEditing={handleSubmit}  // キーボードのDoneで送信
        returnKeyType="done"
      />

      {/* 追加ボタン */}
      <Button title="Add Task" onPress={addTodo} />

      {/* Todoリスト */}
      <FlatList
        data={todos}  // 表示するデータ
        renderItem={renderTodo}  // 各アイテムのレンダリング方法
        keyExtractor={(item) => item.id}  // 一意のキーを指定
      />
    </View>
  );
};

// スタイル定義
const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  todoItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  todoText: {
    fontSize: 18,
  },
});

export default TodoList
