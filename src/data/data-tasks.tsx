export type Task = {
    title: string,
    id: string,
    status: 'todo' | 'in-progress' | 'done',
    priority: Priority,
    points?: number
}
export type Priority = 'low' | 'medium' | 'high';
export const tasks: Array<Task> = [
    {
        title: "Do Reseach",
        id: "1",
        status: "todo",
        priority: "high",
        points: 5,
    },
    {
        title: "Competition analysis",
        id: "2",
        status: "in-progress",
        priority: "low",
        points: 4
    },
    {
        title: "Competition analysis",
        id: "3",
        status: "in-progress",
        priority: "medium",
        points: 4
    },
    {
        title: "Product development",
        id: "4",
        status: "done",
        priority: "low",
        points: 6
    },
    {
        title: "Product signoff",
        id: "5",
        status: "done",
        priority: "high",
        points: 9
    },
    {
        title: "Product signoff",
        id: "6",
        status: "done",
        priority: "medium",
        points: 9
    },
    {
        title: "Product signoff",
        id: "7",
        status: "tod0",
        priority: "high",
        points: 9
    },
    {
        title: "Product signoff",
        id: "8",
        status: "done",
        priority: "medium",
        points: 9
    },
    {
        title: "Product signoff",
        id: "9",
        status: "todo",
        priority: "low",
        points: 9
    },
    {
        title: "Product signoff",
        id: "10",
        status: "in-progress",
        priority: "low",
        points: 9
    },
    {
        title: "Product sigin",
        id: "11",
        status: "in-progress",
        priority: "high",
        points: 9
    },
    {
        title: "Product deliverd",
        id: "12",
        status: "in-progress",
        priority: "medium",
        points: 9
    },

]