import { Routes } from '@angular/router';
import { ArrayOneComponent } from './array-one/array-one.component';
import { ArrayTwoComponent } from './array-two/array-two.component';

export const routes: Routes = [
  { path: 'array-one', component: ArrayOneComponent },
  { path: 'array-two', component: ArrayTwoComponent },
  { path: '', redirectTo: '/array-one', pathMatch: 'full' }
];