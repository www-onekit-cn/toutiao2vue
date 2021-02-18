import ui from './ui'
import activity from './pages/activity'
import tabs from './pages/tabs'
import js from './js'
import OnekitApp from './OnekitApp'
import OnekitBehavior from './OnekitBehavior'
import OnekitComponent from './OnekitComponent'
import OnekitPage from './OnekitPage'
import tt from './tt'
export default {
  install(Vue) {
    Vue.use(ui),
    Vue.use(activity),
    Vue.use(tabs)
  },
  js,
  OnekitApp,
  OnekitBehavior,
  OnekitComponent,
  OnekitPage,
  tt
}
