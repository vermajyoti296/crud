import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path: 'adduser', component:AdduserComponent},
  {path: 'userlist',component:UserlistComponent},
  {path:'edituser', component:EdituserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
