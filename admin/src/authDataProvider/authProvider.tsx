// in src/authProvider.ts
type username = {username:string}
type status = {status:number}

// TypeScript users must reference the type: `AuthProvider`
export const authProvider = {
    // called when the user attempts to log in
    login: ({ username }:username) => {
      localStorage.setItem("username", username);
      // accept all username/password combinations
      return Promise.resolve();
    },
    // called when the user clicks on the logout button
    logout: () => {
      localStorage.removeItem("username");
      return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }:status) => {
      if (status === 401 || status === 403) {
        localStorage.removeItem("username");
        return Promise.reject();
      }
      return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
      return localStorage.getItem("username")
        ? Promise.resolve()
        : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
  };