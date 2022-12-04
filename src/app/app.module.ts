import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home-pages/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BodyProductsComponent } from './bodyShopProducts/body-products/body-products.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { FakeapiHtmlComponent } from './fakeApi/fakeapi-html/fakeapi-html.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './editAndUpdate/edit/edit.component';
import { OrderModule } from 'ngx-order-pipe';
import { RegistrationModule } from './registration/registration.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodyProductsComponent,
    SearchPipe,
    FakeapiHtmlComponent,
    EditComponent,
  ],
  imports: [
    // create extra module
    RegistrationModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrderModule,
    // material
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
