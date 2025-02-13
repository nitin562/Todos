const base="https://todos-iiun.onrender.com"
export const links={
login:`${base}/api/auth/login`,
register:`${base}/api/auth/createUser`,
clientAll:`${base}/api/auth/fetchClient`,
AllNotes:`${base}/api/notes/getNotes`,
AddNotes:`${base}/api/notes/addnote`,
updateNote:`${base}/api/notes/updatenote`,
deleteNote:`${base}/api/notes/deletenote`,
deleteAll:`${base}/api/notes/deleteAll`,
}