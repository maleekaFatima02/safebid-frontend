import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import TableChartIcon from '@mui/icons-material/TableChart';

export const routesList = [
    {itemName: 'Home', icon : <DashboardIcon  /> , role : ['customer'], link : '/homepage'},
    {itemName: 'All Bids', icon : <TableChartIcon  />, role : ['customer'], link : '/MyBids'},
    {itemName: 'Purchases', icon : <ShoppingCartIcon  />, role : ['customer'], link : '/MyPurchases'},
    {itemName: 'Reviews', icon : <SupervisedUserCircleIcon  />, role : ['seller' , 'customer'], link : '/CustomerReview'},
    {itemName: 'Add Product', icon : <TableChartIcon  />, role : ['seller'], link : '/AddProduct'},
    {itemName: 'View Inventory', icon : <ShoppingCartIcon  />, role : ['seller'], link : '/ViewInventory'}
];
