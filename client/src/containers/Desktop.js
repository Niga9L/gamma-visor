import React from "react";
import {ResizerBox} from "../styled/Desktop";
import {Widget} from "./Widget";
import {useSelector} from "react-redux";
import {SqlWidget} from "../components/SqlWidget";
import {ChartsWidget} from "../components/ChartsWidget";

export const Desktop = () => {
  const widgetState = useSelector(state => state.desktop.widgetState)
  const currentDesktop = useSelector(state => state.desktop.currentDesktop)

  return (
    <ResizerBox className='ResContainer'>
      {widgetState
        .filter(node => node.desktopPosition === currentDesktop)
        .map(widget => {
          switch (widget.type) {
            case 'sql': {
              return (
                <Widget key={widget.widgetId} widget={widget}>
                  <SqlWidget data={widget.data}/>
                </Widget>
              )
            }
            case 'chart': {
              return (
                <Widget key={widget.widgetId} widget={widget}>
                  <ChartsWidget data={widget.data}/>
                </Widget>
              )
            }
            default: return <Widget key={widget.widgetId} widget={widget}/>
          }

      })}
    </ResizerBox>
  )
}