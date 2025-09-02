import { Stack } from 'expo-router';

export default function ListStackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'List',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="detail"
        options={{
          title: 'Detail',
          headerShown: true,
        }}
      />
    </Stack>
  );
}



