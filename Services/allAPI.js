import { commonAPI } from "./commonApi";
import { serverURL } from "./server_url";

// Add a Video
export const uploadVideoApi = async (video) => {
    return await commonAPI("POST", `${serverURL}/allVideos`, video)
}

// Get All Video
export const getAllUploadedVideoApi = async () => {
    return await commonAPI("GET", `${serverURL}/allVideos`, "")
}

// Get A video by id
export const getAVideoApi = async (id) => {
    return await commonAPI("GET", `${serverURL}/allVideos/${id}`, "")
}

// Delete Video
export const deleteAVideoApi = async (id) => {
    return await commonAPI("DELETE", `${serverURL}/allVideos/${id}`, {})
}

// Add History
export const addVideoHistoryApi = async (video) => {
    return await commonAPI("POST", `${serverURL}/history`, video)
}

// Get History
export const getVideoHistoryApi = async () => {
    return await commonAPI("GET", `${serverURL}/history`, '')
}

// Delete History
export const deleteVideoHistoryApi = async (id) => {
    return await commonAPI("DELETE", `${serverURL}/history/${id}`, {})
}

// add Video Category
export const addVideoCategoryApi = async (category) => {
    return await commonAPI("POST", `${serverURL}/category`, category)
}

// get Video Category
export const getVideoCategoryApi = async () => {
    return await commonAPI("GET", `${serverURL}/category`, '')
}

// Delete Video Category
export const deleteVideoCategoryApi = async (id) => {
    return await commonAPI("DELETE", `${serverURL}/category/${id}`, {})
}

// Update Category
export const updateCategoryApi = async (id,categoryDetails) => {
    return await commonAPI("PUT", `${serverURL}/category/${id}`,categoryDetails )
}