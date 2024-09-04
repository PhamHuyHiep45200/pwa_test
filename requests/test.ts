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