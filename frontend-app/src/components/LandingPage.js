import React from 'react'
import styled from 'styled-components'

import { ConnectedFrequencyButton } from '../containers/ConnectedFrequencyButton'
import { ConnectedDuplicatesButton } from '../containers/ConnectedDuplicatesButton'
import { ConnectedPeopleData } from '../containers/ConnectedPeopleData'
import { ConnectedCounts } from '../containers/ConnectedCounts'
import { ConnectedDuplicates } from '../containers/ConnectedDuplicates'

const Page = styled.div`
  display: flex;
  grid-template 46px 1fr / 1fr;
  height: 100%;
  width: 100%;
`;

const FlexBox = styled.div`
  align-items: center;
  justify-content: left;
`;

export const LandingPage = () => (
  <div>
    <ConnectedFrequencyButton />
    <ConnectedDuplicatesButton />
    <Page>
      <FlexBox>
        <ConnectedPeopleData />
      </FlexBox>
      <FlexBox>
        <ConnectedCounts />
      </FlexBox>
      <FlexBox>
        <ConnectedDuplicates />
      </FlexBox>
    </Page>
  </div>
);
