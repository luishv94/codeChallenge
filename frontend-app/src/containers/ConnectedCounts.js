import Counts from '../components/Counts'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ counts: state.counts });

export const ConnectedCounts = connect(
  mapStateToProps
)(Counts);

export default ConnectedCounts