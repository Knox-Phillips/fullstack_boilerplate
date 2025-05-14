import { useIsMutating, useIsFetching } from "@tanstack/react-query";

const GlobalLoading = () => {
  const isMutating = useIsMutating();
  const isFetching = useIsFetching();

  if (isMutating | isFetching) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-50 z-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return null;
};

export default GlobalLoading;
