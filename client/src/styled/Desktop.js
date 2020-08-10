import styled from "styled-components";

export const ResizerBox = styled.div`
  margin: 10px 10px 10px 6px;
  ${() => `min-height: calc(100vh - 140px);`}
`

export const DashboardBox = styled.div`
  position: relative;
`

export const AddWidgetButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #2db3fc;
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 15px;
  right: 30px;
  
  & i {
    font-size: 25px;
    color: #fff;
  }
  
  :hover {
  background: #07a5fb;
  }
`

export const RnDHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
`

export const RnDTitle = styled.h2`
  text-transform: uppercase;
  color: rgb(105, 105, 101);
  font-weight: 500;
  font-size: 17px;
  
`

export const RnDTools = styled.div`
  display: flex;
  align-items: center;
`

export const RnDIcon = styled.i`
  cursor: pointer;
  font-size: 18px;
  color: #afafaf;
  margin-right: 3px;
  
  :hover {
  color: #07a5fb;
  }
`

export const ListDesktop = styled.ul`
  list-style: none;
`

export const DesktopListsBox = styled.div`
  position: absolute;
  right: 0;
  background: #fff;
  width: 250px;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, .06);
`

export const DesktopList = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  
  :hover {
    background-color: #eee;
  }
`

export const RnDropMenu = styled.div`
  position: relative;
`