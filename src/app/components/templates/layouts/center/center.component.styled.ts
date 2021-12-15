import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {EGlobalSizes} from 'models/enums/styled.enum';

import {IStyledCenterWrapper} from './model/center.interface';

const StyledCenterWrapper = styled.div<IStyledCenterWrapper>(
  ({andText, gutters = EGlobalSizes.NONE, intrinsic = false, maxWidth = EGlobalSizes.MEASURE}) =>
    css([
      {
        boxSizing: 'content-box',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      maxWidth && {maxWidth},
      andText && {textAlign: 'center'},
      intrinsic && {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      gutters && {
        paddingLeft: gutters,
        paddingRight: gutters
      }
    ])
);

export default StyledCenterWrapper;
