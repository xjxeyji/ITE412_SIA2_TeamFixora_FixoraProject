## High-Level System Overview

### Major Modules/Subsystems

1. **User Account Management**
   - Handles user registration and login.
   - Manages basic user account information.

2. **Task Management**
   - Allows users to add, edit, and delete tasks.
   - Stores task information in the task database.

3. **Task Status Management**
   - Allows users to update the status of their tasks.
   - Helps users identify completed and pending tasks.

4. **Task Viewing Module**
   - Displays the user's task list.
   - Retrieves task information from the task database.

### External Systems/Interfaces

The Simple To-Do List system uses a database to store user and task information. The system interface allows users to interact with the application through its task management and account features.

### Data Flow Summary

The user interacts with the Simple To-Do List system by logging in, adding tasks, editing tasks, deleting tasks, and updating task statuses. User account information is stored in the User Database, while task information is stored in the Task Database. When the user requests to view their tasks, the system retrieves the stored task information and displays it to the user.