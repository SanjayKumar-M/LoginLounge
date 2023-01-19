const StorageData = (data) =>{
    localStorage.setItem('idToken',data)

}
export const getStorageData = () =>{
    return localStorage.getItem('idToken')
}

export default StorageData