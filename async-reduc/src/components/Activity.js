import React from 'react';
import { connect } from 'react-redux';

import { fetchActivity } from '../actions';

const Activity = props => {
  return (
    <div>
      <button onClick={props.fetchActivity}>Get Activity</button>
      {!props.activity && !props.isLoading && (
        <h2>Go ahead a fetch a new activity!</h2>
      )}
      {props.isLoading && (<p>loading...</p>
      )}
      {props.activity && !props.isLoading && <h2>{props.activity.activity}</h2>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    activity: state.activity,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchActivity }
)(Activity);
