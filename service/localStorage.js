export function getDateFromBackend(){
    let data = localStorage.getItem("tasks") || '[]'
    return JSON.parse(data)
}
export function setDataToBackend(data){
    localStorage.setItem('tasks',JSON.stringify([...data]))
    return 
}