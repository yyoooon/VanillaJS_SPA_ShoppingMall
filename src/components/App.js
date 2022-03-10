import Component from './Component.js'
import {pushRouter, replaceRouter, popStateRouter} from '../routes/router.js'
import route from '../routes/routes.js'

export default class App extends Component {
    setInitRouter(target) {
        route(target);
        pushRouter(() => {
          route(target);
        });
        replaceRouter(() => {
          route(target);
        });
        popStateRouter(() => {
          route(target);
        });
      }
    
      mounted() {
        this.setInitRouter(this.$target);
      }
}
