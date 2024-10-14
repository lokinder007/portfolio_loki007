import imgTodo from '../../assets/todo_list.jpg'
import imgCalculator from "../../assets/calculator.jpg"
import imgClock from "../../assets/clock.png"
import imgTasks from "../../assets/coding.jpg"

const projects = [
  {
    id: 1,
    image: imgTodo,
    to: "/todo",
    title: "Todo List",
    desc: "This is description.",
  },
  {
    id: 2,
    image: imgTodo,
    to: "/todofb",
    title: "Todo Firebase",
    desc: "This is description."
  },
  {
    id: 3,
    image: imgCalculator,
    to: "/calculator",
    title: "Calculater",
    desc: "This is description."
  },
  {
    id: 4,
    image: imgClock,
    to: "/clock",
    title: "Clock",
    desc: "This is description."
  },
  {
    id: 5,
    image: imgTasks,
    to: "/tasks",
    title: "Tasks",
    desc: "This is description."
  },
  {
    id: 6,
    image: imgTasks,
    to: "/hooks" ,
    title: "React Hooks",
    desc: "This is description."
  },
]
export default projects
