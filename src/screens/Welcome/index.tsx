import React from "react";
import {
  Text,
  HStack,
  Center,
  Heading,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Button,
} from "native-base";
import { ToggleMode } from "../../components/ToggleMode";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function Welcome() {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <Heading size="lg" mb="20">
            Bem vindo ao Procure Drink
          </Heading>
          <Button variant="outline" colorScheme="warning">
            <HStack space={2} alignItems="center">
              <Text italic fontSize="lg">
                Vá em frente e procure seu
                <Text bold fontSize="lg">
                  {" "}
                  Drink
                </Text>
              </Text>
            </HStack>
          </Button>
          <ToggleMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
