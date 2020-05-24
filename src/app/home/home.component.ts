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

  workMinutes = 0
  workSeconds = 3 

  restMinutes = 0
  restSeconds = 3

  interval 
  format = false

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
      }
      
    },1000)
  }

  pause(){
    clearInterval(this.interval)
  }
}
