import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MediaService } from './media.service';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
