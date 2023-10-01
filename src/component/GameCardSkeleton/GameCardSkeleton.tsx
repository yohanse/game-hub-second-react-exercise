import { Card, CardBody, HStack, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="250px" borderRadius="10px" overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <HStack justifyContent="space-between">
          <Skeleton width="150px"/>
          <Skeleton width="30px"/>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
