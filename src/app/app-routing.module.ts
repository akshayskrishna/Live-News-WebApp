import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "splash",
    pathMatch: "full",
  },
  {
    path: "splash",
    loadChildren: () =>
      import("./splash/splash.module").then((m) => m.SplashPageModule),
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/pin-details/pin-details.module').then(m => m.PinDetailsPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/pin-details/pin-details.module').then(m => m.PinDetailsPageModule)
  },
  {
    path: 'pin',
    loadChildren: () => import('./pages/pin-display/pin-display.module').then(m => m.PinDisplayPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
