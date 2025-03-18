import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const TodoList = () => {
  const queryClient = useQueryClient();

  // Query for fetching todos
  const { data: todos, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await axios.get<Todo[]>('https://api.example.com/todos');
      return response.data;
    },
  });

  // Mutation for adding a todo
  const addTodoMutation = useMutation({
    mutationFn: (newTodo: Omit<Todo, 'id'>) => {
      return axios.post('https://api.example.com/todos', newTodo);
    },
    onSuccess: () => {
      // Invalidate and refetch todos after mutation
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  if (isLoading) return (<div>Loading...</div>);
  if (error) return (<div>Error: {error.message}</div>);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Done' : 'Pending'}
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          addTodoMutation.mutate({
            title: 'New Todo',
            completed: false,
          })
        }
      >
        Add Todo
      </button>
    </div>
  );
};