import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { appReducer } from './store/app-store';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		EffectsModule.forRoot([]),
		StoreModule.forRoot(appReducer),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: false,
			autoPause: true,
			features: {
				pause: false,
				lock: true,
				persist: true,
			},
		}),
		SharedModule,
		UsersModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
