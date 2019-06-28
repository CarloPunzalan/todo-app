import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemComponent } from './shared/item/item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StateService } from './services/state.service';
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
