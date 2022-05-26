import { AntDesign, Entypo, MaterialCommunityIcons } from "@native-base/icons";
import { Center, HStack, Icon } from "native-base";

const NativeBaseIcon = () => (<Center>
  <HStack space={3}>
    <Icon as={AntDesign} name="android1" color="coolGray.800" _dark={{
    color: "warmGray.50"
  }} />
    <Icon as={Entypo} name="app-store" color="coolGray.800" _dark={{
    color: "warmGray.50"
  }} />
    <Icon as={MaterialCommunityIcons} name="web" color="coolGray.800" _dark={{
    color: "warmGray.50"
  }} />
  </HStack>
</Center>);

export default NativeBaseIcon;
