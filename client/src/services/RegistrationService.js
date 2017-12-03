/**
 * Created by artemkopytko on 12/3/17.
 */

import Api from '@/services/Api'

export default {
  createUser(params) {
    return Api().post('register', params)
  }
}
