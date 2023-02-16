import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { PlushToysComponent } from './plush-toys/plush-toys.component';
import { PlushieComponent } from './plushie/plushie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    PlushToysComponent,
    PlushieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
