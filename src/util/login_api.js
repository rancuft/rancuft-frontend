import API from '../../api/index.js'

export const login = async (id, password) => {
  try{
  await API.post(
    "/user",
    
    JSON.stringify(id)
  )} catch {
    console.log("400 BAD REQUEST");
  }
}