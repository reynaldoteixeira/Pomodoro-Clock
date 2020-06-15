import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  
  }

  workMinutes = 25
  workSeconds = 0 

  restMinutes = 5
  restSeconds = 0

  interval 

  workSecondsString = "0" + this.workSeconds.toString()
  workMinutesString = this.workMinutes.toString()

  restMinutesString = "0" + this.restMinutes.toString()
  restSecondsString = "0" + this.restSeconds.toString()

  start(){

    this.interval = setInterval(()=>{

      if(this.workSeconds == 0){
        this.workMinutes = this.workMinutes - 1
        this.workSeconds = 59
      }
    
      this.workSeconds = this.workSeconds - 1

      

      if(this.workMinutes == 0 && this.workSeconds == 0){
        this.workMinutes = 25
        this.workSeconds = 0
        this.pause()
        this.rest()
        alert("Work Time Out!")
      }

      
      this.workMinutesString =  this.workMinutes.toString()
      this.workSecondsString = this.workSeconds.toString()
      
      if(this.workMinutes < 10){
        this.workMinutesString = "0" + this.workMinutes.toString()
        
      }

      if(this.workSeconds < 10){
        this.workSecondsString = "0" + this.workSeconds.toString()
      }
      
    },1000)
  }


  rest(){
    this.interval = setInterval(()=>{

      if(this.restSeconds == 0){
        this.restMinutes = this.restMinutes - 1
        this.restSeconds = 59
      }

      this.restSeconds = this.restSeconds - 1

      if(this.restMinutes == 0 && this.restSeconds == 0){
        this.restMinutes = 5
        this.restSeconds = 0
        this.pause()
        this.start()
        alert("Rest Time Out!")
      }

      this.restMinutesString =  this.restMinutes.toString()
      this.restSecondsString =  this.restSeconds.toString()
      
      if(this.restMinutes < 10){
        this.restMinutesString = "0" + this.restMinutes.toString()
      }

      if(this.restSeconds < 10){
        this.restSecondsString = "0" + this.restSeconds.toString()
      }

    },1000)
  }

  pause(){
    clearInterval(this.interval)
  }
}
