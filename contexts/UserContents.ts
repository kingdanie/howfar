import { UserInfo } from './../types/UserInfo';
import { createContext } from "react"


export const UserContext = createContext({
  username: "",
  setUsername: (username: string) => {},
  userInfo: [],
  setUserInfo: (userInfo: UserInfo) => {},
} as { username: string,
setUsername: React.Dispatch<React.SetStateAction<string>>,
userInfo: UserInfo[],
setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>})