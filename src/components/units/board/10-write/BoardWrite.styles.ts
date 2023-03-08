import styled from '@emotion/styled';

export const RedInput = styled.input`
  border-color: red;
`;

interface IProps {
  rrr: string;
  qqq: string;
  zzz: boolean;
}
export const BlueButton = styled.button`
  font-size: ${(props: IProps) => props.rrr};
  background-color: ${(props: IProps) => (props.zzz ? 'yellow' : 'default')};
`;
