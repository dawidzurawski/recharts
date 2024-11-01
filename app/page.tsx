import Chart from "@/components/Chart";

export default function Home() {
  return (
    <div className="flex-1 overflow-auto relative z-10 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Chart />
        <Chart />
      </div>
    </div>
  );
}
