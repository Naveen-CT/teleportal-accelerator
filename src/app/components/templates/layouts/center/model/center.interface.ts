import {EGlobalSizes} from 'models/enums/styled.enum';

export interface IStyledCenterWrapper {
  andText?: boolean;
  className?: string;
  gutters?: EGlobalSizes;
  intrinsic?: boolean;
  maxWidth?: string;
}

export interface ICenterWrapper extends IStyledCenterWrapper {
  children: string;
}
