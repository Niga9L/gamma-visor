import React from "react";
import {ResizerBox} from "../styled/Desktop";
import {ResDrag} from "../components/ResDrag";
import {useSelector} from "react-redux";

export const Desktop = () => {
  const widgetState = useSelector(state => state.desktop.widgetState)
  const currentDesktop = useSelector(state => state.desktop.currentDesktop)

  return (
    <ResizerBox className='ResContainer'>
      {widgetState
        .filter(node => node.desktopPosition === currentDesktop)
        .map(widget => {
        return (
          <ResDrag key={widget.widgetId} widget={widget}/>
        )
      })}
    </ResizerBox>
  )
}