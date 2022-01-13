import React from "react";
import { Switch, useColorMode, Text, HStack } from "native-base";

export function ToggleMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center" mt="50">
      <Text>Dark</Text>
      <Switch
        colorScheme="yellow"
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
