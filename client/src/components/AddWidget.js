import React, {useState} from "react";
import {AddWidgetBox, AddWidgetButton} from "../styled/Desktop";
import {WidgetSettings} from "./WidgetSettings";
// import {useDispatch, useSelector} from "react-redux";
// import {addWidget} from "../redux/actions";

export const AddWidget = () => {
  // const currentDesktop = useSelector(state => state.desktop.currentDesktop)
  // const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && <AddWidgetBox>
        <WidgetSettings/>
      </AddWidgetBox>}
      <AddWidgetButton onClick={() => setOpen(!open)}>
        <i className="material-icons">{open ? 'close' : 'add'}</i>
      </AddWidgetButton>
    </>

  )
}