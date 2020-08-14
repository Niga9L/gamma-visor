import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const ChartsWidget = props => {
  const options = props.data
  return(
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}