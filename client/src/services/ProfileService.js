/**
 * Created by artemkopytko on 12/3/17.
 */
import Api from '@/services/Api'

export default {
  getUserData () {
    return Api().get('profile/' + params.id)
  },
}
