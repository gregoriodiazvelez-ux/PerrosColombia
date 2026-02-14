import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BarChart2, TrendingUp } from "lucide-react";
import { marketInsights, topSellers } from "../data/trends";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 border border-gray-700/60 rounded-xl p-3 shadow-xl">
        <p className="text-gray-400 text-xs mb-1">{label}</p>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {payload.map((p: any, i: number) => (
          <p key={i} className="text-white text-sm font-semibold">
            {p.name === "revenue" ? `$${p.value.toLocaleString()}` : `${p.value} orders`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const colors = ["#8b5cf6", "#a78bfa", "#c4b5fd", "#7c3aed", "#6d28d9"];

export default function MarketChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-6">
      <div className="lg:col-span-3 rounded-2xl border border-gray-700/50 bg-gray-900/50 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-white font-bold text-base">Revenue Trend</h3>
            <p className="text-gray-500 text-xs mt-0.5">Last 7 months performance</p>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 text-sm font-semibold bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <TrendingUp className="w-4 h-4" />
            +67% YoY
          </div>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={marketInsights} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.4} />
            <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={2.5} fill="url(#revenueGrad)"
              dot={{ fill: "#8b5cf6", strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, fill: "#a78bfa", stroke: "#8b5cf6", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="lg:col-span-2 rounded-2xl border border-gray-700/50 bg-gray-900/50 p-6">
        <div className="flex items-center gap-2 mb-5">
          <BarChart2 className="w-4 h-4 text-fuchsia-400" />
          <h3 className="text-white font-bold text-base">Top Categories</h3>
        </div>
        <div className="space-y-4">
          {topSellers.map((item, i) => (
            <div key={item.category}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-gray-300 text-sm">{item.category}</span>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 text-xs font-semibold">+{item.growth}%</span>
                  <span className="text-gray-500 text-xs">{item.sales.toLocaleString()}</span>
                </div>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${(item.sales / 3500) * 100}%`, backgroundColor: colors[i] }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
