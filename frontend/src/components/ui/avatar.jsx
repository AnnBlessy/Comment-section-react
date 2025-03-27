export const Avatar = ({ src, alt = "User Avatar" }) => (
    <img
      src={src || "https://via.placeholder.com/40"}
      alt={alt}
      className="w-10 h-10 rounded-full"
    />
  );
  