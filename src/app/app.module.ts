import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { PlushToysComponent } from './plush-toys/plush-toys.component';
import { PlushieComponent } from './plushie/plushie.component';
import { NewPlushieComponent } from './new-plushie/new-plushie.component';
import { InventoryComponent } from './inventory/inventory.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    PlushToysComponent,
    PlushieComponent,
    NewPlushieComponent,
    InventoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
