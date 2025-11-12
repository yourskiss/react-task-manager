import { db, storage } from "./firebase";
import {
  collection, addDoc, updateDoc, deleteDoc, doc, query, where, getDocs, serverTimestamp,
} from "firebase/firestore";

export interface Task {
  id?: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  dueDate: string;
  completed: boolean;
  createdAt?: any;
  updatedAt?: any;
}

const taskRef = collection(db, "tasks");

export async function getTasks(userId: string): Promise<Task[]> {
  const q = query(taskRef, where("userId", "==", userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Task[];
}

export async function createTask(userId: string, task: Omit<Task, "id">) {
  await addDoc(taskRef, { ...task, userId, createdAt: serverTimestamp() });
}

export async function updateTask(taskId: string, updates: Partial<Task>) {
  const docRef = doc(db, "tasks", taskId);
  await updateDoc(docRef, { ...updates, updatedAt: serverTimestamp() });
}

export async function deleteTask(taskId: string) {
  const docRef = doc(db, "tasks", taskId);
  await deleteDoc(docRef);
}
