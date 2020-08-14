import React, {useState} from "react";
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
import {
  ButtonsMenu,
  ChangeTextTarget,
  ChartBox,
  ChartSetting,
  PreviewChart,
  WidgetSettingButton
} from "../styled/Desktop";
import Select from "react-select";
import {ChangeText} from "./ChangeText";
import {useDispatch, useSelector} from "react-redux";
import {addWidget} from "../redux/actions";

export const ChartsSetting = props => {
  const [selectedOption, setSelectedOption] = useState({ value: null, label: 'Выбирите из списка' })
  const [yName, setYName] = useState('единицы измерения')
  const [openYName, setOpenYName] = useState(false)
  const [openChangeHeader, setOpenChangeHeader] = useState(false)
  const [headerName, setHeaderName] = useState(selectedOption.label)
  const currentDesktop = useSelector(state => state.desktop.currentDesktop)
  const dispatch = useDispatch()
  const {value} = {"error":null,"value":{"title":"Количество КИ(КА) по приоритетам по каждому сенсору, подключенному к РЦМ (на одной гистограмме)","xAxis":{"categories":["Sensor-1003","Sensor-1022","Sensor-1029","Sensor-11111"]},"series":[{"name":"Низкая","data":[{"y":2,"sid":1003,"relevanceId":1},{"y":1,"sid":1022,"relevanceId":1},{"y":1,"sid":1029,"relevanceId":1},{"y":1,"sid":11111,"relevanceId":1}]},{"name":"Средняя","data":[{"y":null,"sid":1003,"relevanceId":2},{"y":1,"sid":1022,"relevanceId":2},{"y":null,"sid":1029,"relevanceId":2},{"y":null,"sid":11111,"relevanceId":2}]},{"name":"Высокая","data":[{"y":1,"sid":1003,"relevanceId":3},{"y":1,"sid":1022,"relevanceId":3},{"y":1,"sid":1029,"relevanceId":3},{"y":null,"sid":11111,"relevanceId":3}]}]}}
  const data = value

  const options = {
    title: {
      text: '',
      width: 500
    },

    xAxis: {
      categories: data.xAxis.categories,
      labels: {
        rotation: 90
      }
    },
    yAxis: {
      title: {
        text: 'Единицы измерения'.toUpperCase()
      }
    },

    series: data.series,
    chart: {
      type: 'column'
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true
        }
      }
    },
  }

  const select = [
    { value: null, label: 'Выбирите из списка' },
    { value: 1, label: '10 наиболее активных атакующих по РЦМ за час' },
    { value: 2, label: '10 наиболее активных атакующих по РЦМ за день' },
    { value: 3, label: '10 наиболее активных атакующих по РЦМ за неделю' },
    { value: 4, label: '10 наиболее активно атакуемых контролируемых РЦМ объектов за час' },
    { value: 5, label: '10 наиболее активно атакуемых контролируемых РЦМ объектов за день' },
    { value: 6, label: '10 наиболее активно атакуемых контролируемых РЦМ объектов за неделю' },
    { value: 7, label: '10 наиболее часто встречающихся по РЦМ КИ(КА) за час' },
    { value: 8, label: '10 наиболее часто встречающихся по РЦМ КИ(КА) за день' },
    { value: 9, label: '10 наиболее часто встречающихся по РЦМ КИ(КА) за неделю' },
    { value: 10, label: 'Количество КИ по приоритетам по контролируемым информационным ресурсам в целом' },
    { value: 11, label: 'Количество КА по приоритетам по контролируемым информационным ресурсам в целом' },
    { value: 12, label: 'Количество СИБ по приоритетам по контролируемым информационным ресурсам в целом' },
    { value: 13, label: 'Количество КИ(КА) по приоритетам по каждому сенсору, подключенному к РЦМ (на одной гистограмме)' },
    { value: 14, label: 'Общее количество КИ(КА) по каждому сенсору, подключенному к РЦМ (на одной гистограмме)' },
  ];

  const onSaveHandler = () => {
    console.log(selectedOption.value)
    if (selectedOption.value) {
      dispatch(addWidget(currentDesktop, 'chart', headerName, yName))
      props.onClose()
    }
  }


  return (
    <>
      <ChartBox>
        <ChartSetting>
          <ul>
            <li>Входные данные</li>
          </ul>
          <h2>Укажите, что вы хотите построить</h2>
          <Select
            placeholder={'Выбирете из списка'}
            value={selectedOption}
            onChange={v => {
              setSelectedOption(v)
              setHeaderName(v.label)
            }}
            options={select}
          />

          {selectedOption.value &&
            <>
              <ChangeTextTarget>
                <p>Заголовок <span onClick={() => setOpenChangeHeader(true)}>{headerName}</span></p>
                {openChangeHeader &&
                <ChangeText
                  position={{top: '-100%', left: '10%'}}
                  onClose={() => setOpenChangeHeader(false)}
                  value={headerName}
                  onDone={v => setHeaderName(v)}
                />
                }
              </ChangeTextTarget>
              <h2>Ось Y</h2>
              <ChangeTextTarget>
                <p style={{paddingTop: 0}}>Подпись <span onClick={() => setOpenYName(true)}>{yName}</span></p>
                {openYName &&
                  <ChangeText
                    position={{
                      top: '-55px',
                      left: '40px'
                    }}
                    onClose={() => setOpenYName(false)}
                    value={yName}
                    onDone={v => setYName(v)}
                  />
                }
              </ChangeTextTarget>
            </>
          }
        </ChartSetting>
        <PreviewChart>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </PreviewChart>
      </ChartBox>
      <ButtonsMenu>
        <WidgetSettingButton
          className="material-icons"
          onClick={() => onSaveHandler()}
        >
          save_alt
        </WidgetSettingButton>
        <WidgetSettingButton
          color={'#FF8500'}
          className="material-icons"
          onClick={() => props.undo()}
        >
          undo
        </WidgetSettingButton>
      </ButtonsMenu>
    </>
  )
}