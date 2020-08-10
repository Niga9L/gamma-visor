import React from "react";
import {Rnd} from "react-rnd";
import {RnDHeader, RnDIcon, RnDropMenu, RnDTitle, RnDTools} from "../styled/Desktop";
import {DesktopLists} from "./DesktopLists";
import {changePosition, changeSize, changeZIndex, deleteWidget} from "../redux/actions";
import {useDispatch} from "react-redux";

const {useState} = require("react");

export const ResDrag = props => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  return (
    <Rnd
      onClick={() => dispatch(changeZIndex(props.widget.widgetId))}
      default={{
        x: props.widget.x,
        y: props.widget.y,
        width: props.widget.width,
        height: props.widget.height,
      }}
      onDragStop={(e, d) => {
        const newPosition = {x: d.x, y: d.y}
        dispatch(changePosition(props.widget.widgetId, newPosition))
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        const newSize = {width: ref.style.width, height: ref.style.height}
        dispatch(changeSize(props.widget.widgetId, newSize, position))
      }}
      bounds='.ResContainer'
      style={{
        boxShadow: '0 2px 3px 2px rgba(0, 0, 0, .06)',
        background: '#fff',
        zIndex: props.widget.zIndex
      }}
    >
      <RnDHeader>
        <RnDTitle>Активность сенсоров</RnDTitle>
        <RnDTools>
          <RnDropMenu>
            <RnDIcon className="material-icons" onClick={() => setOpen(true)} style={{fontSize: '22px'}}>swap_horiz</RnDIcon>
            {open && (
              <DesktopLists widgetId={props.widget.widgetId} onClose={() => setOpen(false)}/>
            )}
          </RnDropMenu>
          <RnDIcon className="material-icons" style={{fontSize: '16px'}}>build</RnDIcon>
          <RnDIcon className="material-icons">cached</RnDIcon>
          <RnDIcon className="material-icons" style={{fontSize: '16px'}}>open_in_full</RnDIcon>
          <RnDIcon
            className="material-icons"
            style={{fontSize: '20px'}}
            onClick={() => {
              const confirm = window.confirm('Вы точно хотите удалить виджет?')
              if (confirm) {
                dispatch(deleteWidget(props.widget.widgetId))
              }
            }}
          >
            close
          </RnDIcon>
        </RnDTools>
      </RnDHeader>
      {props.children}
    </Rnd>
  )
}