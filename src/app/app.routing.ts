import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }  from './about/about.component';
import { FeaturedComponent }  from './featured/featured.component';
import { VideosComponent }  from './videos/videos.component';

const appRoutes: Routes = [
  { path: '', component: FeaturedComponent },
  { path: 'about', component: AboutComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'videos', component: VideosComponent }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
