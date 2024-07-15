import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode()
  return <HStack>
    <Switch onChange={toggleColorMode} isChecked={ colorMode === 'dark' } colorScheme='green' />
    <Text>Dark mode</Text>
  </HStack>
}

export default ColorModeSwitch