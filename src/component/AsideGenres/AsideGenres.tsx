import useGenres from "../../hooks/useGenres";
import { HStack, Image, Text, List, ListItem, Spinner } from "@chakra-ui/react";
import getCroppedImage from "../../service/image-url";

const AsideGenres = () => {
  const { data, isLoading } = useGenres();
  if(isLoading) return <Spinner/>;
  return (
    <>
      <List>
        {data.map((genres) => (
          <ListItem key={genres.id}>
            <HStack paddingX="15px" marginBottom="10px">
              {" "}
              <Image
                src={getCroppedImage(genres.image_background)}
                width="30px"
                height="30px"
                borderRadius="4px"
              />{" "}
              <Text fontSize="large">{genres.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default AsideGenres;
