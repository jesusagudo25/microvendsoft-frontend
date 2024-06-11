import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'sales',
    path: '/dashboard/sales',
    icon: icon('ic_cart'),
  },
  {
    title: 'reports',
    path: '/dashboard/reports',
    icon: icon('ic_blog'),
    },
  {
    title: 'management',
    path: '/dashboard/management',
    icon: icon('ic_user'),
  },
];

export default navConfig;
