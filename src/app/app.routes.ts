import { Routes } from '@angular/router';

import { SettingsRoutes } from './settings/index';
import { VideoSelectionRoutes } from './video-selection/index';
import { FavoritesRoutes } from './favorites/index';
import { HomeRoutes } from './home/index';

export const routes: Routes = [
    ...SettingsRoutes,
    ...VideoSelectionRoutes,
    ...FavoritesRoutes,
    ...HomeRoutes,
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
]