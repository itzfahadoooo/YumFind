import { Heart, ChefHat } from "lucide-react";
import SearchBar from "./SearchBar";
import { Button } from "@/components/ui/button";

const Header = ({
  searchTerm,
  setSearchTerm,
  onSearch,
  favoritesCount,
  showFavorites,
  onToggleFavorites,
}) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <a href="/" className="flex items-center gap-2">
            <ChefHat size={36}/>
            <span className="text-3xl font-bold">YumFind</span>
          </a>

          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              onClick={onToggleFavorites}
              className="p-2 hover:bg-white rounded-full transition-colors relative cursor-pointer"
            >
              <Heart size={24} className={showFavorites ? "fill-white" : ""} />
              Favorites
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Button>
          </div>
        </div>
        <SearchBar
          onSearch={onSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </header>
  );
};

export default Header;
