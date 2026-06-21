# 🚀Vite-React-Template

This is a Frontend template for React, using Vite. It provides auth control & dark mode support out of the box.

This template consists of two branches:

- **Base:** is a basic frontend template. Even though it has all components necessary for JWT authentication.  
It is recommended to use when your project does not have authentication.   
You’ll need to delete some components. **Read notes below.**
- **Main: This is the default branch,** it consists of the Base branch with full authentication implemented using Better-Auth.   
Recommend use, when your project has authentication.  
**Highly recommend to use this with the main branch of Express-Ts-Template**

Also the following packages are already installed in both branches:

- Tailwind
- Axios
- ls-secure: For secure local storage
- Sonner: For Toasts

### 💻Getting started:

To use this template fork the repo/use this template, and then once you have it in an IDE run the following.

1. `npm install`
2. in the **Root directory**, create the following files.
    1. .env.development
    2. .env.test
    3. .env.production
    
    📌 Add the following environment variable, used by:  
    `axiosInstance` and `auth`
    
    Add this in your .env files:  
    
    `VITE_BACKEND_URL='<yourBackendUrl>'`  
    
    📌 Make sure to prefix any other variable with **VITE** as well.
    
3. Run different commands for different environments
    1. To run the development environment (use .env.development)  
    run: **`npm run dev`  
    📌** This is the one we use for development.
    2. To run the development environment but with the testing variables (use .env.test)  
    run: **`npm run dev:test`  
    📌** Use this to test the testing environment.
    3. To build the app with the testing variables (use .env.test)  
    run: **`npm build:test`  
    📌** Use this if you have a frontend deployed only for test.
    4. To build the app with the production variables (use .env.production)  
    run: **`npm build`  
    📌** Use this when deploying the frontend.

### ⚙Control Components:

The template also has some control components:

- **`<RequireAuth />`**: To control who has access to pages.
- **`<ThemeProvider />`**: For Theme control.

### Styling:

The template comes with two styling files

- **index.css:** This is the file used for theme definition, here we add colors, and make them into utility classes.  
📌 Use this file to add colors — In **`:root`** for light mode, and in **`.dark`** for dark mode — then add those colors in the **`@theme`** to make them into utility classes with IDE intelsense.  

📌 Do not change the **`.no-transitions`** class — used to prevent flashing when refreshing — or the styles applied to the body — used to prevent flashing when changing pages.

- **styles.module.css:** This file is used for to apply styles that are common to all page. Right now, it only has a **`.screen`** class, that applies the basic styles **for a one page, non-scrollable screen.**
This class should be applied to the top `<div>` of the component.  
📌 You can add styles for other screen — scrollable ones — here if need be.

### State Management:

The template uses contextAPI for state management. It comes only with:

- `themeContext` & its hook (`useTheme`): To control app’s theme.

### Utility functions:

The template contains three utility functions:

- `auth` **:** This file is the better-auth client instance. Here we configure auth options, add custom field — like the role attribute — and export the instance to use in the app.
- `values` **:** Contains the username validator regex. Add enums and other values here.
- **`lsInstance`:** Which is a reusable instance of the ls-secure package.
- **`axiosInstance`:** Reusable instance of Axios.
- **`ToggleTheme`:** The function used to toggle the theme.

---

### 📝Some notes:

- Right now, username is used as the method of authentication. However, better-auth still requires an email for username authentication, that’s why we have a dummy email in the `Signup` page.
- The username attribute needs to be unique and fits the regex, but the name attribute can be anything, since that is only the displayed username, and is  not used in the authentication process.

---

### 🔗 References:

- **Better-Auth:** https://better-auth.com/
