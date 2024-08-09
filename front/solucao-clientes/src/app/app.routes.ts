import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';

export const routes: Routes =   [
{ path: '', component: HomeComponent },
{ path: 'create-client', component: CreateClientComponent },
{ path: 'list-client', component: ListClientComponent },
{ path: '**', redirectTo: '' }
];;
