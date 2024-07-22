export type Task = {
    title: string,
    id: string,
    status: 'todo' | 'in-progress' | 'done',
    points?: number
}

export const tasks: Array<Task> = [
    {
        title: "Do Reseach",
        id: "1",
        status: "todo",
        points: 5,
    },
    {
        title: "Competition analysis",
        id: "2",
        status: "in-progress",
        points: 4
    },
    {
        title: "Competition analysis",
        id: "3",
        status: "in-progress",
        points: 4
    },
    {
        title: "Product development",
        id: "4",
        status: "done",
        points: 6
    },
    {
        title: "Product signoff",
        id: "5",
        status: "done",
        points: 9
    },
    {
        title: "Product signoff",
        id: "6",
        status: "done",
        points: 9
    },
    {
        title: "Product signoff",
        id: "7",
        status: "tod0",
        points: 9
    },
    {
        title: "Product signoff",
        id: "8",
        status: "done",
        points: 9
    },
    {
        title: "Product signoff",
        id: "9",
        status: "todo",
        points: 9
    },
    {
        title: "Product signoff",
        id: "10",
        status: "in-progress",
        points: 9
    },
    {
        title: "Product sigin",
        id: "11",
        status: "in-progress",
        points: 9
    },
    {
        title: "Product deliverd",
        id: "12",
        status: "in-progress",
        points: 9
    },

]