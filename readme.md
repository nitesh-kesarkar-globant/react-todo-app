
# React Todo App

This is a sample CRUD application built with React, React Router, and Bootstrap. 
It fetches todos from a local storage and allows you to add, edit, and delete todos. The application is styled using Bootstrap.

## Features

- This is a sample CRUD application built with React, React Router, and Bootstrap.
- Fetches todos from local storage and displays them in a list.
- Allows to add new todo.
- Allows to edit existing todo.
- Allows to delete todo.
- Uses React Router for navigation between different pages.
- Styled using Bootstrap for a clean and responsive UI.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nitesh-kesarkar-globant/react-todo-app
   ```

2. Navigate to the project directory:

   ```bash
   cd react-todo-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173/` to see the application running.

## Project Structure

The project structure follows the standard conventions of a React application:

```
|-- public/
|-- src/
    |-- components/
        |-- all the components here
    |-- hooks/
        |-- all the hooks here
    |-- utils/
        |-- all the utils here
    |-- App.jsx
    |-- main.jsx
|-- index.html
|-- package.json
|-- README.md
```

- The `src/components` directory contains the React components used in the application.
- The `src/hooks` directory contains custom hooks. For example handling todos.
- The `src/utils` directory contains utility functions. For example interacting with `localStorage`.
- The `src/App.jsx` file is the main entry point of the application.
- The `src/main.jsx` file is responsible for rendering the application.
- The `package.json` file contains the project configuration and dependencies.

## Dependencies

The project uses the following dependencies:

- React: 18.2.0
- React Router DOM: 6.11.1
- Bootstrap: 5.2.3

These dependencies are automatically installed when running `npm install`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to submit a pull request.

## License

This project is licensed under the MIT License.
