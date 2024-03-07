import { createContext, useReducer, useState } from "react"
import Login from "./Login"

const countReducer = (state: number, action: string) => {
  switch (action) {
    case "increment":
      return state + 1
    case "decrement":
      return state > 0 ? state - 1: 0
    case "incFive":
      return state + 5
    case "decFive":
      return state > 5 ? state - 5: 0
    case "reset":
      return 0
    default:
      return state
  }
}

export type User = {
  name: string
  email: string
  password: string
}

export const UserContext = createContext<[User | null, (user: User | null) => void]>([null, () => {}])

function App() {
  const [count, dispatch] = useReducer(countReducer, 0)


  const [user, setUser] = useState<User | null>(null)
  

  return (
    <UserContext.Provider value={[user, setUser]}> 
      <div className="bg-slate-900 flex flex-col w-screen h-screen text-center align-middle justify-center text-white">

        <h1 className="text-4xl">Count: {count}</h1> 

        <div className="flex w-fit mx-auto">
          <button className="p-2 m-2 bg-blue-600 rounded w-fit h-fit" onClick={() => dispatch('increment')}>+1</button>
          <button className="p-2 m-2 bg-blue-600 rounded w-fit h-fit" onClick={() => dispatch('decrement')}>-1</button>
          <button className="p-2 m-2 bg-blue-600 rounded w-fit h-fit" onClick={() => dispatch('incFive')}>+5</button>
          <button className="p-2 m-2 bg-blue-600 rounded w-fit h-fit" onClick={() => dispatch('decFive')}>-5</button>
          <button className="p-2 m-2 bg-blue-600 rounded w-fit h-fit" onClick={() => dispatch('reset')}>Reset</button>
        </div>

        <Login />
      </div>
    </UserContext.Provider>
  )
}

export default App
