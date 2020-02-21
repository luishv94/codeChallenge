import React from 'react'
import styled from 'styled-components'

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  margin-top: 30px;
`

const Box = styled.div`
  display: grid;
  box-shadow: 0 0 6px 0 rgba(58,58,58,0.24);
  width: auto;
  height: auto;
  border-top: 6px solid #4a90e2;
  grid-template: 30% 1fr / 1fr;
`

const Row = styled.div`
  display: block;
  box-shadow: 0 0 6px 0 rgba(58,58,58,0.24);
  grid-template: 30% 1fr / 1fr;
`

const ListBox = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
  p {
    font-size: 20px;
  }
`

const CountsList = ({counts}) => (
    <ListBox>
      <h3 style={{textAlign: 'center'}}>
        Frequency count
      </h3>
      <table>
          <thead>
              <tr>
                  <td><b>Character</b></td>
                  <td><b>Frequency</b></td>
              </tr>
          </thead>
          <tbody>
            {
                Object.entries(counts).map((c, i) => <CountItem count={c} key={i} />)
            }
          </tbody>
      </table>
    </ListBox>
  )

let CountItem = ({count}) => (
    <tr>
        <td>
            {count[0]}
        </td>
        <td>
            {count[1]}
        </td>
    </tr>
  )

let Counts = ({counts}) => (
    <Box>
      <CountsList counts={counts}/>
    </Box>
  )

export default Counts
  