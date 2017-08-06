import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  getMeds,
  addMed,
  editMed,
  delMed,
  setAlarm,
} from '../core-modules/actions'

import App from '../components/App'

const mapStateToProps = (state) => {
  let medicines = state.medicines.medicinesasd
  return {
    medicines, // current state of my app
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getMeds,
    addMed,
    editMed,
    delMed,
    setAlarm,
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
