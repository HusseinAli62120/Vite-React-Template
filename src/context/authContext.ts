import { createContext } from "react";
import type { auth } from "../types/auth";

type authContextType = {
  auth: auth | null;
  setAuth: (auth: auth | null) => void;
};
const authContext = createContext<authContextType>({
  auth: {
    id: "",
    userName: "",
    email: "",
    role: "",
    accessToken: "",
  },
  setAuth: () => {},
});

export default authContext;
