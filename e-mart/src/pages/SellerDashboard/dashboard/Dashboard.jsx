export default function Dashboard() {
  return (
    <div className="w-full flex flex-col">
      {/* Top section */}
      <div className="mb-5 w-full">
        <h1 className="text-2xl font-semibold">
          Good morning, ShopEase Store! 👋
        </h1>

        <p className="text-sm text-[var(--sonic-silver)] mt-1">
          Here's what's happening with your store today.
        </p>
      </div>

      {/* Dashboard content */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-[var(--white)] rounded-lg p-5">Sales Overview</div>

        <div className="bg-[var(--white)] rounded-lg p-5">Recent Orders</div>
      </div>
    </div>
  );
}
