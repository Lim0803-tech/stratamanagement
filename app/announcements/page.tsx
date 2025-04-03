import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Plus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AnnouncementsPage() {
  return (
    <div className="container space-y-8 py-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Announcements</h1>
        <p className="text-muted-foreground">View and manage building announcements and notices.</p>
      </div>

      <div className="flex justify-end">
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Announcement
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Announcements</TabsTrigger>
          <TabsTrigger value="important">Important</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Announcements</CardTitle>
              <CardDescription>Recent announcements for all residents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="flex flex-col gap-2 p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2 items-center">
                      <Bell className="h-5 w-5 text-red-500" />
                      <h3 className="font-medium">Water Shutdown Notice</h3>
                    </div>
                    <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">Important</Badge>
                  </div>
                  <p className="text-sm">
                    Water will be shut off on April 10th from 10:00 AM to 2:00 PM for essential maintenance work on the
                    main water supply line. Please ensure you have stored sufficient water for your needs during this
                    period.
                  </p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Posted: April 3, 2025</span>
                    <span>By: Building Manager</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2 items-center">
                      <Bell className="h-5 w-5 text-yellow-500" />
                      <h3 className="font-medium">Quarterly Levy Payment Reminder</h3>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                      Financial
                    </Badge>
                  </div>
                  <p className="text-sm">
                    This is a friendly reminder that quarterly strata levies are due by April 15th. Please ensure timely
                    payment to avoid late fees. If you have any questions about your levy amount or payment methods,
                    please contact the treasurer.
                  </p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Posted: April 1, 2025</span>
                    <span>By: John Smith (Treasurer)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2 items-center">
                      <Bell className="h-5 w-5 text-blue-500" />
                      <h3 className="font-medium">New Recycling Program</h3>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">Community</Badge>
                  </div>
                  <p className="text-sm">
                    We're excited to announce the launch of our new building recycling program starting next week.
                    Information packets have been delivered to all units with details on the new sorting system and
                    collection schedule. Let's work together to reduce our environmental footprint!
                  </p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Posted: March 28, 2025</span>
                    <span>By: Jane Doe (Secretary)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2 items-center">
                      <Bell className="h-5 w-5 text-purple-500" />
                      <h3 className="font-medium">Elevator Maintenance Schedule</h3>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                      Maintenance
                    </Badge>
                  </div>
                  <p className="text-sm">
                    The annual elevator maintenance is scheduled for April 5th. Elevator 1 will be serviced from 9:00 AM
                    to 12:00 PM, and Elevator 2 from 1:00 PM to 4:00 PM. Please plan accordingly and use the stairs
                    during these times if possible.
                  </p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Posted: March 25, 2025</span>
                    <span>By: Building Manager</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2 items-center">
                      <Bell className="h-5 w-5 text-green-500" />
                      <h3 className="font-medium">Community Garden Day</h3>
                    </div>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Community
                    </Badge>
                  </div>
                  <p className="text-sm">
                    Join us for our bi-annual Community Garden Day on April 20th from 10:00 AM to 2:00 PM. We'll be
                    planting new flowers and maintaining our shared garden spaces. All residents are welcome to
                    participate. Refreshments will be provided!
                  </p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Posted: March 20, 2025</span>
                    <span>By: Sarah Johnson (Chairperson)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="important" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Important Announcements</CardTitle>
              <CardDescription>Critical notices requiring immediate attention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col gap-2 p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex gap-2 items-center">
                    <Bell className="h-5 w-5 text-red-500" />
                    <h3 className="font-medium">Water Shutdown Notice</h3>
                  </div>
                  <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">Important</Badge>
                </div>
                <p className="text-sm">
                  Water will be shut off on April 10th from 10:00 AM to 2:00 PM for essential maintenance work on the
                  main water supply line. Please ensure you have stored sufficient water for your needs during this
                  period.
                </p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Posted: April 3, 2025</span>
                  <span>By: Building Manager</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Announcements</CardTitle>
              <CardDescription>Updates about building maintenance and repairs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col gap-2 p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex gap-2 items-center">
                    <Bell className="h-5 w-5 text-purple-500" />
                    <h3 className="font-medium">Elevator Maintenance Schedule</h3>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                    Maintenance
                  </Badge>
                </div>
                <p className="text-sm">
                  The annual elevator maintenance is scheduled for April 5th. Elevator 1 will be serviced from 9:00 AM
                  to 12:00 PM, and Elevator 2 from 1:00 PM to 4:00 PM. Please plan accordingly and use the stairs during
                  these times if possible.
                </p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Posted: March 25, 2025</span>
                  <span>By: Building Manager</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="community" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Community Announcements</CardTitle>
              <CardDescription>Updates about community events and initiatives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col gap-2 p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex gap-2 items-center">
                    <Bell className="h-5 w-5 text-blue-500" />
                    <h3 className="font-medium">New Recycling Program</h3>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">Community</Badge>
                </div>
                <p className="text-sm">
                  We're excited to announce the launch of our new building recycling program starting next week.
                  Information packets have been delivered to all units with details on the new sorting system and
                  collection schedule. Let's work together to reduce our environmental footprint!
                </p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Posted: March 28, 2025</span>
                  <span>By: Jane Doe (Secretary)</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex gap-2 items-center">
                    <Bell className="h-5 w-5 text-green-500" />
                    <h3 className="font-medium">Community Garden Day</h3>
                  </div>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Community</Badge>
                </div>
                <p className="text-sm">
                  Join us for our bi-annual Community Garden Day on April 20th from 10:00 AM to 2:00 PM. We'll be
                  planting new flowers and maintaining our shared garden spaces. All residents are welcome to
                  participate. Refreshments will be provided!
                </p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Posted: March 20, 2025</span>
                  <span>By: Sarah Johnson (Chairperson)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

