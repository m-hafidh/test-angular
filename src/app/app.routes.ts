import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [];
{
    path:'httpclient'
    loadChildren:()=>import('./pages/application/example-items/items.module')
    .then(mod=>mod.ItemsModule)
}
