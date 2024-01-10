import CredentialsProvider from "next-auth/providers/credentials";

import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        console.log("CREDENTIALS: ", credentials);

        if (user) {
          console.log("USER: ", user);
          return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
