import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const DEFAULT_VALUE = Number(23);

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class BehaviorSubjectComponent {
  
  inputValue =0;

  // The value setted on the behaviorSubject is the value by default 
  // valueSubject$ is an observable that emits numbers
  valueSubject$ = new BehaviorSubject<number>(DEFAULT_VALUE);

  ngOnInit(){
    // Subscription to the observable, this function works when an event is emitted
    this.valueSubject$.subscribe(
      (value)=>{
        if (value>20){
          console.log("bigger");
        }else{
          console.log(`Lower`);
        }
      }
    )
  }

  //Emit an event every time the value is changed by pressing the button
  setValue(){
    this.valueSubject$.next(this.inputValue);
  }

  //Every time the input changes, the inputValue variable is updated
  setInputValue(event:Event){
    const input = (event.target as HTMLInputElement).value;
    this.inputValue = Number(input);

  }

  

}
