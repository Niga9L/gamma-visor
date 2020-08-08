import React from "react";
import {TabBox, TabIcon, TabName} from "../styled/Dashboards";

export const Tab = props => {
  if (props.active) {
    return (
      <TabBox active>
        <TabName active onDoubleClick={props.onClickHandler}>{props.item.name}</TabName>
        <TabIcon className="material-icons">close</TabIcon>
      </TabBox>
    )
  } else {
    return (
      <TabBox onClick={() => props.onClickHandler(props.item.desktopId)}>
        <TabName>{props.item.name}</TabName>
        <TabIcon className="material-icons">close</TabIcon>
      </TabBox>
    )
  }

}