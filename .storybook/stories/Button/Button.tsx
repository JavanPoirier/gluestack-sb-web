import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Button, ButtonText } from '../../../components/ui/button'

export type MyButtonProps = {
  onPress?: () => void;
  text: string;
};

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <Button className='h-80'>
      <ButtonText>Test</ButtonText>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'purple',
    borderRadius: 8,
  },
  text: { color: 'white' },
});
