## Overview
Develop a responsive task management application using React that empowers users to efficiently create, organize, and track their tasks. The application should feature user authentication via Firebase, allowing users to sign in with Google. Users should be able to create, edit, and delete tasks, categorize them (e.g., work, personal), and set due dates. Additionally, implement drag-and-drop functionality for task organization, sorting options based on due dates, and a board/list view to enhance user experience.

The application should prioritize an intuitive user interface, ensuring that users can easily navigate through their tasks and access essential features. Utilize React Query for effective data fetching. Utilize Zustand for local/ui state management, and ensure the design is responsive, adapting seamlessly to various screen sizes. This project will demonstrate your ability to build a comprehensive task management solution that combines functionality with an engaging user experience.

## Technical Requirements  
Use React with TypeScript.
Utilize React Query  for data fetching and state management.
Utilize Zustand for local/ui state management

## User Authentication  
Use Firebase Authentication for user authentication.
Implement Google Sign-In.
Allow users to manage their profiles (view and edit profile information).

## Task Management  
Users can create, edit, delete tasks.
Tasks can be categorized (e.g., work, personal) and tagged for better organization.
Users can set due dates for tasks.
Implement drag-and-drop functionality to rearrange tasks.
Sorting tasks based on due dates (ascending/descending).
Enable batch actions on tasks (e.g., delete multiple tasks, mark multiple tasks as complete).
Task History and Activity Log
Track changes made to tasks (creation, edits, deletions) and display an activity log for each task.
Enable file attachment in tasks for additional context.
Implement a file upload feature in the task creation/editing form and display attached files in the task detail view.
Implement filtering by tags, category, and date range.
Enable search functionality by task title.
Allow users to switch between a board view (Kanban-style) and a list view for their tasks.
Ensure the application is fully responsive, adapting to various screen sizes (mobile, tablet, desktop) with a mobile-first design approach.

## Tach Stack 
<ul>
<li><b>Front-end Framework</b> -	React (TypeScript)</li>
<li><b>Data fetching</b>	- React Query - React Query	Fetching, caching, mutations</li>
<li><b>UI/local state</b> -	Zustand - View mode, filters, modals</li>
<li><b>Authentication</b> -	Firebase Auth (Google Sign-In)</li>
<li><b>Database</b>	- Firebase Firestore</li>
<li><b>File Storage</b>	- Firebase Storage</li>
<li><b>Drag & Drop</b>	- @dnd-kit/core or react-beautiful-dnd</li>
<li><b>Styling</b>	- Tailwind CSS / Material UI</li>
<li><b>Routing</b>	- React Router v6</li>
<li><b>Form Handling</b>	- React Hook Form + Zod</li>
</ul>
 

## Quick setup
1. `git clone <repo>` or create a new project and paste the files from the scaffold.
2. `cd react-task-manager`
3. `npm install`  
4. Create a Firebase project and enable Firestore, Firebase Authentication (Google), and Storage.
5. Add a `.env.local` file with your Firebase config