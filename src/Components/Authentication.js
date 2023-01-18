import { getStorageData } from "./StorageData"

export const isAuthenticated = () =>{
    return getStorageData () != null ? true : false
}