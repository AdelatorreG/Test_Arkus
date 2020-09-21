import { Component, OnInit } from '@angular/core';
import { Observable, Subject, timer, fromEvent, interval } from 'rxjs';
import { repeatWhen, switchMap, takeUntil, first } from 'rxjs/operators';
import { RequestService } from 'src/_common/_services/request.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  counter:number=0;
  Timer = timer(1000)
  achievements: []=null;
  constructor(
    private API: RequestService
  ) {
  }

  ngOnInit() {
    fromEvent(document,'click').pipe(switchMap(()=>
    interval(1000))).subscribe((val)=>
    ( 
      this.counter =val)
      
      )
  }

  getAcheivemnt(wastedTime){
    console.log(wastedTime);
    this.API.reqGET("/achievements?time_gte =" + (wastedTime-10) + "&time_lte=" + (wastedTime)+"&_order=desc")
      .pipe(first())
      .subscribe(res => {
        this.achievements=res;
        
        }
)
      };
  

}
