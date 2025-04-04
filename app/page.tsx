"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { CalendarDays, DollarSign, FileText, MessageSquare, AlertTriangle, Bell, Wrench, Users } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black/90" />
        
        <div className="absolute right-[5%] top-[5%] h-[300px] w-[300px] rounded-full bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 blur-[120px] animate-pulse" />
        <div className="absolute left-[5%] top-[15%] h-[250px] w-[250px] rounded-full bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] h-[350px] w-[350px] rounded-full bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-yellow-500/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[15%] left-[15%] h-[280px] w-[280px] rounded-full bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 blur-[100px] animate-pulse" />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)]" />
      </div>

      <div className="container relative space-y-8 py-12">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-6 shadow-2xl backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
          <div className="relative flex flex-col space-y-2">
            <h1 className="bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
              Dashboard
            </h1>
            <p className="text-lg text-gray-400">
              Welcome to your strata management portal. Here's an overview of your building.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="group relative overflow-hidden border border-white/10 bg-black/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-200">Total Units</CardTitle>
              <Users className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold text-purple-400">24</div>
              <p className="text-xs text-gray-400">18 owner-occupied, 6 tenanted</p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border border-white/10 bg-black/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-200">Admin Fund</CardTitle>
              <DollarSign className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold text-emerald-400">$42,500</div>
              <p className="text-xs text-gray-400">+$3,200 from last quarter</p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border border-white/10 bg-black/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-200">Capital Works Fund</CardTitle>
              <DollarSign className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold text-blue-400">$128,750</div>
              <p className="text-xs text-gray-400">+$8,500 from last quarter</p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border border-white/10 bg-black/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-200">Open Requests</CardTitle>
              <Wrench className="h-4 w-4 text-orange-400" />
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold text-orange-400">7</div>
              <p className="text-xs text-gray-400">3 urgent, 4 standard</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="relative overflow-hidden border border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5" />
            <TabsTrigger 
              value="overview" 
              className="relative text-gray-400 data-[state=active]:bg-white/10 data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="upcoming" 
              className="relative text-gray-400 data-[state=active]:bg-white/10 data-[state=active]:text-white"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger 
              value="notices" 
              className="relative text-gray-400 data-[state=active]:bg-white/10 data-[state=active]:text-white"
            >
              Notices
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group relative overflow-hidden border border-white/10 bg-black/50 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-200">
                    <Wrench className="h-5 w-5 text-purple-400" />
                    Recent Maintenance
                  </CardTitle>
                  <CardDescription className="text-gray-400">Latest maintenance requests</CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Lobby Light Replacement</p>
                      <p className="text-sm text-muted-foreground">Unit: Common Area</p>
                    </div>
                    <span className="text-xs bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-100 px-3 py-1 rounded-full font-medium">
                      In Progress
                    </span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Water Leak in Basement</p>
                      <p className="text-sm text-muted-foreground">Unit: Parking Level 1</p>
                    </div>
                    <span className="text-xs bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-100 px-3 py-1 rounded-full font-medium">
                      Urgent
                    </span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Garden Maintenance</p>
                      <p className="text-sm text-muted-foreground">Unit: Common Area</p>
                    </div>
                    <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-100 px-3 py-1 rounded-full font-medium">
                      Completed
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                    <Link href="/maintenance">View All Requests</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border border-white/10 bg-black/50 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-200">
                    <DollarSign className="h-5 w-5 text-emerald-400" />
                    Financial Summary
                  </CardTitle>
                  <CardDescription className="text-gray-400">Current quarter overview</CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
                    <span className="text-sm font-medium">Levy Income</span>
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">$32,400</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-red-50 dark:bg-red-900/20">
                    <span className="text-sm font-medium">Expenses</span>
                    <span className="font-medium text-red-600 dark:text-red-400">$18,750</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-orange-50 dark:bg-orange-900/20">
                    <span className="text-sm font-medium">Outstanding Levies</span>
                    <span className="font-medium text-orange-600 dark:text-orange-400">$3,600</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                    <span className="text-sm font-medium">Insurance Premium</span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">$12,800</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                    <Link href="/finances">View Financial Details</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border border-white/10 bg-black/50 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-200">
                    <FileText className="h-5 w-5 text-blue-400" />
                    Recent Documents
                  </CardTitle>
                  <CardDescription className="text-gray-400">Latest uploaded documents</CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <div className="group p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-blue-400" />
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">Annual General Meeting Minutes</p>
                        <p className="text-xs text-muted-foreground">Added 2 days ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="group p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-blue-400" />
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">Building Insurance Certificate</p>
                        <p className="text-xs text-muted-foreground">Added 1 week ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="group p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-blue-400" />
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">Quarterly Financial Statement</p>
                        <p className="text-xs text-muted-foreground">Added 2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                    <Link href="/documents">View All Documents</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            <Card className="group relative overflow-hidden border border-white/10 bg-black/50 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-200">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  Upcoming Events
                </CardTitle>
                <CardDescription className="text-gray-400">Scheduled meetings and maintenance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <CalendarDays className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Strata Committee Meeting</p>
                    <p className="text-sm text-muted-foreground">April 15, 2025 - 7:00 PM</p>
                    <p className="text-sm text-primary">Building Common Room</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10">
                    <Wrench className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Fire Safety Inspection</p>
                    <p className="text-sm text-muted-foreground">April 22, 2025 - 9:00 AM to 3:00 PM</p>
                    <p className="text-sm text-orange-500">All Units</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <CalendarDays className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Annual General Meeting</p>
                    <p className="text-sm text-muted-foreground">May 10, 2025 - 6:30 PM</p>
                    <p className="text-sm text-primary">Building Common Room</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notices" className="space-y-4">
            <Alert className="relative overflow-hidden border-orange-500/20 bg-black/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent" />
              <AlertTriangle className="h-5 w-5 text-orange-400" />
              <AlertTitle className="text-orange-400">Important Notice</AlertTitle>
              <AlertDescription className="mt-2 text-gray-300">
                Water will be shut off on April 10th from 10:00 AM to 2:00 PM for essential maintenance.
              </AlertDescription>
            </Alert>

            <Alert className="relative overflow-hidden border-blue-500/20 bg-black/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent" />
              <Bell className="h-5 w-5 text-blue-400" />
              <AlertTitle className="text-blue-400">Reminder</AlertTitle>
              <AlertDescription className="mt-2 text-gray-300">
                Quarterly strata levies are due by April 15th. Please ensure timely payment to avoid late fees.
              </AlertDescription>
            </Alert>

            <Alert className="relative overflow-hidden border-emerald-500/20 bg-black/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent" />
              <MessageSquare className="h-5 w-5 text-emerald-400" />
              <AlertTitle className="text-emerald-400">Community Update</AlertTitle>
              <AlertDescription className="mt-2 text-gray-300">
                The building's new recycling program starts next week. Information packets have been delivered to all units.
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

