import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchActivity } from '../actions';

const Activity = props => {
    useEffect(() => {
        props.fetchActivity()
    }, [])

    return (
    <div className='spacex-res'>
      {props.isLoading && (<strong style={{fontSize: '10rem'}}>loading . . . </strong>)}
      {props.activity && !props.isLoading && 
      <div>
          <h3>{props.activity.mission_name}</h3>
          <p><i className="api-keys">Flight Number: </i>{props.activity.flight_number}</p>
          <p><i className="api-keys">Launch Date: </i>{props.activity.launch_date_utc}</p>
          <p><i className="api-keys">Rocket: </i>{props.activity.rocket.rocket_name}</p>
          <p><i className="api-keys">Launch Site: </i>{props.activity.launch_site.site_name_long}</p>
          <p>{props.activity.launch_success ? 'The launch was successful.' : 'The launch was unsuccessful.'}</p>

          <div
            className="video"
            >
            <iframe
                src={`https://www.youtube.com/embed/${props.activity.links.youtube_id}`}
                frameBorder="0"
            />
         </div>  
         <p>{props.activity.details}</p>        
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
