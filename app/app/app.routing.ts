import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent }
];

export const routing = RouterModule.forRoot(ROUTES);
