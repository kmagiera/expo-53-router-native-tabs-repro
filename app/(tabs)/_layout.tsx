import { Icon, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs blurEffect="regular" backgroundColor="black">
      <NativeTabs.Trigger name="index">
        <Icon
          sf={{ default: 'house', selected: 'house.fill' }}
          drawable="custom_home_drawable"
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger
        name="list"
        options={{ title: 'List', icon: { sf: 'list.bullet' } }}
      />
      <NativeTabs.Trigger
        name="explore"
        options={{
          title: 'Settings',
          icon: { sf: 'gear' },
        }}
      ></NativeTabs.Trigger>
    </NativeTabs>
  );
}
