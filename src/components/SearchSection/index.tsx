import DropDown from "./components/DropDown";
import SearchBar from "./components/SearchBar";

interface Props {
  placeholder: string;
  isLoading: boolean;
  onSearch: (query: string) => void;
  handleFilterByOrder: (filter: string | undefined) => void;
}

const SearchSection: React.FC<Props> = ({
  placeholder,
  isLoading,
  onSearch,
  handleFilterByOrder,
}) => (
  <div className="w-full md:flex my-8 md:my-0">
    <SearchBar
      placeholder={placeholder}
      isLoading={isLoading}
      onSearch={onSearch}
    />
    <DropDown handleFilterByOrder={handleFilterByOrder} />
  </div>
);

export default SearchSection;
