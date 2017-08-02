import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdButtonModule, MdToolbarModule } from '@angular/material'; //Add additional modules here

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpModule,

		FlexLayoutModule,
		MaterialModule,
		BrowserAnimationsModule,
		MdButtonModule,
		MdToolbarModule,
		routing
	],
	providers: [],

})
export class AppModule {}
