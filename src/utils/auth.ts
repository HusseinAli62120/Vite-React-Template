import {
  inferAdditionalFields,
  usernameClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // The Backend url
  //
  baseURL: import.meta.env.VITE_BACKEND_URL,
  // Add the role attribute.

  plugins: [
    usernameClient(),
    // Add
    inferAdditionalFields({
      user: {
        role: {
          type: "string",
          default: "USER",
          required: false,
        },
      },
    }),
  ],
});

export const { signIn, signUp, signOut, useSession } = authClient;
