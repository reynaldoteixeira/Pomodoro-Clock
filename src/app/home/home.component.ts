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
  interval 

  start(){

    this.interval = setInterval(()=>{
      if(this.workSeconds == 0){
        this.workMinutes = this.workMinutes - 1
        this.workSeconds = 59
      }

      this.workSeconds = this.workSeconds - 1
    },1000)
  }

  pause(){
    clearInterval(this.interval)
  }

}
