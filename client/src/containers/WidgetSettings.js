import React, {useState} from "react"
import {
  WidgetType, WidgetTypeBox
} from "../styled/Desktop";
import {ChartsSetting} from "../components/ChartsSetting";
import {SqlSetting} from "../components/SqlSetting";

export const WidgetSettings = props => {
  const [step, setStep] = useState(1)
  const [type, setType] = useState('')


  return(
    <>
      {step === 1 &&
        <WidgetTypeBox>
          <WidgetType
            onClick={() => {
              setType('sql')
              setStep(2)
            }}
          >
            SQL
          </WidgetType>

          <WidgetType
            onClick={() => {
              setType('diagram')
              setStep(2)
            }}
          >
            Diagram
          </WidgetType>
          <WidgetType
            onClick={() => {
              setType('map')
              setStep(2)
            }}
          >
            Map
          </WidgetType>
        </WidgetTypeBox>
      }
      {step === 2 &&
        <>
        {type === 'sql' &&
          <>
            <SqlSetting undo={() => setStep(1)} onClose={() => props.onClose()}/>
          </>
        }
        {type === 'diagram' &&
          <ChartsSetting undo={() => setStep(1)} onClose={() => props.onClose()}/>
        }
        {type === 'map' &&
        <p>MAP</p>
        }
      </>
      }
    </>
  )
}