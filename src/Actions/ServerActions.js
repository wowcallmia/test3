import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveShow(showInfo) {
    AppDispatcher.dispatch ({
      type: 'RECEIVE_SHOW' ,
      payload: {showInfo}
    })
  },

}
export default ServerActions
