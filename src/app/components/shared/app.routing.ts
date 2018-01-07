import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../../components/home/home.component'

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent},
        ])
    ],
    exports: [
        RouterModule
    ],
    declarations: [

    ]
})
export class AppRoutingModule {}