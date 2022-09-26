import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { SecondDivComponent } from './second-div/second-div.component';
import { ThirdDivComponent } from './third-div/third-div.component';
import { FourthDivComponent } from './fourth-div/fourth-div.component';
import { FifthDivComponent } from './fifth-div/fifth-div.component';
import { FooterComponent } from './footer/footer.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecondDivComponent,
    ThirdDivComponent,
    FourthDivComponent,
    FifthDivComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule, //este cara precisa com certeza
    FormsModule, //não sei se precisa deste cara
    ReactiveFormsModule, //não sei se precisa deste cara
    MatIconModule, //próprio do projeto que estou seguindo
    MatButtonModule, //próprio do projeto que estou seguindo
    MatMenuModule //próprio do projeto que estou seguindo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
