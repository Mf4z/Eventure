### Bootstrap Guide for Eventure

---

#### **1. Prerequisites**

Before starting the project, ensure that the following prerequisites are installed and properly configured on your system:

- **Java Development Kit (JDK) 8 or later:** Required for running the Spring Boot backend.
- **Node.js (version 12 or later):** Required for running the Node.js backend and React.js frontend.
- **MongoDB:** Required for data storage.
- **Wildfly 10.1.0.Final 2:** Application server for running API management with Apiman.
- **Apiman:** API Management platform.

#### **2. Setting Up the Environment**

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-repo/eventure.git
   cd eventure
   ```

2. **Install Node.js Dependencies:**

   Navigate to the frontend and backend directories and install the required dependencies:

   ```bash
   # For frontend
   cd frontend
   npm install

   # For Node.js backend
   cd ../backend-node
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in both the `frontend` and `backend-node` directories with the following contents:

   ```env
   # For frontend
   REACT_APP_NODE_API_URL=http://localhost:5000/api
   REACT_APP_SPRING_API_URL=http://localhost:8080/api
   REACT_APP_API_KEY=fcbdb367-bc05-4dc0-948a-bbe5c13ef115

   # For Node.js backend
   MONGODB_URI=mongodb://localhost:27017/eventure
   ```

4. **Set Up MongoDB:**

   Start the MongoDB server using the following command:

   ```bash
   brew services start mongodb-community@4.4
   ```

5. **Set Up Wildfly and Apiman:**

   Navigate to the Wildfly installation directory and run the following command to start the server with Apiman:

   ```bash
   cd wildfly-10.1.0.Final 2/bin
   ./standalone.sh -c standalone-apiman.xml
   ```

6. **Start the Backends:**

   - **Spring Boot Backend:**
     Navigate to the Spring Boot project directory and run:

     ```bash
     mvn spring-boot:run
     ```

   - **Node.js Backend:**
     Navigate to the Node.js backend directory and run:

     ```bash
     npm start
     ```

7. **Start the Frontend:**

   Navigate to the frontend directory and run:

   ```bash
   npm start
   ```

   The frontend will be accessible at `http://localhost:3000`.

#### **3. Running the Application**

1. **Access the Application:**
   - Open your browser and navigate to `http://localhost:3000`.
   - Log in with your credentials or create a new account.

2. **Managing Events and Tasks:**
   - Use the dashboard to create, view, and manage events and tasks.
   - The admin panel allows managing users, events, and other administrative tasks.

#### **4. Troubleshooting**

- **Database Connection Issues:**
  Ensure MongoDB is running and the connection URI in the `.env` file is correct.

- **API Errors:**
  Check the logs in the terminal where the backend servers are running for detailed error messages.

- **Frontend Build Issues:**
  If the frontend fails to compile, ensure all dependencies are installed and the `.env` file is correctly configured.
