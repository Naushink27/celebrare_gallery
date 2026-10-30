import {
    useState,
    useCallback,
    useMemo,
    useReducer,
    useEffect,
} from 'react';

import useFetchPhotos from '../hooks/useFetchPhotos';
import PhotoCard from './PhotoCard';
import favouritesReducer from '../reducers/favouritesReducer';
import LoadingSpinner from './LoadingSpinner';
function Gallery() {
    const { photos, loading, error } = useFetchPhotos();

    const [searchTerm, setSearchTerm] = useState('');

    const [favourites, dispatch] = useReducer(
        favouritesReducer,
        [],
        function initializeFavourites() {
            try {
                const savedFavourites = localStorage.getItem(
                    'celebrare-favourites'
                );

                if (savedFavourites === null) {
                    return [];
                }

                const parsedFavourites = JSON.parse(savedFavourites);

                if (Array.isArray(parsedFavourites)) {
                    return parsedFavourites;
                }

                return [];
            } catch (error) {
                console.error('Could not load favourites:', error);
                return [];
            }
        }
    );


    useEffect(() => {
        localStorage.setItem(
            'celebrare-favourites',
            JSON.stringify(favourites)
        );
    }, [favourites]);


    const handleSearch = useCallback((event) => {
        setSearchTerm(event.target.value);
    }, []);


    const handleToggleFavourite = useCallback((photoId) => {
        dispatch({
            type: 'TOGGLE_FAVOURITE',
            payload: photoId,
        });
    }, []);


    const filteredPhotos = useMemo(() => {
        return photos.filter((photo) =>
            photo.author
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
    }, [photos, searchTerm]);

    if (loading) {
        return <LoadingSpinner />
    }

    if (error) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center gap-3 px-4 text-center">
                <h2 className="text-xl font-semibold text-red-600">
                    Unable to load photos
                </h2>

                <p className="text-gray-600">
                    {error}
                </p>

                <button
                    type="button"
                    onClick={() => window.location.reload()}
                    className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-100 px-4 py-10 sm:px-8">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-3 text-center text-3xl font-bold text-gray-900">
                    Celebrare Photo Gallery
                </h1>

                <p className="mb-8 text-center text-gray-600">
                    Explore your favourite photos
                </p>

                <div className="relative mb-8 w-full">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-4.34-4.34m1.59-5.16a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                        />
                    </svg>

                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search photos by author..."
                        aria-label="Search photos by author"
                        className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-sm text-gray-800 shadow-sm outline-none transition duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                </div>

                <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                        Showing {filteredPhotos.length} of {photos.length} photos
                    </p>

                    <p className="text-sm font-medium text-red-600">
                        ♥ {favourites.length} favourites
                    </p>
                </div>

                {filteredPhotos.length === 0 ? (
                    <p className="py-12 text-center text-gray-500">
                        No photos found. Try another author name.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {filteredPhotos.map((photo) => (
                            <PhotoCard
                                key={photo.id}
                                photo={photo}
                                isFavourite={favourites.includes(photo.id)}
                                onToggleFavourite={handleToggleFavourite}
                            />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}

export default Gallery;