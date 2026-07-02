'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function DashboardCharts() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In production, this would fetch from /api/analytics/overview
    // For MVP, we will simulate the fetch delay and use the mock data structure
    setTimeout(() => {
      setData({
        kpis: {
          totalUsers: 1420,
          monthlyRevenue: 28500,
          activeSessions: 142,
          completionRate: 94
        },
        growth: [
          { name: 'Mon', users: 40, revenue: 240 },
          { name: 'Tue', users: 30, revenue: 139 },
          { name: 'Wed', users: 20, revenue: 980 },
          { name: 'Thu', users: 27, revenue: 390 },
          { name: 'Fri', users: 18, revenue: 480 },
          { name: 'Sat', users: 23, revenue: 380 },
          { name: 'Sun', users: 34, revenue: 430 },
        ]
      });
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return <div className="h-64 flex items-center justify-center text-zinc-500 animate-pulse">Loading analytics...</div>;
  }

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-panel p-6 rounded-xl">
          <h3 className="text-zinc-400 text-sm font-medium mb-1">Total Users</h3>
          <p className="text-3xl font-bold text-zinc-100">{data.kpis.totalUsers}</p>
        </div>
        <div className="glass-panel p-6 rounded-xl">
          <h3 className="text-zinc-400 text-sm font-medium mb-1">Monthly Revenue</h3>
          <p className="text-3xl font-bold text-green-400">${data.kpis.monthlyRevenue}</p>
        </div>
        <div className="glass-panel p-6 rounded-xl">
          <h3 className="text-zinc-400 text-sm font-medium mb-1">Active Sessions</h3>
          <p className="text-3xl font-bold text-indigo-400">{data.kpis.activeSessions}</p>
        </div>
        <div className="glass-panel p-6 rounded-xl">
          <h3 className="text-zinc-400 text-sm font-medium mb-1">Completion Rate</h3>
          <p className="text-3xl font-bold text-zinc-100">{data.kpis.completionRate}%</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-xl h-80">
          <h3 className="text-lg font-bold text-zinc-100 mb-6">User Growth</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.growth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
              <XAxis dataKey="name" stroke="#a1a1aa" />
              <YAxis stroke="#a1a1aa" />
              <Tooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', color: '#f4f4f5' }} />
              <Line type="monotone" dataKey="users" stroke="#818cf8" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-panel p-6 rounded-xl h-80">
          <h3 className="text-lg font-bold text-zinc-100 mb-6">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.growth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
              <XAxis dataKey="name" stroke="#a1a1aa" />
              <YAxis stroke="#a1a1aa" />
              <Tooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', color: '#f4f4f5' }} />
              <Bar dataKey="revenue" fill="#4ade80" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
