import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppStaticPageComponent } from './static-page.component';

const routes: Routes = [
  {
    path: 'static-page',
    component: AppStaticPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [AppStaticPageComponent],
  exports: [RouterModule]
})
export class AppRoutingModule {}
