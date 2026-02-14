"use client";

import { TrendingUp, DollarSign, ShoppingBag, Zap } from "lucide-react";

const stats = [
  {
    label: "Trending Niches",
    value: "47",
    change: "+12 this week",
    icon: TrendingUp,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    label: "Avg. Profit Margin",
    value: "68%",
    change: "+3% vs last month",
    icon: DollarSign,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    label: "Top Design Sales",
    value: "14.3K",
    change: "+28% this month",
    icon: ShoppingBag,
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-500/10 border-fuchsia-500/20",
  },
  {
    label: "Viral Potential",
    value: "312%",
    change: "Cottagecore surge",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
];

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className={`rounded-2xl border p-4 ${stat.bg} backdrop-blur-sm`}
          >
            <div className="flex items-start justify-between mb-3">
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              <Icon className={`w-4 h-4 ${stat.color}`} />
            </div>
            <p className={`text-2xl font-bold ${stat.color} mb-1`}>
              {stat.value}
            </p>
            <p className="text-gray-500 text-xs">{stat.change}</p>
          </div>
        );
      })}
    </div>
  );
}
