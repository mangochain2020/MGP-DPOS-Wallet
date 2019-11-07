// TODO: These should be uncommented for releases
import PopOut from '../views/PopOut';
import Login from '../views/Login';
import App from '../views/App';
import Assets from '../views/Assets';
import Wallet from '../views/Wallet';
import Account from '../views/Account';
import Items from '../views/Items';
import Transfer from '../views/Transfer';
import Exchange from '../views/Exchange';
import Receive from '../views/Receive';
import Networks from '../views/Networks';
import Contacts from '../views/Contacts';
import Histories from '../views/Histories';
import Settings from '../views/Settings';
import Purchase from '../views/Purchase';

// TODO: These should be commented out for testing.
// const PopOut  = () => import('../views/PopOut');
// const Login = () => import('../views/Login');
// const Apps = () => import('../views/Apps');
// const App = () => import('../views/App');
// const Assets = () => import('../views/Assets');
// const Wallet = () => import('../views/Wallet');
// const Account = () => import('../views/Account');
// const Items = () => import('../views/Items');
// const Transfer = () => import('../views/Transfer');
// const Exchange = () => import('../views/Exchange');
// const Receive = () => import('../views/Receive');
// const Networks = () => import('../views/Networks');
// const Contacts = () => import('../views/Contacts');
// const Identities = () => import('../views/Identities');
// const Locations = () => import('../views/Locations');
// const Histories = () => import('../views/Histories');
// const Settings = () => import('../views/Settings');
// const RIDL = () => import('../views/RIDL');
// const Purchase = () => import('../views/Purchase');



export const RouteNames = {
	POP_OUT:'popout',

	LOGIN:'login',
	HOME:'home',
	WALLET:'wallet',
	ITEMS:'items',
	NETWORKS:'networks',
	ASSETS:'assets',
	TRANSFER:'transfer',
	RECEIVE:'receive',
	EXCHANGE:'exchange',
	CONTACTS:'contacts',
	HISTORIES:'histories',
	SETTINGS:'settings',
	PURCHASE:'purchase',


	APP:'app',
	ACCOUNT:'account',
};

const RouteViews = {
	[RouteNames.LOGIN]:Login,
	[RouteNames.WALLET]:Wallet,
	[RouteNames.ITEMS]:Items,
	[RouteNames.NETWORKS]:Networks,
	[RouteNames.ASSETS]:Assets,
	[RouteNames.TRANSFER]:Transfer,
	[RouteNames.RECEIVE]:Receive,
	[RouteNames.EXCHANGE]:Exchange,
	[RouteNames.CONTACTS]:Contacts,
	[RouteNames.HISTORIES]:Histories,
	[RouteNames.SETTINGS]:Settings,
	[RouteNames.PURCHASE]:Purchase,


	[RouteNames.APP]:App,
	[RouteNames.ACCOUNT]:Account,
	[RouteNames.POP_OUT]:PopOut,
};

const RoutePaths = {
	[RouteNames.HOME]: '/',
	[RouteNames.APP]: '/app/:applink',
	[RouteNames.ACCOUNT]: '/account/:unique',
};

export class Routing {

	static builder(){
		const routeNames = Object.keys(RouteNames).map(key => RouteNames[key]);

		let routesBuilder = {};
		routeNames.map(routeName => {
			routesBuilder[routeName] = {
				path:RoutePaths.hasOwnProperty(routeName) ? RoutePaths[routeName] : `/${routeName}`,
				name:routeName,
				component: RouteViews[routeName]
			}
		});

		return routesBuilder;
	}

	static routes(){
		return Object.keys(Routing.builder())
			.map(routeName => Routing.builder()[routeName]);
	}

	static isRestricted(routeName) {
		return ![
			RouteNames.LOGIN,
			RouteNames.POP_OUT,
			// RouteNames.LOAD_FROM_BACKUP
		].includes(routeName)
	}

	static hasSidebar(routeName){
		return ![
			RouteNames.ONBOARDING,
			RouteNames.POP_OUT,
		].includes(routeName)
	}

}
