import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { OthersProfileComponent } from './others-profile/others-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'chat', canActivate: [AuthGuard], component: ChatComponent },
  { path: 'settings', canActivate: [AuthGuard], component: SettingsComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  {
    path: 'otherprofile',
    canActivate: [AuthGuard],
    component: OthersProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
