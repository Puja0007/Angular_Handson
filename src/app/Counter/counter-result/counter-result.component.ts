import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-result',
  templateUrl: './counter-result.component.html',
  styleUrls: ['./counter-result.component.css']
})
export class CounterResultComponent implements OnInit {
 counter: number=0;
  constructor(private store:Store<{counter:{counter:number}}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data)=>{
      this.counter= data.counter;
    })
  }

}
