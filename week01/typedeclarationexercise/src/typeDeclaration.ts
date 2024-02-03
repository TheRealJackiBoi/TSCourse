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



/*

Questions:
1. Where do you find axios type declarations file?

You can either find it in the node_modules folder or on the github page.

2. What is the name of the type declaration file for axios?

index.d.ts

3. How do you install a type declaration fille for a library that does not have one?

You can install it using npm install @types/libraryname

4. What is the difference between a type declaration fifle and a type definition file?

A type declaration file is a file that contains type declarations. A type definition file is a file that contains type definitions. They are the basicly the same thing.

*/