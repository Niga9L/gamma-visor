import {
  ADD_DESKTOP, ADD_WIDGET,
  CHANGE_DESKTOP,
  CHANGE_NAME, CHANGE_POSITION, CHANGE_SIZE, CHANGE_ZINDEX,
  DELETE_DESKTOP, DELETE_WIDGET,
  SHOW_CHANGE_NAME,
  SORTABLE,
  SWAP_DESKTOP
} from "./types";
import {getRandomId} from "../utils/utils";

export function addDesktop() {
  const payload = {
    desktopId: getRandomId(20),
    name: 'Новый рабочий стол'
  }
  return {
    type: ADD_DESKTOP,
    payload
  }
}

export function sortable(newState) {
  return {
    type: SORTABLE,
    newState
  }
}

export function changeDesktop(id) {
  return {
    type: CHANGE_DESKTOP,
    id
  }
}

export function isChangeName() {
  return {
    type: SHOW_CHANGE_NAME
  }
}

export function changeDesktopName(id, name) {
  return {
    type: CHANGE_NAME,
    id, name
  }
}

export function deleteDesktop(id) {
  return {
    type: DELETE_DESKTOP,
    id
  }
}

export function swapDesktop(widgetId, desktopId) {
  return {
    type: SWAP_DESKTOP,
    widgetId, desktopId
  }
}

export function addWidget(desktopId) {
  const newWidget = {
    widgetId: getRandomId(100),
    desktopPosition: desktopId,
    width: 650,
    height: 380,
    x: 100,
    y: 50,
    zIndex: 102
  }
  return {
    type: ADD_WIDGET,
    newWidget
  }
}

export function deleteWidget(widgetId) {
  return {
    type: DELETE_WIDGET,
    widgetId
  }
}

export function changeZIndex(widgetId) {
  return {
    type: CHANGE_ZINDEX,
    widgetId
  }
}

export function changePosition(widgetId, position) {
  return {
   type: CHANGE_POSITION,
   position, widgetId
  }
}

export function changeSize(widgetId, size, position) {
  changePosition(widgetId, position)
  return {
    type: CHANGE_SIZE,
    widgetId, size
  }

}
