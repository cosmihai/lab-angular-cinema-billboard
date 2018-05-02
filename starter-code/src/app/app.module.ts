import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieInfoService } from './services/movie-info.service';
import { MovieListComponentComponent } from './components/movie-list-component/movie-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [MovieInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
