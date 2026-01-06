export const PrimaryButton = ({ children }) => {
  return (
    <button className="px-4 py-2 text-lg border transition rounded border-neutral-700 text-neutral-300 hover:border-black hover:text-white">
      {children}
    </button>
  );
};
