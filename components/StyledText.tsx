import { Text, TextProps } from './Themed';

export default function MonoText(props: TextProps) {
  const { style } = props;
  return <Text style={[style, { fontFamily: 'space-mono' }]} />;
}
