import DropDown from "./components/DropDown";
import SearchBar from "./components/SearchBar";

interface Props {
  placeholder: string;
  onSearch: (query: string) => void;
  handleFilterByOrder: (filter: string | undefined) => void;
}

const SearchSection: React.FC<Props> = ({
  placeholder,
  onSearch,
  handleFilterByOrder,
}) => (
  <div className="w-full flex">
    <SearchBar placeholder={placeholder} onSearch={onSearch} />
    <DropDown handleFilterByOrder={handleFilterByOrder} />
  </div>
);

export default SearchSection;
