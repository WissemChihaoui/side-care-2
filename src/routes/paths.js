// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  faqs: '/faqs',
  minimalStore: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    amplify: {
      signIn: `${ROOTS.AUTH}/amplify/sign-in`,
      verify: `${ROOTS.AUTH}/amplify/verify`,
      signUp: `${ROOTS.AUTH}/amplify/sign-up`,
      updatePassword: `${ROOTS.AUTH}/amplify/update-password`,
      resetPassword: `${ROOTS.AUTH}/amplify/reset-password`,
    },
    jwt: {
      signIn: `${ROOTS.AUTH}/jwt/sign-in`,
      signUp: `${ROOTS.AUTH}/jwt/sign-up`,
    },
    firebase: {
      signIn: `${ROOTS.AUTH}/firebase/sign-in`,
      verify: `${ROOTS.AUTH}/firebase/verify`,
      signUp: `${ROOTS.AUTH}/firebase/sign-up`,
      resetPassword: `${ROOTS.AUTH}/firebase/reset-password`,
    },
    auth0: {
      signIn: `${ROOTS.AUTH}/auth0/sign-in`,
    },
    supabase: {
      signIn: `${ROOTS.AUTH}/supabase/sign-in`,
      verify: `${ROOTS.AUTH}/supabase/verify`,
      signUp: `${ROOTS.AUTH}/supabase/sign-up`,
      updatePassword: `${ROOTS.AUTH}/supabase/update-password`,
      resetPassword: `${ROOTS.AUTH}/supabase/reset-password`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    
    employes: {
      root: `${ROOTS.DASHBOARD}/salaries`,
      view: (id) => `${ROOTS.DASHBOARD}/salaries/${id}/view`,
      add: `${ROOTS.DASHBOARD}/salaries/add`,
      reintegrer1: `${ROOTS.DASHBOARD}/salaries/reintegrer-1`,
      reintegrer2: (id) => `${ROOTS.DASHBOARD}/salaries/reintegrer-2/${id}`,
      link: `${ROOTS.DASHBOARD}/salaries/invitation_link`,
      import: `${ROOTS.DASHBOARD}/salaries/importation`,
    },
    equipes: {
      root: `${ROOTS.DASHBOARD}/equipes`,
      org: `${ROOTS.DASHBOARD}/equipes/organigramme`,
      tromb: `${ROOTS.DASHBOARD}/equipes/trombinoscope`,
      view: (id) => `${ROOTS.DASHBOARD}/equipes/${id}/view`
    },
    entreprise: {
      root: `${ROOTS.DASHBOARD}/vos-entreprises`,
      addEntreprise: `${ROOTS.DASHBOARD}/vos-entreprises/add`,
      view: (id)=>`${ROOTS.DASHBOARD}/vos-entreprises/${id}/view`,
      successAddEntreprise: `${ROOTS.DASHBOARD}/vos-entreprises/add/success`,
    },
    conges: {
      root: `${ROOTS.DASHBOARD}/conges-et-absences`,
      add: `${ROOTS.DASHBOARD}/conges-et-absences/new`,
    },
    two: `${ROOTS.DASHBOARD}/two`,
    three: `${ROOTS.DASHBOARD}/three`,
    group: {
      root: `${ROOTS.DASHBOARD}/group`,
      five: `${ROOTS.DASHBOARD}/group/five`,
      six: `${ROOTS.DASHBOARD}/group/six`,
    },
  },
};
