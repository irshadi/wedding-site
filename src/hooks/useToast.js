import { useToast } from "@chakra-ui/react";

export const useToast = () => {
  const toast = useToast();
  const createSuccessToast = () => {
    toast({
      title: "Comment created",
      description: "Comment posted successfully",
      status: "success",
      duration: 3000,
      isClosable: true
    });
  };

  const createErrorToast = () => {
    toast({
      title: "Error",
      description: "Comment posted successfully",
      status: "error",
      duration: 3000,
      isClosable: true
    });
  };

  return { createSuccessToast, createErrorToast };
};
