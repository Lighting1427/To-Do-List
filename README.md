# To-Do List Application 📜

This is a **To-Do List** application built with **React** and styled using CSS. The app allows users to add, edit, delete, and manage tasks while displaying the current time.

## Features 🚀

1. **Add Tasks**: Add new tasks with optional time reminders.
2. **Edit & Delete Tasks**: Modify or remove existing tasks.
3. **Task Completion**: Mark tasks as completed with a strike-through style.
4. **Time Alerts**: Alerts the user when the task time matches the current time.
5. **Real-Time Clock**: Displays the current time in HH:MM:SS format.

## Project Structure 📁

```plaintext
src/
├── App.jsx               # Main application component
├── components/
│   ├── Header.jsx        # Application header
│   ├── Task_Input.jsx    # Input field to add tasks
│   ├── Task_Item.jsx     # Display and manage tasks
│   ├── Timer.jsx         # Real-time clock display
│   ├── Header.css        # Styles for Header
│   ├── Task_Input.css    # Styles for Task_Input
│   ├── Task_Item.css     # Styles for Task_Item
│   └── Timer.css         # Styles for Timer (if needed)
└── App.css               # Global styles
```

## Installation 🛠️

Follow these steps to get the project up and running:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### 2. Install Dependencies
Ensure that **Node.js** and **npm** are installed. Then, run:
```bash
npm install
```

### 3. Run the Application
Start the development server:
```bash
npm run dev
```

The application will be accessible at `http://localhost:5173/`.

## Components 🧩

1. **Header**: Displays the title of the app.
2. **Task_Input**:
   - Input field to add new tasks.
   - Add button to submit the task.
3. **Task_Item**:
   - Task list with edit, delete, and checkbox for completion.
   - Task time notification feature.
4. **Timer**: Displays the current time (HH:MM:SS).

## Usage 📝

1. **Add Task**: Enter a task in the input field and click the **Add** button.
2. **Edit Task**: Click the **Edit** button to modify a task.
3. **Delete Task**: Click the **X** button to remove a task.
4. **Mark Complete**: Check the checkbox to mark a task as complete.
5. **Set Time Alerts**: Enter a time for a task (optional). The app will notify you when the task time matches the current time.

## Example Task Input Format
- **Task**: Complete homework
- **Time**: 17:30

## Screenshots 📸

### Task List View
![Task List](example-task-view.png)

### Real-Time Clock
![Timer](example-timer-view.png)

## Technologies Used 🛠️

- **React**: Front-end library for building the UI.
- **Vite**: A fast build tool for modern web projects.
- **CSS**: Styling the components.

## Run Build for Production 📦

```bash
npm run build
```

This will generate a `dist/` folder for production deployment.

---

## Future Improvements 💡

- Add **dark mode** support.
- Include **task categories**.
- Store tasks in **localStorage** or a database.

## License 📄

This project is licensed under the [MIT License](LICENSE).

---

