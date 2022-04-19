import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
`
const Pane = styled.div<{ weight: number }>`
  flex: ${props => props.weight};
`

interface SplitScreenProps {
  children: JSX.Element[]
  leftWeight?: number;
  rightWeight?: number;
}

const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }: SplitScreenProps) => {
  const [Left, Right] = children
  return <>
    <Container>
      <Pane weight={leftWeight}>
        {Left}
      </Pane>
      <Pane weight={rightWeight}>
        {Right}
      </Pane>
    </Container>
  </>
}

export default SplitScreen