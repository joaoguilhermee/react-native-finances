import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { TranscationType } from '../../global/types';

interface TypeProps {
  type: TranscationType;
}
export const Container = styled.View<TypeProps>`
  background: ${({ theme, type }) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 22px 18px ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.title};
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;
  ${({ type }) =>
    type === 'expense' &&
    css`
      color: ${({ theme }) => theme.colors.attetion};
    `};
  ${({ type }) =>
    type === 'earning' &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `};
  ${({ type }) =>
    type === 'total' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `};
`;
export const Footer = styled.View``;
export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  margin-top: 30px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;
export const Description = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text};
`;
