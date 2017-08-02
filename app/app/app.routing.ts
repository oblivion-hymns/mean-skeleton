import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './../home/home.component';

const ROUTES: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent }
];

export const routing = RouterModule.forRoot(ROUTES);
