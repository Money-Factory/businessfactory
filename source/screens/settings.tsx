import React from 'react';
import {
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "../components/NativeBaseIcon";

const Settings: React.FC = () => (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <Heading size="lg">Settings</Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Box
              _web={{
                _text: {
                  fontFamily: "monospace",
                  fontSize: "sm",
                },
              }}
              px={2}
              py={1}
              _dark={{ bg: "blueGray.800" }}
              _light={{ bg: "blueGray.200" }}
            >
              Settings.js
            </Box>
            <Text>and save to reload.</Text>
          </HStack>
          <ToggleDarkMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  )

// Color Switch Component
const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

export default Settings;
