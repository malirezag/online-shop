import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  RadialBar,
  Legend,
  RadialBarChart,
  Pie,
  PieChart,
} from "recharts";

export default function Dashboard() {
  const data = [
    { name: "2025", productsNum: 3200, sell: 2400, amt: 2400, fill: "#77d0d6" },
    { name: "2024", productsNum: 900, sell: 650, amt: 2400, fill: "#f03636" },
    { name: "2023", productsNum: 2200, sell: 900, amt: 2400, fill: "#b48ffd" },
    { name: "2022", productsNum: 200, sell: 120, amt: 2400, fill: "#9bfa57" },
  ];
  return (
    <div className="flex flex-col my-5 w-290 gap-5">
      <h1 className="text-3xl text-center -translate-y-19 font-bold">
        Dashboard
      </h1>
      {/* circle charts */}
      <div className="flex flex-row gap-5 h-70">
        <div className="bg-zinc-50 rounded-2xl w-140 flex items-center flex-col justify-around">
          <p className="text-2xl mt-4">sell report</p>
          <RadialBarChart
            width={500}
            height={400}
            innerRadius="15%"
            outerRadius="80%"
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              label={{ fill: "#666", position: "insideStart" }}
              background
              dataKey="sell"
            />
            <Legend
              iconSize={10}
              width={90}
              height={200}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
            <Tooltip />
          </RadialBarChart>
        </div>

        <div className="bg-zinc-50 rounded-2xl w-150 flex flex-col justify-center">
          <p className="text-2xl mt-4 text-center">
            products number/sell report
          </p>
          <PieChart width={730} height={250}>
            <Pie
              data={data}
              dataKey="productsNum"
              nameKey="name"
              cx="42%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#8884d8"
              label
              paddingAngle={5}
            />
            <Pie
              data={data}
              dataKey="sell"
              nameKey="name"
              cx="42%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
            />
          </PieChart>
        </div>
      </div>
      {/* line chart  */}
      <div className="bg-zinc-50 rounded-2xl h-80 flex justify-center items-center flex-col gap-4">
        <p className=" text-xl flex flex-row gap-3">
          {" "}
          Sell Reports (<span className="text-green-600">sell</span>
          <span className="text-blue-500">Number of products</span>)
        </p>
        <AreaChart
          width={950}
          height={250}
          data={data.reverse()}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorproductsNum" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorsell" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="productsNum"
            stroke="#0c00ea"
            fillOpacity={1}
            fill="url(#colorproductsNum)"
          />
          <Area
            type="monotone"
            dataKey="sell"
            stroke="#093f16"
            fillOpacity={1}
            fill="url(#colorsell)"
          />
        </AreaChart>
      </div>
    </div>
  );
}
