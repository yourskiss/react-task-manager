import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTasks, createTask, updateTask, deleteTask, Task } from "../api/tasks";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../api/firebase";

export function useTasks() {
  const [user] = useAuthState(auth);
  const queryClient = useQueryClient();

  const tasksQuery = useQuery<Task[]>({
    queryKey: ["tasks", user?.uid],
    queryFn: () => getTasks(user!.uid),
    enabled: !!user,
  });

  const createMutation = useMutation({
    mutationFn: (task: Omit<Task, "id">) => createTask(user!.uid, task),
    onSuccess: () => queryClient.invalidateQueries(["tasks", user?.uid]),
  });

  const updateMutation = useMutation({
    mutationFn: (params: { id: string; updates: Partial<Task> }) =>
      updateTask(params.id, params.updates),
    onSuccess: () => queryClient.invalidateQueries(["tasks", user?.uid]),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => queryClient.invalidateQueries(["tasks", user?.uid]),
  });

  return { tasksQuery, createMutation, updateMutation, deleteMutation };
}
