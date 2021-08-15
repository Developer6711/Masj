import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import { CardComponent } from './components/card/card.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SideNavContainerComponent } from './components/side-nav-container/side-nav-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    CardComponent,
    SideNavComponent,
    SideNavContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
