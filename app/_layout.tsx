import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from '../src/constants/theme'
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function RootLayout() {
  useFrameworkReady();
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar style="light" backgroundColor="#2D6135" />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: '#2D6135',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="programs/[id]" options={{ title: 'Chi tiết chương trình' }} />
          <Stack.Screen name="news/[id]" options={{ title: 'Tin tức' }} />
          <Stack.Screen name="volunteer/register" options={{ title: 'Đăng ký TNV' }} />
        </Stack>
      </PaperProvider>
    </SafeAreaProvider>
  );
}