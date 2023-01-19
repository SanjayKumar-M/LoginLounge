const StorageData = (data) =>{
    localStorage.setItem('idToken',data)

}
export const getStorageData = () =>{
    return localStorage.getItem('idToken')
}

export const removeStorageData = () =>{
    return localStorage.removeItem('idToken')
}
export default StorageData