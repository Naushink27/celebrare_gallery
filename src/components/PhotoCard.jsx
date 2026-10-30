function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      <div className="relative overflow-hidden">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        
        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          
          className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-2xl shadow-md backdrop-blur-sm transition duration-200 hover:scale-110 active:scale-95 ${
            isFavourite
              ? 'text-rose-500'
              : 'text-gray-500 hover:text-rose-500'
          }`}
        >
          {isFavourite ? '♥' : '♡'}
        </button>
      </div>

      
      <div className="flex items-center justify-between gap-3 px-4 py-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-gray-800">
            {photo.author}
          </p>

        </div>

        <span className="shrink-0 text-xs text-gray-400">
          #{photo.id}
        </span>
      </div>
    </article>
  );
}

export default PhotoCard;