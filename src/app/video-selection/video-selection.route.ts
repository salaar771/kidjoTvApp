import { Route } from '@angular/router';
import { VideoSelectionComponent } from './video-selection.component';

export const VideoSelectionRoutes: Route[] = [
    {
        path: 'video/:id/:url/:color',
        component: VideoSelectionComponent,
    },
];