import type { FC } from 'react';

export interface MyComponentProps {
  label: string;
}

export const MyComponent: FC<MyComponentProps> = ({ label }) => {
  return <span>{label}</span>;
};
