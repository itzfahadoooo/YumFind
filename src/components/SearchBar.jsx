import React from 'react';
import { Search} from 'lucide-react';

const SearchBar = ({ onSearch, searchTerm, setSearchTerm }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search for recipes..."
          className="w-full px-6 py-3 pr-12 rounded-full border-2 border-gray-200 focus:outline-none placeholder-gray-400 bg-white/90 shadow-md text-gray-800"
        />
        <button
          onClick={() => onSearch(searchTerm)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
        >
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;