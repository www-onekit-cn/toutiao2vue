import ui from './ui'
import pages from './pages'
import js from './js'
import OnekitApp from './OnekitApp'
import OnekitBehavior from './OnekitBehavior'
import OnekitComponent from './OnekitComponent'
import OnekitPage from './OnekitPage'
import tt from './tt'
export default {
  install(Vue) {
    Vue.use(ui)
  },
  pages,
  js,
  OnekitApp,
  OnekitBehavior,
  OnekitComponent,
  OnekitPage,
  tt
}
