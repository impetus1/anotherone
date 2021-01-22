import React from 'react';
// Intro
import Intro from './components/docs/pages/intro/intro';
import About from './components/docs/pages/intro/about';
// Examples
import Privacy from './components/docs/pages/legal/privacy';
import TOU from './components/docs/pages/legal/TOU';
// API Referece
import Exceptions from './components/docs/pages/reference/exceptions';
/*// Others
import Contribute from './components/docs/pages/others/Bleh';
import Github from './components/docs/pages/others/Butthub';*/

const menu = {
  title: 'Florida Free Appliance Pickup',
  description: 'Find appliance people near you! (Coming soon)',
  homeLink: '/',
  DefiantLink: '/Defiant/intro',
  github: {
    user: 'impetus1',
    repository: '',
  },
  sections: [
    {
      title: 'Intro',
      icon: 'fa fa-home',
      links: [
        {
          href: '/Defiant/intro',
          title: 'Intro',
          component: <Intro />,
        },
        {
          href: '/Defiant/about',
          title: 'About',
          component: <About />,
        },
      ],
    },
    {
      title: 'Legal',
      icon: 'fa fa-file',
      links: [
        {
          href: '/Defiant/privacy',
          title: 'Privacy',
          component: <Privacy />,
        },
        {
          href: '/Defiant/terms-of-use',
          title: 'Terms of Use',
          component: <TOU />,
        },
      ],
    },
    {
      title: 'Exeptions',
      icon: 'fa fa-dolly',
      links: [
        {
          href: '/Defiant/exceptions',
          title: 'Charges',
          component: <Exceptions />,
        },
      ],
    },
    /*{
      title: 'Others',
      icon: 'fa fa-th',
      links: [
        {
          href: '/docs/bleh',
          title: 'tbd',
          component: <Bleh />,
        },
        {
          href: '/docs/butthub',
          title: 'butthub Page',
          component: <Butthub />,
        },
      ],
    },*/
  ],
};

export default menu;
