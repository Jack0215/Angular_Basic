import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyPipe } from './my.pipe';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyPipe
  ],
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
