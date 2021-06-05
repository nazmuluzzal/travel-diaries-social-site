export const loggedUser = (payload)=>{
  return {
    type: 'USER',
    payload,
  
  } 
}
export const clearUser = ()=>{
  return {
    type: 'CLEAR'
  } 
}
export const updateData = (payload)=>{
  return {
    type: 'UPDATE',
    payload,
  
  } 
}
export const updatePic = (payload)=>{
  return {
    type: 'UPDATEPIC',
    payload,
  
  } 
}