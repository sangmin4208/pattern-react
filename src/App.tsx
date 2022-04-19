import styled from "styled-components"
import SplitScreen from "./components/SplitScreen"


const WrapperLeft = styled.div`
  background-color: green;
`
const WrapperRight = styled.div`
  background-color: tomato;
`
const LeftHandComponent = ({ name }: { name: string }) => {
  return <WrapperLeft>
    <h1>Left! {name}</h1>
  </WrapperLeft>
}
const RightHandComponent = ({ message }: { message: string }) => {
  return <WrapperRight>
    <h1>Right! {message}</h1>
  </WrapperRight>
}

function App() {
  return <>
    <SplitScreen rightWeight={3} >
      <LeftHandComponent name="Nacho" />
      <RightHandComponent message="Nacho" />
    </SplitScreen>
  </>
}

export default App
