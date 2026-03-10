# Vite-React-Template

---

This is a Frontend template for React, using Vite. It provides auth control & dark mode support out of the box. Also the following packages are already installed:

- Tailwind
- Axios
- ls-secure: For secure local storage
- Sonner: For Toasts

### Getting started:

To use this template fork the repo/use this template, and then once you have it in an IDE run the following.

1. `npm install`
2. in the **src** directory, create the following files (**if you are using a backend** and need them):
    1. .env.development
    2. .env.testing
    3. .env.production
3. Run different commands for different environments
    1. To run the development environment (use .env.development) 
    run: **`npm run dev`  
    📌** This is the one we use for development.
    2. To run the development environment but with the testing variables (use .env.testing)
    run: **`npm run dev:testing`  
    📌** Use this to test the testing environment.
    3. To build the app with the testing variables (use .env.testing)
    run: **`npm build:testing`  
    📌** Use this if you have a frontend deployed only for testing.
    4. To build the app with the testing variables (use .env.production)
    run: **`npm build`  
    📌** Use this when deploying the frontend.

### Control Components:

The template also has some control components:

- **`<RequireAuth />`**: To control who has access to pages.
- **`<PersistLogin />`** To provide login persistence on page refresh.
- **`<ThemeProvider />`**: For Theme control.

📌 You should try your best to not alter these components, since they already serve their purpose, and work together (Especially the `<RequireAuth>` & `<PersistLogin>`)

### Styling:

The template comes with two styling files

- **index.css:** This is the file used for theme definition, here we add colors, and make them into utility classes.  
  📌 Use this file to add colors — In **`:root`** for light mode, and in **`.dark`** for dark mode — then add those colors in the **`@theme`** to make them into utility classes with IDE intelsense.  

  📌 Do not change the **.no-transitions** class — used to prevent flashing when refreshing — or the styles applied to the body — used to prevent flashing when changing pages.
- **styles.module.css:** This file is used for to apply styles that are common to all page. Right now, it only has a **`.screen`** class, that applies the basic styles **for a one page, non-scrollable screen.**
This class should be applied to the top `<div>` of the component.  
**📌** You can add styles for other screen — scrollable ones — here if need be.

### State Management:

The template uses contextAPI for state management. It comes with three contexts

- themeContext & its hook (useTheme)
- siteLoading & its hook (useSiteLoading)
- authContext & its hook (useAuth)

📌 In the hooks directory, there is also a **useRefresh** hook this is the function that calls the backend endpoint to refresh using the HTTP cookie (right now it is commented). The function returns the auth credentials. This hook is used in **`<PersistLogin>`**

### Utility functions:

The template contains three utility functions:

- **lsInstance:** Which is a reusable instance of the ls-secure package.
- **axiosInstance:** Reusable instance of axios.
- **ToggleTheme:** The function used for themeToggle.

---

### Some notes:

- If you are building an app that does not have authentication, then you can delete the following:
    - **`<RequireAuth>`**
    - **`<PersistLogin>`**
    - **`<Unauthorized>`**
    - The auth type
    - **useRefresh** hook
    - auth context & its hook
    
    📌 Make sure to remove the auth related variables in **`<Root>`** as well.
