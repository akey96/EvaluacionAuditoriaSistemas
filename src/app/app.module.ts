import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MediaService } from './media.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
