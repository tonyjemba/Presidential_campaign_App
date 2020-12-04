import React from 'react';
import LargeScreen from './LargeScreen';
import MediumScreen from './MediumScreen';
import SmallScreen from './SmallScreen';
import PhoneScreen from './PhoneScreen';
import Media from 'react-media';
import {Large,medium,smaller,small} from '../universal/ScreenSize';


const Main = () => (
  <div className="w-100">
    <Media
      queries={{ Large: Large, medium: medium, smaller: smaller, small: small }}
    >
      {(matches) => (
        <div>

          <div>
            {matches.Large && <LargeScreen />}
            {matches.medium && <MediumScreen />}
            {matches.small && <SmallScreen />}
            {matches.smaller && <PhoneScreen />}
          </div>
        </div>
      )}
    </Media>
  </div>
);

export default Main;