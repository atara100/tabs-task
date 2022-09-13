import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DisplayCardsComponent } from './display-cards/display-cards.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { LikesComponent } from './likes/likes.component';





@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    AboutComponent,
    SettingsComponent,
    HomePageComponent,
    DisplayCardsComponent,
    MainComponent,
    CardComponent,
    LikesComponent
     

  ],
  imports: [
 BrowserModule,
 HttpClientModule,
 FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
