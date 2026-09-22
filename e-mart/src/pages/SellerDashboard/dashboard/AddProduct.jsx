import { useState } from "react";

export default function AddProduct() {
  const [images, setImages] = useState([]);
  const [featureInput, setFeatureInput] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    comparePrice: "",
    stock: "",
    lowStock: "",
    description: "",
    status: "Active",
    featured: false,
    keyFeatures: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    URL.revokeObjectURL(images[index].preview);

    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      ...formData,
      images,
    });

    alert("Product added successfully!");
  };
  // feature input handler
  const handleAddFeature = () => {
    const feature = featureInput.trim();

    if (!feature) return;

    setFormData((prev) => ({
      ...prev,
      keyFeatures: [...prev.keyFeatures, feature],
    }));

    setFeatureInput("");
  };

  return (
    <section className="w-full h-full min-h-0 overflow-y-auto pr-1">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <div>
          <h1 className="text-xl font-semibold text-[var(--eerie-black)]">
            Add New Product
          </h1>

          <p className="text-sm text-[var(--sonic-silver)] mt-1">
            Create a new product and add it to your store.
          </p>
        </div>

        <button
          type="button"
          className="h-10 px-5 rounded-lg border border-[var(--cultured)] bg-[var(--white)] text-sm font-medium text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
        >
          <i className="bi bi-arrow-left mr-2"></i>
          Back to Products
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_330px] gap-5">
          {/* LEFT SIDE */}
          <div className="space-y-5">
            {/* Product Information */}
            <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
              <div className="mb-5">
                <h2 className="text-base font-semibold text-[var(--eerie-black)]">
                  Product Information
                </h2>

                <p className="text-xs text-[var(--sonic-silver)] mt-1">
                  Add the basic information about your product.
                </p>
              </div>

              <div className="space-y-4">
                {/* Product Name */}
                <div>
                  <label className="block text-sm font-medium text-[var(--eerie-black)] mb-2">
                    Product Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter product name"
                    className="w-full h-11 px-3 rounded-lg border border-[var(--cultured)] bg-[var(--white)] text-sm outline-none focus:border-[var(--primary)] transition"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-[var(--eerie-black)] mb-2">
                    Description
                  </label>

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Write a description for your product..."
                    className="w-full p-3 rounded-lg border border-[var(--cultured)] text-sm outline-none resize-none focus:border-[var(--primary)] transition"
                  ></textarea>
                </div>
                {/* Key Features */}
              </div>
            </div>
            
            {/* Key Features */}
            <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
              <div className="mb-5">
                <h2 className="text-base font-semibold text-[var(--eerie-black)]">
                  Key Features
                </h2>

                <p className="text-xs text-[var(--sonic-silver)] mt-1">
                  Highlight the main features of your product.
                </p>
              </div>

              <div className="space-y-4">
                {/* Feature Input */}
                <div>
                  <label className="block text-sm font-medium text-[var(--eerie-black)] mb-2">
                    Feature
                  </label>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={featureInput}
                      onChange={(e) => setFeatureInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddFeature();
                        }
                      }}
                      placeholder="Enter product feature"
                      className="flex-1 h-11 px-3 rounded-lg border border-[var(--cultured)] bg-[var(--white)] text-sm outline-none focus:border-[var(--primary)] transition"
                    />

                    <button
                      type="button"
                      onClick={handleAddFeature}
                      className="h-11 px-5 rounded-lg bg-[var(--primary)] text-[var(--white)] text-sm font-medium hover:opacity-90 transition"
                    >
                      <i className="bi bi-plus-lg mr-1"></i>
                      Add
                    </button>
                  </div>
                </div>

                {/* Added Features */}
                {formData.keyFeatures.length > 0 && (
                  <div className="space-y-2 space-x-2 flex">
                    {formData.keyFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg bg-[var(--cultured)]"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <i className="bi bi-check-circle-fill text-[var(--primary)]"></i>

                          <span className="text-sm text-[var(--eerie-black)] truncate">
                            {feature}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              keyFeatures: prev.keyFeatures.filter(
                                (_, i) => i !== index,
                              ),
                            }));
                          }}
                          className="shrink-0 text-[var(--sonic-silver)] hover:text-red-500 transition"
                        >
                          <i className="bi bi-x-lg"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
              <div className="mb-5">
                <h2 className="text-base font-semibold text-[var(--eerie-black)]">
                  Pricing
                </h2>

                <p className="text-xs text-[var(--sonic-silver)] mt-1">
                  Set the selling price of your product.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-[var(--eerie-black)] mb-2">
                    Price
                  </label>

                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[var(--sonic-silver)]">
                      $
                    </span>

                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="0.00"
                      className="w-full h-11 pl-8 pr-3 rounded-lg border border-[var(--cultured)] text-sm outline-none focus:border-[var(--primary)] transition"
                    />
                  </div>
                </div>

                {/* Compare Price */}
                <div>
                  <label className="block text-sm font-medium text-[var(--eerie-black)] mb-2">
                    Compare at Price
                  </label>

                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[var(--sonic-silver)]">
                      $
                    </span>

                    <input
                      type="number"
                      name="comparePrice"
                      value={formData.comparePrice}
                      onChange={handleChange}
                      placeholder="0.00"
                      className="w-full h-11 pl-8 pr-3 rounded-lg border border-[var(--cultured)] text-sm outline-none focus:border-[var(--primary)] transition"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Inventory */}
            <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
              <div className="mb-5">
                <h2 className="text-base font-semibold text-[var(--eerie-black)]">
                  Inventory
                </h2>

                <p className="text-xs text-[var(--sonic-silver)] mt-1">
                  Manage your product stock and inventory settings.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Stock */}
                <div>
                  <label className="block text-sm font-medium text-[var(--eerie-black)] mb-2">
                    Stock Quantity
                  </label>

                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    placeholder="Enter stock quantity"
                    className="w-full h-11 px-3 rounded-lg border border-[var(--cultured)] text-sm outline-none focus:border-[var(--primary)] transition"
                  />
                </div>

                {/* Low Stock */}
                <div>
                  <label className="block text-sm font-medium text-[var(--eerie-black)] mb-2">
                    Low Stock Threshold
                  </label>

                  <input
                    type="number"
                    name="lowStock"
                    value={formData.lowStock}
                    onChange={handleChange}
                    placeholder="e.g. 8"
                    className="w-full h-11 px-3 rounded-lg border border-[var(--cultured)] text-sm outline-none focus:border-[var(--primary)] transition"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-5">
            {/* Product Images */}
            <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
              <div className="mb-5">
                <h2 className="text-base font-semibold text-[var(--eerie-black)]">
                  Product Images
                </h2>

                <p className="text-xs text-[var(--sonic-silver)] mt-1">
                  Upload images of your product.
                </p>
              </div>

              {/* Upload */}
              <label className="w-full h-[170px] border-2 border-dashed border-[var(--cultured)] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-[var(--primary)] transition">
                <i className="bi bi-cloud-arrow-up text-3xl text-[var(--sonic-silver)] mb-2"></i>

                <p className="text-sm font-medium text-[var(--eerie-black)]">
                  Click to upload
                </p>

                <p className="text-xs text-[var(--sonic-silver)] mt-1">
                  PNG, JPG or WEBP
                </p>

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>

              {/* Preview */}
              {images.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden border border-[var(--cultured)]"
                    >
                      <img
                        src={image.preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-full object-cover"
                      />

                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 w-7 h-7 rounded-full bg-[var(--white)] shadow flex items-center justify-center text-red-500 hover:bg-red-50"
                      >
                        <i className="bi bi-x"></i>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Category */}
            <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
              <h2 className="text-base font-semibold text-[var(--eerie-black)] mb-5">
                Organization
              </h2>

              <div>
                <label className="block text-sm font-medium text-[var(--eerie-black)] mb-2">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full h-11 px-3 rounded-lg border border-[var(--cultured)] bg-[var(--white)] text-sm outline-none focus:border-[var(--primary)]"
                >
                  <option>All Categories</option>
                  <option>Clothing</option>
                  <option>Footwear</option>
                  <option>Electronics</option>
                  <option>Bags</option>
                  <option>Accessories</option>
                  <option>Home & Living</option>
                </select>
              </div>
            </div>

            {/* Status */}
            <div className="bg-[var(--white)] border border-[var(--cultured)] rounded-lg p-5">
              <h2 className="text-base font-semibold text-[var(--eerie-black)] mb-5">
                Product Status
              </h2>

              <div className="space-y-4">
                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-[var(--eerie-black)] mb-2">
                    Status
                  </label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full h-11 px-3 rounded-lg border border-[var(--cultured)] bg-[var(--white)] text-sm outline-none focus:border-[var(--primary)]"
                  >
                    <option value="Active">Active</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>

                {/* Featured */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[var(--primary)]"
                  />

                  <span className="text-sm text-[var(--eerie-black)]">
                    Mark as featured product
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-end gap-3 mt-5 pb-5">
          <button
            type="button"
            className="h-11 px-6 rounded-lg border border-[var(--cultured)] bg-[var(--white)] text-sm font-medium text-[var(--eerie-black)] hover:bg-[var(--cultured)] transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="h-11 px-6 rounded-lg bg-[var(--primary)] text-[var(--white)] text-sm font-medium hover:opacity-90 transition"
          >
            <i className="bi bi-plus-lg mr-2"></i>
            Add Product
          </button>
        </div>
      </form>
    </section>
  );
}
