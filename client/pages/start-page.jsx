import React from 'react';
import AppContext from '../lib/app-context';

export default class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.startWorkoutClick = this.startWorkoutClick.bind(this);
  }

  startWorkoutClick() {
    fetch('/workouts/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(workoutData => {
        window.location.hash = `#workouts?workoutId=${workoutData.workoutId}`;
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
      <div className='start-container'>
        <h1 className='start-text'>Start Workout:</h1>
        <button type="button" className="btn btn-primary exercises-button" onClick={this.startWorkoutClick}>Begin a new workout</button>
      </div>
      </>
    );
  }
}

StartPage.contextType = AppContext;
