import {ComponentMeta} from '@storybook/react';
import {EGlobalSizes} from 'models/enums/styled.enum';
import React from 'react';

import CenterWrapper from './center.component';

export default {
  title: 'Example/Button',
  component: CenterWrapper,
  argTypes: {
    andText: {control: 'boolean'},
    className: {control: 'string'},
    gutters: {control: {type: 'select'}, options: Object.keys(EGlobalSizes)},
    intrinsic: {control: 'boolean'},
    maxWidth: {control: 'bostringolean'}
  }
} as ComponentMeta<typeof CenterWrapper>;

// const Template: ComponentStory<typeof CenterWrapper> = args => <CenterWrapper {...args} />;

export const ByDefault: React.FunctionComponent = () => (
  <CenterWrapper>
    This Box is centered - it has a max width of 70 characters by default
  </CenterWrapper>
);

export const CenteredText = () => (
  <CenterWrapper andText>
    This Box is centered on the page - it has a max width of 70 characters by default. Add the
    &quot;andText&quot; prop to center its text.
  </CenterWrapper>
);

export const WithGutters = () => (
  <CenterWrapper gutters={EGlobalSizes.LARGE}>
    Gutters apply padding to the left and right of the component. Note that they are applied OUTSIDE
    of the max-width of the component - as opposed to the inside as with Boxes, Stacks etc. This
    Center has the exact same default width as the one above.
  </CenterWrapper>
);
