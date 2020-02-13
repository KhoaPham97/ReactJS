import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'

const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: IconDashboard,
    id:'parent-0',
  },
  {
    name: 'Orders',
    link: '/orders',
    Icon: IconShoppingCart,
    id:'parent-1',

  },
  {
    name: 'Customers',
    link: '/customers',
    Icon: IconPeople,
    id:'parent-2',
  },
  {
    name: 'Reports',
    link: '/reports',
    Icon: IconBarChart,
    id:'parent-3',

    items: [
      {
        name: 'Level 2',
        id:'children-0#parent-3',

      },

    ],
  },
  {
    name: 'Nested Pages',
    Icon: IconLibraryBooks,
    id:'parent-4',

    items: [
      {
        name: 'Level 2',
        id:'children-0#parent-4',
      },
 
    ],
  },
]
export default appMenuItems;