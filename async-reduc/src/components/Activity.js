import React from 'react';
import { connect } from 'react-redux';

import { fetchActivity } from '../actions';

const Activity = props => {
    console.log('props.ACTIVITY:', props.activity);
  return (
    <div>
      <button onClick={props.fetchActivity}>Get Activity</button>
      {!props.activity && !props.isLoading && (
        <h2>Go ahead a fetch a new activity!</h2>
      )}
      {props.isLoading && (<p>loading...</p>)}
      {props.activity && !props.isLoading && 
      <div>

          <h3>{props.activity.mission_name}</h3>
          <p><i>Flight Number: </i>{props.activity.flight_number}</p>
          <p><i>Launch Date: </i>{props.activity.launch_date_utc}</p>
          <p><i>Rocket: </i>{props.activity.rocket.rocket_name}</p>
          <p><i style={{fontSize: "1.5rem"}}>Launch Site: </i>{props.activity.launch_site.site_name_long}</p>
          <p>{props.activity.launch_success ? 'The launch was successful.' : 'The launch was unsuccessful.'}</p>
          <p>{props.activity.details}</p>
          <div
            className="video"
            style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
            }}
            >
            <iframe
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
                }}
                src={`https://www.youtube.com/embed/${props.activity.links.youtube_id}`}
                frameBorder="0"
            />
         </div>          
      </div>}
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
