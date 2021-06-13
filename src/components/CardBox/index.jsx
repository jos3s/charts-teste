import { Box, Center, Badge, Divider, Button } from "@chakra-ui/react";

export const CardBox = ({
  children,
  title,
  textBadge,
  button = false,
  handleClick,
  textButton,
}) => {
  return (
    <Box
      maxW="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="base"
    >
      <Box pt="4" pr="4" pl="4">
        {children}
      </Box>
      <Divider />
      <Box p="3">
        <Center
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          <Box>
            {title} {" - "}
            <Badge colorScheme="purple">{textBadge}</Badge>
            {button && (
              <Button
                colorScheme="purple"
                onClick={handleClick}
                size="xs"
                ml="2"
              >
                {textButton}
              </Button>
            )}
          </Box>
        </Center>
      </Box>
    </Box>
  );
};
