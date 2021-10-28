import React from 'react';
import { connect } from 'react-redux';
import { showTime } from '../store/actions/timeActions';

class Time extends React.Component {
  render() {
    const { time, showTime } = this.props;
    return (
      <div>
        <button onClick={() => showTime()}>Show Time</button>
        <span> {time} </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  time: state,
});
const mapDispatchToProps = (dispatch) => ({
  showTime: () => dispatch(showTime()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Time);
