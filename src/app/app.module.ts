import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { MatGridListModule } from '@angular/material/grid-list';
import 'hammerjs';


import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';

import { TableOverviewExample } from './table-overview-example/table-overview-example';
import { LoginModule } from './main/login/login.module';
import { CookieService } from 'ngx-cookie-service';
import { UserManagementModule } from './main/user-management/user-management.module';
import { AuthGuard } from './guards/auth.guard';
import { LoginService } from './services/login.service';
import { AppRoutingModule } from './app-routing.module';
import { InterceptorService } from './services/interceptor-service.service';
import { HomeComponent } from './main/home/home.component';



const appRoutes: Routes = [
    { path: '**', redirectTo: 'login' }    
];

@NgModule({
    declarations: [
        AppComponent,
        TableOverviewExample,
        HomeComponent,
        
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,
        MatGridListModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        LoginModule,
        UserManagementModule,
        AppRoutingModule


    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        HttpClientModule,
        CookieService,
        AuthGuard,
        LoginService,{
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
          }
    ]
})
export class AppModule {
}
