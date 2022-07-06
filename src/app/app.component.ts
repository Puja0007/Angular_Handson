import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ClassStyleComponent } from './class-style/class-style.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'my-handson-project';
  @ViewChild(ClassStyleComponent) childClass!: ClassStyleComponent;
  constructor() { }
  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    console.log(this.childClass);
    
  }
  changeChildProperty(){
    this.childClass.Name="Anirban";
  }
  accessChildMethod(){
    this.childClass.changeValue();
  }
}
