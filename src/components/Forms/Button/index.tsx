import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Title } from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  onPress: () => void;
}
export const Button = ({ title, onPress, ...props }: ButtonProps) => {
  return (
    <Container onPress={onPress} {...props}>
      <Title>{title}</Title>
    </Container>
  );
};
