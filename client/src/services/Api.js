/**
 * Created by artemkopytko on 11/24/17.
 */
import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://localhost:8081`
  })
}
