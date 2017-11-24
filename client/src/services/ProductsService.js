/**
 * Created by artemkopytko on 11/24/17.
 */
import Api from '@/services/Api'

export default {
  fetchProducts () {
    return Api().get('products')
  }
}
