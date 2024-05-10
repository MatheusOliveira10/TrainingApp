import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { SafeAreaView } from 'react-native-safe-area-context';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  mustBeSafeArea?: boolean;
};

export function ThemedView({ style, lightColor, darkColor, mustBeSafeArea, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  const ViewComponent = mustBeSafeArea ? SafeAreaView : View

  return <ViewComponent style={[{ backgroundColor }, style]} {...otherProps} />;
}
