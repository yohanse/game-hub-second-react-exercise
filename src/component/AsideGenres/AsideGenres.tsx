import useGenres, { Genres } from "../../hooks/useGenres";
import { HStack, Image, List, ListItem, Spinner, Button } from "@chakra-ui/react";
import getCroppedImage from "../../service/image-url";


interface Props{
  onSelectedGenres: (gener: Genres) => void;
  selectedGenres: Genres | null;
}

const AsideGenres = ({ onSelectedGenres, selectedGenres }: Props) => {
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
              <Button onClick={() => onSelectedGenres(genres)} fontSize="large" variant="link" fontWeight={genres.id == selectedGenres?.id? "bold": "normal"}>{genres.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </> 
  );
};

export default AsideGenres;
