import { HTTP } from '../util/http.js'
import { url } from '../util/url.js'

class ClassicModel extends HTTP{
  // constructor(){
  //   super()
  // }

  getLatest(callback){
    this.request({
      url: url.latest,
      success: (data) => {
        callback(data)
      }
    })
  }
}

export {ClassicModel};