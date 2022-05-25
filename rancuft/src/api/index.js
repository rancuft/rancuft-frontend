import axios from "axios";

export default axios.create({
  baseURL: 'http://loacalhost:8080',
  headers: {
    Authorization: 'bearer accessKey'
  }
})