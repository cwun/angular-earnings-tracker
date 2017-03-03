import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
    // 1st Route
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // 2nd Route
    { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule]
})

export class AppRoutingModule {}