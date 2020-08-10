import React from "react";
import {AddWidgetButton} from "../styled/Desktop";
import {useDispatch, useSelector} from "react-redux";
import {addWidget} from "../redux/actions";

export const AddWidget = () => {
  const currentDesktop = useSelector(state => state.desktop.currentDesktop)
  const dispatch = useDispatch()

  return (
    <AddWidgetButton onClick={() => dispatch(addWidget(currentDesktop))}>
      <i className="material-icons">add</i>
    </AddWidgetButton>
  )
}