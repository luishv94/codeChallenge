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

const DuplicatesList = ({duplicates}) => (
    <ListBox>
      <h3 style={{textAlign: 'center'}}>
        Possible duplicates
      </h3>
      <table>
          <thead>
              <tr>
                  <td><b>Name</b></td>
                  <td><b>Email</b></td>
                  <td><b>Title</b></td>
              </tr>
          </thead>
          <tbody>
            {
                Object.entries(duplicates).map((d, i) => <DuplicateItem duplicate={d} key={i} />)
            }
          </tbody>
      </table>
    </ListBox>
  )

let DuplicateItem = ({duplicate}) => (
    <tr>
        <td>
            {duplicate[1].name}
        </td>
        <td>
            {duplicate[1].email}
        </td>
        <td>
            {duplicate[1].title}
        </td>
    </tr>
  )

let Duplicates = ({duplicates}) => (
    <Box>
      <DuplicatesList duplicates={duplicates}/>
    </Box>
  )

export default Duplicates
  