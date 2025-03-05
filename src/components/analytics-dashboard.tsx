"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "@/components/ui/chart"
import { Download, Share2 } from "lucide-react"

export default function AnalyticsDashboard() {
  // Sample data for charts
  const contractTypeData = [
    { name: "RPI Clause", value: 187 },
    { name: "Fixed Price", value: 78 },
    { name: "Other Mechanism", value: 47 },
    { name: "No Price Clause", value: 188 },
  ]

  const noticePeriodsData = [
    { name: "30 Days", value: 45 },
    { name: "60 Days", value: 87 },
    { name: "90 Days", value: 32 },
    { name: "Other", value: 23 },
  ]

  const reviewProgressData = [
    { name: "Week 1", completed: 78, inProgress: 120, notStarted: 302 },
    { name: "Week 2", completed: 156, inProgress: 142, notStarted: 202 },
    { name: "Week 3", completed: 245, inProgress: 138, notStarted: 117 },
    { name: "Week 4", completed: 312, inProgress: 138, notStarted: 50 },
  ]

  const contractsByYearData = [
    { name: "2020", count: 45 },
    { name: "2021", count: 112 },
    { name: "2022", count: 187 },
    { name: "2023", count: 156 },
  ]

  const COLORS = ["#4ADE80", "#3B82F6", "#F59E0B", "#EF4444"]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Analytics Dashboard</h2>
          <p className="text-gray-500">Contract portfolio insights</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1 border border-border">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1 border border-border">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="rpi">RPI Analysis</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-palantir">
              <CardHeader className="border-b border-border pb-2">
                <CardTitle className="text-lg font-medium">Contract Types</CardTitle>
                <CardDescription>Distribution of price adjustment mechanisms</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={contractTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {contractTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="card-palantir">
              <CardHeader className="border-b border-border pb-2">
                <CardTitle className="text-lg font-medium">Contracts by Year</CardTitle>
                <CardDescription>Distribution by effective date</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={contractsByYearData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" fill="#3B82F6" name="Number of Contracts" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="card-palantir md:col-span-2">
              <CardHeader className="border-b border-border pb-2">
                <CardTitle className="text-lg font-medium">Review Progress Over Time</CardTitle>
                <CardDescription>Weekly tracking of contract review status</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={reviewProgressData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="completed" stackId="a" fill="#4ADE80" name="Completed" />
                      <Bar dataKey="inProgress" stackId="a" fill="#F59E0B" name="In Progress" />
                      <Bar dataKey="notStarted" stackId="a" fill="#EF4444" name="Not Started" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rpi">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-palantir">
              <CardHeader className="border-b border-border pb-2">
                <CardTitle className="text-lg font-medium">RPI Clause Distribution</CardTitle>
                <CardDescription>Presence of RPI clauses in contracts</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Has RPI Clause", value: 187 },
                          { name: "No RPI Clause", value: 313 },
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        <Cell fill="#4ADE80" />
                        <Cell fill="#EF4444" />
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="card-palantir">
              <CardHeader className="border-b border-border pb-2">
                <CardTitle className="text-lg font-medium">Notice Periods</CardTitle>
                <CardDescription>Required notice periods for price changes</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={noticePeriodsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {noticePeriodsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="card-palantir md:col-span-2">
              <CardHeader className="border-b border-border pb-2">
                <CardTitle className="text-lg font-medium">RPI Impact Analysis</CardTitle>
                <CardDescription>Potential revenue impact of RPI-based price increases</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { month: "Jan", baseline: 1000000, withRPI: 1000000 },
                        { month: "Feb", baseline: 1000000, withRPI: 1010000 },
                        { month: "Mar", baseline: 1000000, withRPI: 1020100 },
                        { month: "Apr", baseline: 1000000, withRPI: 1030301 },
                        { month: "May", baseline: 1000000, withRPI: 1040604 },
                        { month: "Jun", baseline: 1000000, withRPI: 1051010 },
                        { month: "Jul", baseline: 1000000, withRPI: 1061520 },
                        { month: "Aug", baseline: 1000000, withRPI: 1072135 },
                        { month: "Sep", baseline: 1000000, withRPI: 1082857 },
                        { month: "Oct", baseline: 1000000, withRPI: 1093685 },
                        { month: "Nov", baseline: 1000000, withRPI: 1104622 },
                        { month: "Dec", baseline: 1000000, withRPI: 1115668 },
                      ]}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => `£${value.toLocaleString()}`} />
                      <Legend />
                      <Line type="monotone" dataKey="baseline" stroke="#3B82F6" name="Baseline Revenue" />
                      <Line type="monotone" dataKey="withRPI" stroke="#4ADE80" name="With RPI Increase" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="progress">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-palantir">
              <CardHeader className="border-b border-border pb-2">
                <CardTitle className="text-lg font-medium">Review Status</CardTitle>
                <CardDescription>Current status of contract reviews</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Completed", value: 312 },
                          { name: "In Progress", value: 138 },
                          { name: "Not Started", value: 50 },
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        <Cell fill="#4ADE80" />
                        <Cell fill="#F59E0B" />
                        <Cell fill="#EF4444" />
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="card-palantir">
              <CardHeader className="border-b border-border pb-2">
                <CardTitle className="text-lg font-medium">Paralegal Performance</CardTitle>
                <CardDescription>Contracts reviewed by team member</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { name: "Sarah J.", completed: 124, inProgress: 18 },
                        { name: "Michael T.", completed: 98, inProgress: 42 },
                        { name: "Priya K.", completed: 90, inProgress: 78 },
                      ]}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="completed" fill="#4ADE80" name="Completed" />
                      <Bar dataKey="inProgress" fill="#F59E0B" name="In Progress" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="card-palantir md:col-span-2">
              <CardHeader className="border-b border-border pb-2">
                <CardTitle className="text-lg font-medium">Daily Review Rate</CardTitle>
                <CardDescription>Contracts reviewed per day</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { day: "Mon", reviews: 18 },
                        { day: "Tue", reviews: 22 },
                        { day: "Wed", reviews: 28 },
                        { day: "Thu", reviews: 25 },
                        { day: "Fri", reviews: 20 },
                        { day: "Mon", reviews: 24 },
                        { day: "Tue", reviews: 27 },
                        { day: "Wed", reviews: 30 },
                        { day: "Thu", reviews: 32 },
                        { day: "Fri", reviews: 28 },
                      ]}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="reviews" stroke="#3B82F6" name="Contracts Reviewed" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

