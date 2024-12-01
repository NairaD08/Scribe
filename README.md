# Scribe

## Description

Scribe is a simple and intuitive application designed to help users create, save, and manage their notes efficiently. Whether you're jotting down ideas, making to-do lists, or keeping track of important information, Note Taker provides a user-friendly interface to organize your thoughts seamlessly.

## User Story

As a user, I want to be able to create and manage my notes easily so that I can keep track of important information and ideas without hassle.

## Acceptance Criteria

- **Landing Page**: When you open the Note Taker, you are presented with a landing page that includes a link to the notes page.
- **Notes Page**: Clicking on the link takes you to a page where existing notes are listed in the left-hand column, and empty fields are available to enter a new note title and text in the right-hand column.
- **Save and Clear Buttons**: After entering a new note title and text, a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page.
- **Saving Notes**: Clicking the "Save Note" button saves the new note, which then appears in the left-hand column with existing notes, and the buttons in the navigation disappear.
- **Viewing Existing Notes**: Clicking on an existing note in the left-hand column displays that note's content in the right-hand column, along with a "New Note" button in the navigation.
- **Creating New Notes**: Clicking the "New Note" button presents empty fields to enter a new note title and text in the right-hand column, and the button disappears.

## Features

- **User-Friendly Interface**: Simple and clean design for easy navigation and note management.
- **Note Creation**: Quickly create new notes with a title and text.
- **Note Management**: View, save, and delete notes effortlessly.
- **Responsive Design**: Works seamlessly on various devices and screen sizes.

## Technologies Used

- **HTML**: For the structure of the web application.
- **CSS**: For styling and layout.
- **JavaScript**: For interactivity and dynamic content.
- **Node.js**: Serves as the runtime environment for the application.
- **Express.js**: Framework for building web applications and APIs.
- **JSON**: For storing notes data in a simple and accessible format.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, etc.)
- Internet connection (for accessing online features)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NairaD08/scribe.git
   ```

2. Navigate to the project directory:

   ```bash
   cd scribe
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to access the Scribe application.

## Usage

1. Open the landing page and click on the link to the notes page.
2. Enter a new note title and text in the provided fields.
3. Click "Save Note" to save your note, or "Clear Form" to reset the fields.
4. Click on any existing note to view its content.
5. Use the "New Note" button to create additional notes.

## Acknowledgments

- Inspired by the need for a simple note-taking solution.
- Thanks to the open-source community for their invaluable resources and support.

## Planned Updates

- **Search Functionality**: Allow users to search for specific notes.
- **Categorization**: Enable users to categorize notes for better organization.
- **Collaboration Features**: Allow users to share notes with others.
