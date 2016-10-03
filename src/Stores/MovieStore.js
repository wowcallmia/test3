import AppDispatcher from '../AppDispatcher'
import { EventEmitter } from 'events';
import uuid from 'uuid'


let _shows = [];


class MovieStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_SHOW':


      _shows= [],
      action.payload.showInfo.map(show => {

        _shows.push({

            name: show.show.name,
            id: show.show.id

          })})





            console.log('_shows', _shows)
        this.emit('CHANGE');
        break;

      }
    })
  }
  startListening(cb){
      this.on('CHANGE', cb);
  }
  stopListening(cb){
    this.removeListener('CHANGE', cb)
  }

  getShows() {
    return _shows;
  }





}



export default new MovieStore();
