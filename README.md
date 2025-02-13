# To-Do App with MERN Stack

This is a simple To-Do application built using the MERN stack (MongoDB, Express, React, Node.js). It provides user authentication, note management, and CRUD operations created by Nitin Dabas.
## Deployed
- Backend deployed on render for Free - https://todos-iiun.onrender.com
- Frontend deployed on vercel - https://todos-eight-ebon.vercel.app/

## Note
###  free instance of Render Service i.e backend part will spin down with inactivity after 15 minutes, which can delay requests by 50 seconds or more. So Kindly wait, it will work.
## Features
- User Registration & Authentication (with JWT)
- Add, Update, Delete, and Fetch Notes
- Middleware protection for private routes

## Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nitin562/Todos.git
   cd Todos
   ```

2. Install server dependencies:
   ```bash
   cd Backened
   npm install
   ```

3. Run the server:
   ```bash
   node index.js
   ```

## API Endpoints

### User Authentication

#### 1. Register User
**POST** `/api/auth/createUser`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
**Responses:**
- Success: `{ "Success": 1, "token": "jwt_token" }`
- Failure: `{ "Success": 0, "error": "error_message" }`

#### 2. Login User
**POST** `/api/auth/login`
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
**Responses:**
- Success: `{ "Success": 1, "username": "John Doe", "token": "jwt_token" }`
- Failure: `{ "Success": 0, "error": { "email": "Invalid" } }`

#### 3. Fetch User Details
**POST** `/api/auth/fetchClient`
- Requires authentication.

**Headers:**
```json
{
  "Authorization": "Bearer jwt_token"
}
```

**Response:**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

### Notes Management

#### 1. Get All Notes
**GET** `/api/notes/getNotes`
- Requires authentication.

**Headers:**
```json
{
  "Authorization": "Bearer jwt_token"
}
```
**Response:**
```json
{
  "Success": 1,
  "Notes": [
    {
      "title": "Sample Note",
      "desc": "This is a sample note",
      "tag": "general"
    }
  ]
}
```

#### 2. Add a Note
**POST** `/api/notes/addnote`

**Headers:**
```json
{
  "Authorization": "Bearer jwt_token"
}
```
**Body:**
```json
{
  "title": "New Note",
  "desc": "This is a new note",
  "tag": "work",
  "date": "2025-02-13"
}
```
**Response:**
```json
{
  "Success": 1,
  "note": {
    "title": "New Note",
    "desc": "This is a new note"
  }
}
```

#### 3. Update a Note
**PUT** `/api/notes/updatenote/:id`

**Headers:**
```json
{
  "Authorization": "Bearer jwt_token"
}
```
**Body:**
```json
{
  "title": "Updated Note",
  "desc": "This is an updated note"
}
```
**Response:**
```json
{
  "Success": 1,
  "note": {
    "title": "Updated Note",
    "desc": "This is an updated note"
  }
}
```

#### 4. Delete a Note
**DELETE** `/api/notes/deletenote/:id`

**Headers:**
```json
{
  "Authorization": "Bearer jwt_token"
}
```
**Response:**
```json
{
  "Success": 1,
  "msg": "Note has been deleted"
}
```

#### 5. Delete All Notes
**DELETE** `/api/notes/deleteAll`

**Headers:**
```json
{
  "Authorization": "Bearer jwt_token"
}
```
**Response:**
```json
{
  "Success": 1,
  "msg": "All notes deleted"
}
```

## Project Structure
```bash
backend/
  ├── models/
  │   ├── Userschema.js
  │   └── NotesSchema.js
  ├── middleware/
  │   └── fetchdata.js
  ├── routes/
  │   ├── auth.js
  │   └── notes.js
  ├── db.js
  └── index.js
```

## Security Considerations
- Use strong JWT secret keys in production.
- Sanitize inputs to avoid injection attacks.
- Use HTTPS in production environments.

## Future Improvements
- Add React frontend for user-friendly interactions.
- Implement advanced features like task prioritization.

## License
MIT License.


