import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, CheckCircle, TrendingUp } from "lucide-react";

export default function Overview() {
  const stats = [
    {
      title: "Active Queues",
      value: "12",
      description: "Currently running",
      icon: Clock,
      trend: "+2 from yesterday",
    },
    {
      title: "Total Customers",
      value: "348",
      description: "In queue today",
      icon: Users,
      trend: "+23% from last week",
    },
    {
      title: "Served Today",
      value: "156",
      description: "Completed services",
      icon: CheckCircle,
      trend: "+12% from yesterday",
    },
    {
      title: "Avg Wait Time",
      value: "8 min",
      description: "Average waiting time",
      icon: TrendingUp,
      trend: "-2 min from yesterday",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
        <p className="text-muted-foreground">Monitor your queue management system performance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="shadow-elegant hover:shadow-strong transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              <p className="text-xs text-primary mt-1">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 shadow-elegant">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest queue operations and customer interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4 border-b pb-3 last:border-0">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Customer #{100 + i} checked in</p>
                    <p className="text-xs text-muted-foreground">{i} minutes ago</p>
                  </div>
                  <span className="text-xs font-medium text-primary">Queue A</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 shadow-elegant">
          <CardHeader>
            <CardTitle>Queue Status</CardTitle>
            <CardDescription>Current queue distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Queue A", "Queue B", "Queue C", "Queue D"].map((queue, i) => (
                <div key={queue} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{queue}</span>
                    <span className="text-muted-foreground">{15 - i * 3} waiting</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all"
                      style={{ width: `${(15 - i * 3) * 6}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
