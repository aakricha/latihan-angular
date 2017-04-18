import { AppModule } from './app.module';
import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
import { ContainerComponent } from './container.component';
import { AboutComponent } from './about.component';
import { CustomerComponent } from './customer.component';

const routes:Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'customer',
        component: CustomerComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '*',
        redirectTo: '/',
        pathMatch: 'full'
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }