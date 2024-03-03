export interface ITask {
  id: number
  title: string
  description: string
  completed: boolean
}

export class taskObserver {
  public callback: () => void

  constructor(callback: () => void) {
    this.callback = callback
  }
}