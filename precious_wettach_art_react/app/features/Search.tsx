import { useEffect, useMemo, useState } from "react";
import { Input } from "../../src/components/ui/input";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setSearchTerm } from "./gallerySlice";

// Debounce Utility
function debounce<T extends (...args: string[]) => void>(
  fn: T,
  delay: number
) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

const Search = () => {
  const { searchTerm } = useAppSelector((state) => state.gallery);
  const dispatch = useAppDispatch();
  const [term, setTerm] = useState(searchTerm);

  useEffect(() => {
    setTerm(searchTerm);
  }, [searchTerm]);

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        dispatch(setSearchTerm(value));
      }, 500),
    [dispatch]
  );

  return (
    <div className="w-full bg-yellow-100 p-3 rounded-sm mb-4 shadow-md">
      <h3 className="font-bold mb-2">Search Product</h3>
      <Input
        type="search"
        placeholder="Search Product"
        value={term}
        onChange={(e) => {
          const value = e.target.value;
          setTerm(value);
          debouncedSearch(value);
        }}
      />
    </div>
  );
};

export default Search;
