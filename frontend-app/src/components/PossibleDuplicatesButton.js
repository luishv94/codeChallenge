import React from 'react'
import styled from 'styled-components'
import { fetchDuplicates } from '../actions/AsyncActions'

const NAV_HEIGHT = 46;
const AVATAR_HEIGHT = 40;
const AVATAR_WIDTH = 40;

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-content: center;

  margin: 0px;
  padding 0px;
  height: ${NAV_HEIGHT}px;
  width: 100%;
`;

let NavText = styled.p`
  color: #4a90e2;
  padding-right: 10px;
  padding-left: 10px;
  color: white;
`;

const Badge = styled.div`
  margin: 3px;
  display: flex;
  min-width: 152px;
  align-items: center;
  overflow: hidden;
  border-radius: 7px;
  border 2px solid #4a90e2;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  background-color: #4a90e2;
`;

let SignInBadge = ({dispatch}) => (
  <Badge>
    <a href='#' onClick={() => dispatch(fetchDuplicates())} style={{textDecoration: 'none'}}><NavText>Possible duplicates</NavText></a>
  </Badge>
);

const PossibleDuplicatesButton = ({dispatch}) => (
  <StyledNavBar>
    <SignInBadge dispatch={dispatch} />
  </StyledNavBar>
);

export default PossibleDuplicatesButton
