User Dashboard Application



This project is a React application that fetches a list of users using GraphQL. The application includes features like pagination, error handling, client-side sorting, and state management with Redux. Basic unit tests are provided for components, and the project has been deployed to vercel.

SetUp Instructions:

npx create-react-app <app name> --template redux-typescript , 
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 , 
npx tailwindcss-cli@latest init , 
npm install @testing-library/react @testing-library/jest-dom jest , 
npm install react-toastify , 
npm install @types/react-toastify , 



Usage:

    Search: Use the search bar at the top to filter users by name.
    Sort: Click on the select button by the right side of the screen to sort the user list by company.
    Pagination: Use the pagination controls to navigate through different pages of users.
    User Detail View: Click on a user to view their detailed information in a side modal.
    



Decisions Made During Development.

    Client-Side Pagination and Sorting: Due to limitations with GraphZero, I was unable to implement server-side pagination and sorting. These features are instead handled on the client side. Ideally, with a more capable GraphQL server, these operations would be managed on the server to optimize performance.
    State Management with Redux: Redux was chosen for state management due to its scalability and efficiency in managing global application state, especially as the application grows in complexity.
    Testing: Basic unit tests are provided, focusing on the key components of the application.


Thought Process
1. Project Setup and Requirements

The goal was to create a user-friendly dashboard application using React and GraphQL. The key features include displaying a list of users, implementing search and sort functionalities, adding pagination, and providing a detailed view of each user. Here's how I approached these requirements:

2. Planning and Design

Component Breakdown:

    App Component: The root component that renders the main layout.
    Customers Component: Responsible for displaying the design that shows the side bar that consists of various text like settings,customers etc, and also the first page of the website.
    Modal Component: Shows detailed information about a selected user.
    Table Component: Shows the list of users and has the sorting, searching and pagination functionality.

UI/UX Design:

    Simplicity: Focused on a clean and intuitive UI to ensure a good user experience.
    Styling: Chose Tailwind CSS for its utility-first approach, which allows for rapid development and consistent styling.
    

3. GraphQL Integration

Data Fetching:

    Defined GraphQL queries to fetch the necessary data for the user list and user details using GraphQl Zero.

Pagination:

    Implemented pagination from the client-side due to failure from GraphQl Zero.

Handling Loading and Errors:

    Incorporated loading spinners and error messages to enhance user experience and handle various states gracefully using toastify.

4. Search and Sorting

Search Functionality:

    Implemented a search bar that filters the user list based on name. The search logic was handled on the client-side for simplicity and performance.

Sorting:

    Provided sorting options by company. The sorting logic was applied directly to the data fetched from the GraphQL API, ensuring that users receive sorted data efficiently.

5. User Detail View

Design Considerations:

    Used a modalto display detailed information about a user. This approach keeps the user experience smooth by not navigating away from the current view.

Implementation:

    Displayed additional user details such as address and company information, ensuring the detailed view provides comprehensive information.

6. Testing and Quality Assurance

Testing Strategy:

    Wrote unit tests for critical components to ensure their functionality and reliability. Used Jest and React Testing Library for testing.

Code Quality:

    Followed best practices for code organization and style. Ensured that the code is clean, well-documented, and adheres to coding standards.

7. Deployment

Deployment:

    Deployed the application using Vercel for its simplicity and ease of use. Configured deployment scripts and settings to streamline the process.
    
