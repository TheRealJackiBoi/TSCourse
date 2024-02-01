import axios, {AxiosError, AxiosResponse} from 'axios'

type User = {
  name: string,
  username: string,
  email: string
}

const logUser = (user: User): void => console.log(user)

axios.get("https://jsonplaceholder.typicode.com/users/1")
  .then((res: AxiosResponse<User>) => logUser(res.data))
  .catch((err: AxiosError) => console.log(err))

axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res: AxiosResponse<User[]>) => console.log(res.data))
  .catch((err: AxiosError) => console.log(err));

