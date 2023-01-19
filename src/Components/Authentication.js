import { getStorageData } from "./StorageData"
import { removeStorageData } from "./StorageData"
export const isAuthenticated = () =>{
    return getStorageData () != null ? true : false
}

export const Logout = () =>{
    removeStorageData()

}