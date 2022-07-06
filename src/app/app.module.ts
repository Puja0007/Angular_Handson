import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer} from './Counter/counter.reducer';
import { CounterResultComponent } from './Counter/counter-result/counter-result.component';
import { CounterComponent } from './Counter/counter/counter.component';
import { CounterButtonComponent } from './Counter/counter-button/counter-button.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { TestDirectiveDirective } from './Directive/test-directive.directive';
import { CustompipePipe } from './custompipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CounterResultComponent,
    CounterButtonComponent,
    CounterComponent,
    ClassStyleComponent,
    TestDirectiveDirective,
    CustompipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({counter:counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
