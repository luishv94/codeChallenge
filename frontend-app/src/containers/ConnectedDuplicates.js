import Duplicates from '../components/Duplicates'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ duplicates: state.duplicates });

export const ConnectedDuplicates = connect(
  mapStateToProps
)(Duplicates);

export default ConnectedDuplicates