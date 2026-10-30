function LoadingSpinner() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-5"
      role="status"
      aria-label="Loading photos"
    >
   
      <div className="relative h-14 w-14">
        
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>

        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-600"></div>
      </div>

      <div className="text-center">
        <p className="text-lg font-semibold text-gray-800">
          Loading photos
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Please wait while we fetch your gallery.
        </p>
      </div>
    </div>
  );
}

export default LoadingSpinner;