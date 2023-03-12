import { Routes } from '@angular/router';
import { AppLayoutMainComponent } from './layout/layout-main/layout-main.component';
import { AppLayoutMainInComponent } from './layout-in/layout-main-in/layout-main-in.component';

export const ROUTES: Routes = [
  {
    path: 'in',
    component: AppLayoutMainInComponent,
    children: [
      {
        path: 'activity-list',
        loadChildren: () =>
          import('./view/main/activity-list/activity-list.module').then(
            (x) => x.ActivityListModule
          ),
        outlet: 'firtschildren',
      },
      {
        path: 'activity-detail',
        loadChildren: () =>
          import('./view/main/activity-detail/activity-detail.module').then(
            (x) => x.ActivityDetailModule
          ),
        outlet: 'secondchildren',
      },
      {
        path: 'alarm-list',
        loadChildren: () =>
          import('./view/main/alarm-list/alarm-list.module').then(
            (x) => x.AlarmListModule
          ),
        outlet: 'firtschildren',
      },
      {
        path: 'alarm-detail',
        loadChildren: () =>
          import('./view/main/alarm-detail/alarm-detail.module').then(
            (x) => x.AlarmDetailModule
          ),
        outlet: 'secondchildren',
      },
      {
        path: 'alarm-order',
        loadChildren: () =>
          import('./view/main/alarm-order/alarm-order.module').then(
            (x) => x.AlarmOrderModule
          ),
        outlet: 'secondchildren',
      },
    ],
  },
  {
    path: '',
    component: AppLayoutMainComponent,
    children: [

            {
        path: 'login',
        loadChildren: () =>
          import('./view/main/singin/singin.module').then(
            (x) => x.SinginModule
          ),
        outlet: 'secondchildren',
      },
     {
        path: 'signup',
        loadChildren: () =>
          import('./view/main/singup/singup.module').then(
            (x) => x.SingupModule
          ),
        outlet: 'secondchildren',
      },
    ],
  },

  { path: '**', redirectTo: '' },
];
