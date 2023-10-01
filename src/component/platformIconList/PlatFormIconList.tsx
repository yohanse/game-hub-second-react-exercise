import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { PlatForm } from "../../hooks/useGame";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: PlatForm[];
}

const PlatFormIconList = ({ platforms }: Props) => {
  const iconMap: {[Key: string]: IconType} = {
    pc: FaWindows,
    playstation3: FaPlaystation,
    playstation4: FaPlaystation,
    playstation5: FaPlaystation,
    "xbox-one": FaXbox,
    xbox360: FaXbox,
    nintendo: SiNintendo,
    macos: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  for(var i = 0; i < platforms.length; i++){
    console.log(platforms[i].slug);
  }
  return (
    <HStack marginY={1}>
        
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"/>
      ))}
    </HStack>
  );
};

export default PlatFormIconList;
