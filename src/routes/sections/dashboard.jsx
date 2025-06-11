import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/dashboard/one'));
const PageTwo = lazy(() => import('src/pages/dashboard/two'));
const PageThree = lazy(() => import('src/pages/dashboard/three'));
const PageFour = lazy(() => import('src/pages/dashboard/four'));
const PageFive = lazy(() => import('src/pages/dashboard/five'));
const PageSix = lazy(() => import('src/pages/dashboard/six'));


const Effectif = lazy(() => import('src/pages/dashboard/employes/index'));
const ViewEffectif = lazy(() => import('src/pages/dashboard/employes/view'));
const AddEffectif = lazy(() => import('src/pages/dashboard/employes/add'));
const Reintegration = lazy(() => import('src/pages/dashboard/employes/reintegration'));
const Reintegration2 = lazy(() => import('src/pages/dashboard/employes/reintegration-2'));
const LinkGen = lazy(() => import('src/pages/dashboard/employes/link'));
const Import = lazy(() => import('src/pages/dashboard/employes/import'));

const Entreprises = lazy(() => import('src/pages/dashboard/entreprises/entreprises'));
const AddEntreprise = lazy(() => import('src/pages/dashboard/entreprises/add'));
const ViewEntreprise = lazy(() => import('src/pages/dashboard/entreprises/view'));
const SuccessAddEntreprise = lazy(() => import('src/pages/dashboard/entreprises/successEntreprise'));


const AddConges = lazy(() => import('src/pages/dashboard/conges/add'));
const Conges = lazy(() => import('src/pages/dashboard/conges/index'));

// ----------------------------------------------------------------------

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { element: <IndexPage />, index: true },
      {
        path: 'salaries',
        children: [
          { element: <Effectif />, index: true},
          { element: <ViewEffectif />, path :':id/view'},
          { element: <AddEffectif />, path :'add'},
          { element: <Reintegration />, path :'reintegrer-1'},
          { element: <Reintegration2 />, path :'reintegrer-2/:id'},
          { element: <LinkGen />, path :'invitation_link'},
          { element: <Import />, path :'importation'},
        ]
      },
      {
        path: 'vos-entreprises',
        children: [
          { element: <Entreprises />, index: true},
          { element: <AddEntreprise />, path: 'add'},
          { element: <ViewEntreprise />, path: ':id/view'},
          { element: <SuccessAddEntreprise />, path: 'add/success'},
        ]
      },
      {
        path: 'conges-et-absences',
        children: [
          { index : true, element: <Conges />},
          { path: 'new', element: <AddConges /> }
        ]
      },
     
     
      { path: 'two', element: <PageTwo /> },
      { path: 'three', element: <PageThree /> },
      {
        path: 'group',
        children: [
          { element: <PageFour />, index: true },
          { path: 'five', element: <PageFive /> },
          { path: 'six', element: <PageSix /> },
        ],
      },
    ],
  },
];
