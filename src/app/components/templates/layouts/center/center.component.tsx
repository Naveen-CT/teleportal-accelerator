import React from 'react';
import StyledCenterWrapper from './center.component.styled';
import {ICenterWrapper} from './model/center.interface';

const CenterWrapper: React.FunctionComponent<ICenterWrapper> = ({
  children,
  ...allProps
}: ICenterWrapper) => <StyledCenterWrapper {...allProps} />;

export default CenterWrapper;
