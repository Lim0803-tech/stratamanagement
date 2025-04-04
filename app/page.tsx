"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { CalendarDays, DollarSign, FileText, MessageSquare, AlertTriangle, Bell, Wrench, Users } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
        
        <div className="absolute right-[5%] top-[5%] h-[300px] w-[300px] rounded-full bg-gradient-to-br from-purple-100 via-pink-50 to-white blur-[120px]" />
        <div className="absolute left-[5%] top-[15%] h-[250px] w-[250px] rounded-full bg-gradient-to-br from-blue-50 via-cyan-50 to-white blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[350px] w-[350px] rounded-full bg-gradient-to-br from-orange-50 via-amber-50 to-white blur-[120px]" />
        <div className="absolute bottom-[15%] left-[15%] h-[280px] w-[280px] rounded-full bg-gradient-to-br from-green-50 via-emerald-50 to-white blur-[100px]" />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="container relative space-y-8 py-12">
        <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-white" />
          <div className="relative flex flex-col space-y-2">
            <h1 className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
              Dashboard
            </h1>
            <p className="text-lg text-gray-600">
              Welcome to your strata management portal. Here's an overview of your building.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="group relative overflow-hidden border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-white opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-800">Total Units</CardTitle>
              <Users className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold text-purple-600">24</div>
              <p className="text-xs text-gray-600">18 owner-occupied, 6 tenanted</p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-white opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-800">Admin Fund</CardTitle>
              <DollarSign className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold text-emerald-600">$42,500</div>
              <p className="text-xs text-gray-600">+$3,200 from last quarter</p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-800">Capital Works Fund</CardTitle>
              <DollarSign className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold text-blue-600">$128,750</div>
              <p className="text-xs text-gray-600">+$8,500 from last quarter</p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-white opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-800">Open Requests</CardTitle>
              <Wrench className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold text-orange-600">7</div>
              <p className="text-xs text-gray-600">3 urgent, 4 standard</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="relative overflow-hidden border border-gray-100 bg-white">
            <TabsTrigger 
              value="overview" 
              className="relative text-gray-600 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="upcoming" 
              className="relative text-gray-600 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger 
              value="notices" 
              className="relative text-gray-600 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900"
            >
              Notices
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group relative overflow-hidden border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-white opacity-0 transition-opacity group-hover:opacity-100" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <Wrench className="h-5 w-5 text-purple-600" />
                    Recent Maintenance
                  </CardTitle>
                  <CardDescription className="text-gray-600">Latest maintenance requests</CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-800">Lobby Light Replacement</p>
                      <p className="text-sm text-gray-600">Unit: Common Area</p>
                    </div>
                    <span className="text-xs bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full font-medium">
                      In Progress
                    </span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-800">Water Leak in Basement</p>
                      <p className="text-sm text-gray-600">Unit: Parking Level 1</p>
                    </div>
                    <span className="text-xs bg-red-50 text-red-700 px-3 py-1 rounded-full font-medium">
                      Urgent
                    </span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-800">Garden Maintenance</p>
                      <p className="text-sm text-gray-600">Unit: Common Area</p>
                    </div>
                    <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">
                      Completed
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                    <Link href="/maintenance">View All Requests</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-white opacity-0 transition-opacity group-hover:opacity-100" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <DollarSign className="h-5 w-5 text-emerald-600" />
                    Financial Summary
                  </CardTitle>
                  <CardDescription className="text-gray-600">Current quarter overview</CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-emerald-50">
                    <span className="text-sm font-medium text-emerald-600">Levy Income</span>
                    <span className="font-medium text-emerald-600">$32,400</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-red-50">
                    <span className="text-sm font-medium text-red-600">Expenses</span>
                    <span className="font-medium text-red-600">$18,750</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-orange-50">
                    <span className="text-sm font-medium text-orange-600">Outstanding Levies</span>
                    <span className="font-medium text-orange-600">$3,600</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-blue-50">
                    <span className="text-sm font-medium text-blue-600">Insurance Premium</span>
                    <span className="font-medium text-blue-600">$12,800</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                    <Link href="/finances">View Financial Details</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-white opacity-0 transition-opacity group-hover:opacity-100" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Recent Documents
                  </CardTitle>
                  <CardDescription className="text-gray-600">Latest uploaded documents</CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <div className="group p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">Annual General Meeting Minutes</p>
                        <p className="text-xs text-gray-600">Added 2 days ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="group p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">Building Insurance Certificate</p>
                        <p className="text-xs text-gray-600">Added 1 week ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="group p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">Quarterly Financial Statement</p>
                        <p className="text-xs text-gray-600">Added 2 weeks ago</p>
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
            <Card className="group relative overflow-hidden border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  Upcoming Events
                </CardTitle>
                <CardDescription className="text-gray-600">Scheduled meetings and maintenance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <CalendarDays className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Strata Committee Meeting</p>
                    <p className="text-sm text-gray-600">April 15, 2025 - 7:00 PM</p>
                    <p className="text-sm text-primary">Building Common Room</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10">
                    <Wrench className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Fire Safety Inspection</p>
                    <p className="text-sm text-gray-600">April 22, 2025 - 9:00 AM to 3:00 PM</p>
                    <p className="text-sm text-orange-500">All Units</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <CalendarDays className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Annual General Meeting</p>
                    <p className="text-sm text-gray-600">May 10, 2025 - 6:30 PM</p>
                    <p className="text-sm text-primary">Building Common Room</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notices" className="space-y-4">
            <Alert className="relative overflow-hidden border-orange-100 bg-orange-50">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-orange-800">Important Notice</AlertTitle>
              <AlertDescription className="mt-2 text-orange-700">
                Water will be shut off on April 10th from 10:00 AM to 2:00 PM for essential maintenance.
              </AlertDescription>
            </Alert>

            <Alert className="relative overflow-hidden border-blue-100 bg-blue-50">
              <Bell className="h-5 w-5 text-blue-600" />
              <AlertTitle className="text-blue-800">Reminder</AlertTitle>
              <AlertDescription className="mt-2 text-blue-700">
                Quarterly strata levies are due by April 15th. Please ensure timely payment to avoid late fees.
              </AlertDescription>
            </Alert>

            <Alert className="relative overflow-hidden border-emerald-100 bg-emerald-50">
              <MessageSquare className="h-5 w-5 text-emerald-600" />
              <AlertTitle className="text-emerald-800">Community Update</AlertTitle>
              <AlertDescription className="mt-2 text-emerald-700">
                The building's new recycling program starts next week. Information packets have been delivered to all units.
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

