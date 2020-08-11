import React, {useState} from "react"
import {
  ButtonsMenu,
  WidgetH2,
  WidgetPreview, WidgetSettingButton, WidgetSQLBox, WidgetSQLCodeBox,
  WidgetType, WidgetTypeBox
} from "../styled/Desktop";
import {PreviewWidget} from "./PreviewWidget";

export const WidgetSettings = () => {
  const [step, setStep] = useState(1)
  const [type, setType] = useState('')
  const [sqlCode, setSQLCode] = useState('')

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
          <WidgetSQLBox>
            <WidgetPreview>
              <WidgetH2>Предпросмотр</WidgetH2>
              <PreviewWidget/>
            </WidgetPreview>

            <WidgetSQLCodeBox>
              <WidgetH2>Предпросмотр</WidgetH2>
              <p>код</p>
              <textarea onChange={event => setSQLCode(event.target.value)}/>
            </WidgetSQLCodeBox>
          </WidgetSQLBox>
        }
        {type === 'diagram' &&
        <p>Diagram</p>
        }
        {type === 'map' &&
        <p>MAP</p>
        }
      </>
      }
      {step === 2 && <ButtonsMenu>
        <WidgetSettingButton className="material-icons">save_alt</WidgetSettingButton>
        <WidgetSettingButton
          color={'#FF8500'}
          className="material-icons"
          onClick={() => setStep(1)}
        >
          undo
        </WidgetSettingButton>
      </ButtonsMenu>}
    </>
  )
}