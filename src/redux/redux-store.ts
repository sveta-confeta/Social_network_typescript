import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reduser";
import {dialogsReducer} from "./gialogs-reduser";
import {friendsReducer} from "./friends-reduser";

let reducers=combineReducers({//сюда поместим все редьюсеры
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    friendData:friendsReducer
});

export let store=createStore(reducers);//закомбаненный редьюссеры отдаем стору

export type AppStateType = ReturnType<typeof reducers>
export type DispatchType = typeof store.dispatch

export type StoreType = typeof  store
//@ts-ignore
window.store=store;

 //теперь его импортируем в других файлах