import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { CalendarDays, DollarSign, FileText, MessageSquare, AlertTriangle, Bell, Wrench, Users } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="container space-y-8 py-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your strata management portal. Here's an overview of your building.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Units</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">18 owner-occupied, 6 tenanted</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Admin Fund</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$42,500</div>
            <p className="text-xs text-muted-foreground">+$3,200 from last quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Capital Works Fund</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$128,750</div>
            <p className="text-xs text-muted-foreground">+$8,500 from last quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Requests</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">3 urgent, 4 standard</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="notices">Notices</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Recent Maintenance</CardTitle>
                <CardDescription>Latest maintenance requests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Lobby Light Replacement</p>
                    <p className="text-sm text-muted-foreground">Unit: Common Area</p>
                  </div>
                  <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 px-2 py-1 rounded-full">
                    In Progress
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Water Leak in Basement</p>
                    <p className="text-sm text-muted-foreground">Unit: Parking Level 1</p>
                  </div>
                  <span className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 px-2 py-1 rounded-full">
                    Urgent
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Garden Maintenance</p>
                    <p className="text-sm text-muted-foreground">Unit: Common Area</p>
                  </div>
                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-2 py-1 rounded-full">
                    Completed
                  </span>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/maintenance">View All Requests</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Financial Summary</CardTitle>
                <CardDescription>Current quarter overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Levy Income</span>
                  <span className="font-medium">$32,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Expenses</span>
                  <span className="font-medium">$18,750</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Outstanding Levies</span>
                  <span className="font-medium">$3,600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Insurance Premium</span>
                  <span className="font-medium">$12,800</span>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/finances">View Financial Details</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Documents</CardTitle>
                <CardDescription>Latest uploaded documents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Annual General Meeting Minutes</p>
                    <p className="text-xs text-muted-foreground">Added 2 days ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Building Insurance Certificate</p>
                    <p className="text-xs text-muted-foreground">Added 1 week ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Quarterly Financial Statement</p>
                    <p className="text-xs text-muted-foreground">Added 2 weeks ago</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/documents">View All Documents</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Scheduled meetings and maintenance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <CalendarDays className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Strata Committee Meeting</p>
                  <p className="text-sm text-muted-foreground">April 15, 2025 - 7:00 PM - Building Common Room</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Fire Safety Inspection</p>
                  <p className="text-sm text-muted-foreground">April 22, 2025 - 9:00 AM to 3:00 PM - All Units</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <CalendarDays className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Annual General Meeting</p>
                  <p className="text-sm text-muted-foreground">May 10, 2025 - 6:30 PM - Building Common Room</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notices" className="space-y-4">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important Notice</AlertTitle>
            <AlertDescription>
              Water will be shut off on April 10th from 10:00 AM to 2:00 PM for essential maintenance.
            </AlertDescription>
          </Alert>
          <Alert>
            <Bell className="h-4 w-4" />
            <AlertTitle>Reminder</AlertTitle>
            <AlertDescription>
              Quarterly strata levies are due by April 15th. Please ensure timely payment to avoid late fees.
            </AlertDescription>
          </Alert>
          <Alert>
            <MessageSquare className="h-4 w-4" />
            <AlertTitle>Community Update</AlertTitle>
            <AlertDescription>
              The building's new recycling program starts next week. Information packets have been delivered to all
              units.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </div>
  )
}

