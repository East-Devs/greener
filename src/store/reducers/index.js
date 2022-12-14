import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import dashboardReducer from './dashboardReducer';
import exploreReducer from './exploreReducer';

const persistConfig = {
	key: 'freshtrack',
	storage,
	blacklist: ['auth.loading'],
};

const rootReducer = combineReducers({
	dashboard: dashboardReducer,
	explore: exploreReducer,
});

export default persistReducer(persistConfig, rootReducer);
