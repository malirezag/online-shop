import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "../../services/ProductApi";

export function useSearchProducts(searchedWord: string) {
  const { isLoading, data } = useQuery({
    queryKey: ["searchedWord", searchedWord],
    queryFn: ({ queryKey }) => {
      const [, word] = queryKey;
      return searchProducts(word as string);
    },
    enabled: Boolean(searchedWord.length > 2),
  });

  return { data, isLoading };
}
