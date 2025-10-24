function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="spinner"></div>
      <p className="text-primary-300 text-sm font-medium animate-pulse">Loading...</p>
    </div>
  );
}

export default Spinner;
