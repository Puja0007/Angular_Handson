import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TestDirectiveDirective } from '../Directive/test-directive.directive';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit,AfterViewInit {
  Name:string="Puja";
  show:boolean= false;
  @ViewChild('heading') heading!: ElementRef;
  @ViewChild(TestDirectiveDirective) myDir!:TestDirectiveDirective
  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    console.log(this.heading);
  }
  changeValue() {
 this.show = !this.show;
  }
  changeBgColor(color:string){
    this.myDir.changeBg(color);
  }
}
