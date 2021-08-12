import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;
  
  
  
  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 60;
       this.message = 'Shuttle in flight.';
      rocketImage.style.bottom = '250px';
      rocketImage.style.left = '120px';
    }
  }

  handleLand(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'Shuttle landed.';
    this.takeOffEnabled = true;
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
  }

  handleMissionAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to end the mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted.';
      this.takeOffEnabled = true;
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px';
    }
  }

  
}

