import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './editAndUpdate/edit/edit.component';
import { FakeapiHtmlComponent } from './fakeApi/fakeapi-html/fakeapi-html.component';
import { HomeComponent } from './home-pages/home/home.component';
import { LoginComponent } from './registration/login/login.component';
import { SingupComponent } from './registration/singup/singup.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fakeapi', component: FakeapiHtmlComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'singup', component: SingupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
