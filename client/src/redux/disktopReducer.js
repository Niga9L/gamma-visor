import {ADD_DESKTOP, CHANGE_DESKTOP, CHANGE_NAME, DELETE_DESKTOP, SHOW_CHANGE_NAME, SORTABLE} from "./types";
import {getRandomId} from "../utils/utils";

const initialState = {
  desktopState: [
    {
      desktopId:  new Date().getTime().toString(),
      name: 'Мой рабочий стол'
    },
    {
      desktopId: getRandomId(20),
      name: 'Рабочий стол 2'
    }
  ],
  widgetState: [
    {
      objectId: getRandomId(100),
      desktopPosition: new Date().getTime().toString(),
      width: 650,
      height: 380,
      x: 100,
      y: 250
    },
    {
      objectId: getRandomId(100),
      desktopPosition: new Date().getTime().toString(),
      width: 550,
      height: 300,
      x: 1000,
      y: 150
    }
  ],
  currentDesktop: new Date().getTime().toString(),
  isChangeName: false
}

export const desktopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DESKTOP: {
      return {...state, desktopState: state.desktopState.concat([action.payload]), currentDesktop: action.payload.desktopId}
    }
    case SORTABLE: {
      return {...state, desktopState: action.newState}
    }
    case CHANGE_DESKTOP: {
      return {...state, currentDesktop: action.id}
    }
    case SHOW_CHANGE_NAME: {
      return {...state, isChangeName: !state.isChangeName}
    }
    case CHANGE_NAME: {
      return {...state, desktopState: state.desktopState.map(node => {
        if (node.desktopId === action.id) {
          node.name = action.name
        }
        return node
        })}
    }
    case DELETE_DESKTOP: {
      return {...state, desktopState: state.desktopState.filter(node => node.desktopId !== action.id)}
    }
    default: return state
  }
}