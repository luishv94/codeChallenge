import PeopleData from '../components/PeopleData'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ people: state.people });

export const ConnectedPeopleData = connect(
  mapStateToProps
)(PeopleData);

export default ConnectedPeopleData