import API from '../API'

const MovieActions = {
  createShow(showInfo) {
    console.log('showInfo', showInfo)
    API.createShow(showInfo);
  },
    remove(id){
      AppDispatcher.dispatch({
        type: 'REMOVE_SHOW',
        payload: {id}
      })
    }
  }





  export default MovieActions
