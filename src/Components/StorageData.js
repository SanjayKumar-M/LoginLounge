const StorageData = (data) =>{
    localStorage.setItem('tokenID',data)

}
export const getStorageData = () =>{
    return localStorage.getItem('tokenID')
}

export default StorageData