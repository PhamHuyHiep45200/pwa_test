import request from "@/utils/request";

export const getData = async () => {
  try {
    return await request("http://localhost:5000/data", {
      cache: "no-store"
    })
  } catch (error) {
    return Promise.reject(error)
  }

}

export const postData = async (data: any) => {
  try {
    return await request("http://localhost:5000/post", {
      method: "POST",
      data
    })
  } catch (error) {
    return Promise.reject(error)
  }

}