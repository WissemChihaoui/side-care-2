import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.assetsDir}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
  users: icon('ic-users'),
  support: icon('ic-support'),
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Overview
   */
  {
    subheader: 'Tableau de bord',
    items: [
      { title: 'Tableau de bord', path: paths.dashboard.root, icon: ICONS.dashboard },
      { title: 'SideStore', path: paths.dashboard.root, icon: ICONS.order },
      { 
        title: 'Employés',
        path: paths.dashboard.employes.root, 
        icon: ICONS.users,
        children: [
          { title: 'Entreprises', path: paths.dashboard.entreprise.root},
          { title: 'Effectifs', path: paths.dashboard.employes.root},
        ]
      },
      { 
        title: 'Gestion RH', 
        path: paths.dashboard.three, 
        icon: ICONS.chat,
        children: [
          { title: 'Suivi des démarches RH', path: paths.dashboard.root},
          { title: 'Calendrier', path: paths.dashboard.root},
          { title: 'Entretiens', path: paths.dashboard.root},
          { title: 'Templates de documents', path: paths.dashboard.root},
        ]
      },
      { 
        title: 'Gestion du temps', 
        path: paths.dashboard.conges.root, 
        icon: ICONS.tour,
        children: [
          { title: 'Congés & absences', path: paths.dashboard.conges.root}
        ]
      },
      { 
        title: 'Variables de paie (EVP)', 
        path: paths.dashboard.three, 
        icon: ICONS.analytics,
        children: [
          { title: 'Primes', path: paths.dashboard.root},
          { title: 'Note de frais', path: paths.dashboard.root},
          { title: 'Titres de transport', path: paths.dashboard.root},
          { title: 'Clôture', path: paths.dashboard.root},
        ]
      },
      { 
        title: 'Comptabilité', 
        path: paths.dashboard.three, 
        icon: ICONS.analytics,
        children: [
          { title: 'Tous vos documents', path: paths.dashboard.root},
        ]
      },
    ],
  },
  /**
   * Management
   */
  {
    subheader: 'Mon compte',
    items: [
      { title: 'Paramètres & Intégrations', path: paths.dashboard.group.five, icon: ICONS.parameter },
      // { title: 'Mon compte', path: paths.dashboard.group.five, icon: ICONS.user },
      { title: "Centre d'aide", path: paths.dashboard.group.five, icon :ICONS.support },
    ],
  },
];
