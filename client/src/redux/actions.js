import {ADD_DESKTOP, CHANGE_DESKTOP, CHANGE_NAME, SHOW_CHANGE_NAME, SORTABLE} from "./types";
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