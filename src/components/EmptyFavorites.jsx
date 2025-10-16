import { Heart } from 'lucide-react';

const EmptyFavorites = () => {
  return (
    <div className="max-w-md mx-auto text-center py-12">
      <div className="bg-white rounded-xl shadow-md p-8">
        <Heart size={48} className="mx-auto text-gray-400 mb-4" />
        <p className="text-gray-600">No favorite recipes yet. Start adding some!</p>
      </div>
    </div>
  );
};

export default EmptyFavorites;