# Frontend Developer Challenge for 6sense Technologies

## Project Overview
This project is a job assessment challenge for the Frontend Developer position at 6sense Technologies. The objective is to build a dynamic form using React, styled with Tailwind CSS and DaisyUI plugins.

## Features
- Dynamic form creation with input fields and select boxes.
- Live preview of form state that updates dynamically.
- Static display of submitted form state using a table.
- Add and delete functionality for form fields.
- Input validation to ensure all fields are filled before submission.
- Error messages for empty fields.
- Functionalities implemented using React hooks (useState) and array methods (map, filter).

## 🔗 Live Demo  
Check out the live version here: [Live Link](https://frontend-challenge-nine-chi.vercel.app/)

## Technologies Used
- **React**: For building the interactive user interface.
- **Tailwind CSS**: For styling the form and table.
- **DaisyUI**: For enhanced component styling and utility.

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd frontend-developer-challenge
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

The application will run locally on [http://localhost:3000](http://localhost:3000).

## How to Use
1. **Dynamic Form Creation**: Add new input fields and select boxes using the "+ Add Field" button.
2. **Input Validation**: Fill in all fields to ensure successful submission.
3. **Delete Fields**: Remove any unwanted input-select pair using the delete button.
4. **Form Submission**: Submit the form to see the final state displayed in a static table.
5. **Live Preview**: Observe dynamic updates to the form state below the form.

## Functionality Details
- **Hooks Used**:
  - `useState` is used to manage the form state and validation errors.
- **Methods Used**:
  - `map` is used to iterate over the form fields to display and dynamically update them.
  - `filter` is used to delete specific fields from the state.


## Future Improvements
- Implement additional hooks like `useReducer` or `useContext` for more complex state management.
- Add form submission to a backend API.
- Improve user experience with animations and transitions.

---
**Developed By:** Mohammad Mushfiq Us Saleheen

