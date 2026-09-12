const ProductImages = [
  "/jewellery-1.jpg",
  "/jewellery-1.jpg",
  "/jewellery-1.jpg",
  "/jewellery-1.jpg",
  "/jewellery-1.jpg",
  "/jewellery-1.jpg",
  "/jewellery-1.jpg",
  "/jewellery-1.jpg",
];
export default function ProductGallery() {
  return (
    <div className="flex flex-wrap gap-4">
      {ProductImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Product ${index + 1}`}
          className="
            w-[80px]
            h-[80px]
            object-contain
            rounded-[var(--border-radius-medium)]
            border-2
            border-[var(--primary)]
            cursor-pointer
            transition-all
            duration-[var(--transition-timing)]
            hover:shadow-[0_0_10px_var(--primary)]
          "
        />
      ))}
    </div>
  );
}
