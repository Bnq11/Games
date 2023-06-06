import axios from 'axios'
import * as URLs from './urls'

export default axios.create({
    baseURL: URLs.BASE_URL,
  })

  export async function addScore(ddata) {
    console.log("9",ddata)

    return await axios({
      method: "post",
      url: URLs.ADD_SCORE,
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
    //   },
      data: ddata
    })
  }

