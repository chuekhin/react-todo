import { create } from "zustand";

const useTaskStore = create((set) => ({
   tasks :[
        { id: 1, task: "Complete project proposal", isDone: false },
        { id: 2, task: "Study JavaScript", isDone: false },
        { id: 3, task: "Submit assignment", isDone: false },
        { id: 4, task: "Prepare for the meeting", isDone: false },
        { id: 5, task: "Update resume", isDone: false }
    ],
    addTask : (newTask) => set((state) => ({tasks : [...state.tasks,newTask]})),
    doneTask : (taskId) => set((state) => ({tasks : state.tasks.map((el) => el.id === taskId ? {...el,isDone: !el.isDone} : el)})),
    removeTask : (taskId) => set((state) => ({tasks : state.tasks.filter((el) => el.id !== taskId)}))
   
}));

export default useTaskStore;