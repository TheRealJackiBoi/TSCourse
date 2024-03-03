import { ITask, taskObserver } from '.'

const taskFactory = (prevId: number, title: string, description: string): ITask => {
  return {
    id: prevId + 1,
    title: title,
    description: description,
    completed: false
  }
}

export class TaskManager {
    private tasks: ITask[] = []
    private observers: taskObserver[] = []


    constructor() {
      this.tasks = []
      this.observers = []

      // Bind methods
      this.getTasks = this.getTasks.bind(this)
      this.addTask = this.addTask.bind(this)
      this.editTask = this.editTask.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
      this.completeTask = this.completeTask.bind(this)
      this.subscribe = this.subscribe.bind(this)
      this.notify = this.notify.bind(this)
      this.unsubscribe = this.unsubscribe.bind(this)
    }

    getTasks() { return this.tasks }

    addTask({title, description}: ITask) {
      this.tasks = [...this.tasks, taskFactory(this.tasks.length, title, description)]
      this.notify()
      console.log(this.tasks)
    }

    editTask(id: number, task: ITask) {
      this.tasks = this.tasks.map((t) => t.id === id ? task : t)
      this.notify()
    }

    handleDelete(id: number) {
      this.tasks = this.tasks.filter((task: ITask) => task.id !== id)
      this.notify()
    }

    completeTask(id: number) {
      this.tasks = this.tasks.map((task: ITask) => task.id === id ? {...task, completed: !task.completed} : task)
      this.notify()
    }

    // Observer pattern
    subscribe(observer: taskObserver) {
      this.observers.push(observer)
    }

    notify() {
      this.observers.forEach((observer) => observer.callback())
    }

    unsubscribe() {
      this.observers = []
    }
}

const taskManager = new TaskManager()

export default taskManager