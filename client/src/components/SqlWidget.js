import React from "react";
import {WidgetContent} from "../styled/Desktop";
import uniqid from "uniqid";

export const SqlWidget = props => {
  const data = props.data

  return(
    <WidgetContent className='widgetContent'>
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((node, idx) => <th key={idx}>{node}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map(node => {
              return (
                <tr key={uniqid()}>
                  {Object.keys(node).map((td) => <td key={uniqid()}>{node[td]}</td>)}
                </tr>
              )
            })}
          </tbody>
        </table>
    </WidgetContent>
  )
}