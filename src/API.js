import {get} from 'axios'
import ServerActions from './Actions/ServerActions'

const API = {
  createShow(showInfo){

    console.log('createShow in API')
    get(`http://api.tvmaze.com/search/shows?q=${showInfo}`)
      .then(res => {
        let {data} = res;

        console.log('data;', data);
        ServerActions.receiveShow(data);
      })
      .catch(console.error)
      // .catch (err => {
      //   console.error(err) // same thing
      }
  }

  export default API
