import { User } from "./App"

const useAuth = (setUser: (user: User | null) => void) => {
  
  const users: User[] = [
    {
      name: 'Jack',
      email: 'jslam@oulund.dk',
      password: '1234'
    },
    {
      name: 'Julius',
      email: 'julius@lassen.dk',
      password: '1234'
    }
  ]

   

  const login = (email: string, password: string): void => {
    if ( email == '' || password == '' ) {
      console.log('Please enter email and password')
      return
    }

    const user = users.find(user => user.email === email && user.password === password)
    if (user) {
      setUser(user)
      return
    }

    console.log('Invalid email or password')
  }

  const logout = () => {
    setUser(null)
  }

  return { login, logout }
}

export default useAuth