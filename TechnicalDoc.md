### Technical Documentation for Eventure

---

#### **1. Project Overview**
- **Product Name:** Eventure
- **Description:** Eventure is an event management platform designed to streamline the organization of professional events. The platform integrates task management, participant engagement, scheduling, and real-time updates into a user-friendly interface.
- **Key Features:**
  - Interactive Dashboard
  - Efficient Task Management
  - Integrated Scheduling
  - Real-Time Communication
- **Target Users:** Professionals organizing various types of events.

#### **2. Technology Stack**
- **Frontend:**
  - **React.js:** A JavaScript library for building user interfaces, particularly single-page applications.
  - **CSS:** For styling components and maintaining a consistent UI/UX.
- **Backend:**
  - **Java Spring Boot:** For creating RESTful APIs and handling business logic.
  - **Node.js:** For handling authentication, user management, and task management.
- **Database:**
  - **MongoDB:** A NoSQL database used for storing events, tasks, users, and participants.
- **Authentication & Security:**
  - **OpenID Connect:** Used for secure user authentication.
  - **API Management:** API Gateway with API keys for protected endpoints.

#### **3. Global Architecture**
- **Frontend:** The frontend is a React.js application that interacts with backend services through RESTful APIs. It handles rendering the user interface, managing user sessions, and making API requests.
- **Backend:** The backend is split between Java Spring Boot (for event and participant management) and Node.js (for user and task management). MongoDB is used as the database for storing all application data.
- **API Gateway:** An API gateway is used for routing requests to the appropriate backend service. It also handles authentication and API key validation.

#### **4. Key Components**
- **Dashboard:** The central hub for users to view upcoming events, tasks, and notifications.
- **Event Management:** Allows users to create, view, edit, and delete events. Events can have multiple participants and associated tasks.
- **Task Management:** Users can create, assign, and track tasks related to events.
- **Profile Management:** Users can manage their profiles, view past events, and update their information.
- **Admin Panel:** Allows admins to manage users, events, and other administrative tasks.

#### **5. API Endpoints and Responses**

##### **Users API (Node.js Backend)**
- **GET /api/users**
  - **Description:** Fetch all users.
  - **Response Example:**
    ```json
    [
      {
        "_id": "66a8f3e94f3c7f9cfc685352",
        "name": "Marwan Mai",
        "email": "marwan@eventure.com",
        "role": "admin",
        "contact": "+2349091234"
      },
      {
        "_id": "66b90129eeb0c10a4fb020e2",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "role": "user",
        "contact": "+123456789"
      }
    ]
    ```
- **GET /api/users/:userId**
  - **Description:** Fetch a user by ID.
  - **Response Example:**
    ```json
    {
      "_id": "66a8f3e94f3c7f9cfc685352",
      "name": "Marwan Mai",
      "email": "marwan@eventure.com",
      "role": "admin",
      "contact": "+2349091234"
    }
    ```

##### **Tasks API (Node.js Backend)**
- **GET /api/tasks**
  - **Description:** Fetch all tasks.
  - **Response Example:**
    ```json
    [
      {
        "_id": "66a8fecc4f3c7f9cfc685362",
        "title": "Prepare Presentation",
        "description": "Create pitch deck for the presentation",
        "deadline": "2024-07-26",
        "taskStatus": "in progress",
        "assigneeId": "66a8f3e94f3c7f9cfc685352",
        "eventId": "66a8f5324f3c7f9cfc68535a"
      }
    ]
    ```
- **POST /api/tasks**
  - **Description:** Create a new task.
  - **Request Example:**
    ```json
    {
      "title": "Prepare Presentation",
      "description": "Create pitch deck for the presentation",
      "deadline": "2024-07-26",
      "taskStatus": "pending",
      "assigneeId": "66a8f3e94f3c7f9cfc685352",
      "eventId": "66a8f5324f3c7f9cfc68535a"
    }
    ```
  - **Response Example:**
    ```json
    {
      "_id": "66a8fecc4f3c7f9cfc685362",
      "title": "Prepare Presentation",
      "description": "Create pitch deck for the presentation",
      "deadline": "2024-07-26",
      "taskStatus": "pending",
      "assigneeId": "66a8f3e94f3c7f9cfc685352",
      "eventId": "66a8f5324f3c7f9cfc68535a"
    }
    ```

##### **Events API (Spring Boot Backend)**
- **GET /api/events**
  - **Description:** Fetch all events.
  - **Response Example:**
    ```json
    [
      {
        "id": "66a8f5324f3c7f9cfc68535a",
        "eventName": "Action Learning Pitch",
        "eventDate": "2024-07-28",
        "location": "Paris",
        "eventDescription": "7 min presentation on Action Learning Project",
        "organiser": "66a8f3e94f3c7f9cfc685352",
        "participants": [
          {
            "participantId": "66a8f45a4f3c7f9cfc685354"
          }
        ]
      }
    ]
    ```
- **POST /api/events**
  - **Description:** Create a new event.
  - **Request Example:**
    ```json
    {
      "eventName": "Team Meeting",
      "eventDate": "2024-08-20",
      "location": "Main Hall",
      "eventDescription": "Quarterly team meeting",
      "organiser": "66a8f3e94f3c7f9cfc685352",
      "participants": [
        {
          "participantId": "66a8f45a4f3c7f9cfc685354"
        },
        {
          "participantId": "66b8f826f976045bbef6abd5"
        }
      ]
    }
    ```
  - **Response Example:**
    ```json
    {
      "id": "66be4d01b91a1e305de151e7",
      "eventName": "Team Meeting",
      "eventDate": "2024-08-20",
      "location": "Main Hall",
      "eventDescription": "Quarterly team meeting",
      "organiser": "66a8f3e94f3c7f9cfc685352",
      "participants": [
        {
          "participantId": "66a8f45a4f3c7f9cfc685354"
        },
        {
          "participantId": "66b8f826f976045bbef6abd5"
        }
      ]
    }
    ```

##### **Participants API (Spring Boot Backend)**
- **GET /api/participants**
  - **Description:** Fetch all participants.
  - **Response Example:**
    ```json
    [
      {
        "id": "66a8f45a4f3c7f9cfc685354",
        "name": "Omar Issa",
        "email": "omar@eventure.com",
        "contact": ""
      },
      {
        "id": "66b8f826f976045bbef6abd5",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "contact": "+123456789"
      }
    ]
    ```

---
For the Bootstrap Guide : [BootstrapGuide](BootstrapGuide.md)