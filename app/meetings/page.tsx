import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Download, FileText, Plus } from "lucide-react"

export default function MeetingsPage() {
  return (
    <div className="container space-y-8 py-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Meetings</h1>
        <p className="text-muted-foreground">Schedule and manage strata committee and general meetings.</p>
      </div>

      <div className="flex justify-end">
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Schedule Meeting
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Meetings</TabsTrigger>
          <TabsTrigger value="past">Past Meetings</TabsTrigger>
          <TabsTrigger value="minutes">Meeting Minutes</TabsTrigger>
          <TabsTrigger value="agendas">Meeting Agendas</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Meetings</CardTitle>
              <CardDescription>Scheduled strata committee and general meetings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <CalendarDays className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h3 className="font-medium">Strata Committee Meeting</h3>
                        <p className="text-sm text-muted-foreground">April 15, 2025 - 7:00 PM - Building Common Room</p>
                      </div>
                      <Badge>Committee</Badge>
                    </div>
                    <p className="text-sm">
                      Quarterly committee meeting to discuss building maintenance, financial updates, and upcoming
                      projects.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Button variant="outline" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        View Agenda
                      </Button>
                      <Button variant="outline" size="sm">
                        RSVP
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <CalendarDays className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h3 className="font-medium">Annual General Meeting</h3>
                        <p className="text-sm text-muted-foreground">May 10, 2025 - 6:30 PM - Building Common Room</p>
                      </div>
                      <Badge>General Meeting</Badge>
                    </div>
                    <p className="text-sm">
                      Annual general meeting for all owners to review the past year, approve the budget for the coming
                      year, and elect the new strata committee.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Button variant="outline" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        View Agenda
                      </Button>
                      <Button variant="outline" size="sm">
                        RSVP
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Past Meetings</CardTitle>
              <CardDescription>Previous strata committee and general meetings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                    <CalendarDays className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h3 className="font-medium">Strata Committee Meeting</h3>
                        <p className="text-sm text-muted-foreground">January 15, 2025 - Building Common Room</p>
                      </div>
                      <Badge variant="outline">Committee</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Button variant="outline" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        View Minutes
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                    <CalendarDays className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h3 className="font-medium">Extraordinary General Meeting</h3>
                        <p className="text-sm text-muted-foreground">December 10, 2024 - Building Common Room</p>
                      </div>
                      <Badge variant="outline">General Meeting</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Button variant="outline" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        View Minutes
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                    <CalendarDays className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h3 className="font-medium">Strata Committee Meeting</h3>
                        <p className="text-sm text-muted-foreground">October 15, 2024 - Building Common Room</p>
                      </div>
                      <Badge variant="outline">Committee</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Button variant="outline" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        View Minutes
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="minutes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Meeting Minutes</CardTitle>
              <CardDescription>Records of past meetings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Strata Committee Meeting Minutes</p>
                      <p className="text-sm text-muted-foreground">January 15, 2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Extraordinary General Meeting Minutes</p>
                      <p className="text-sm text-muted-foreground">December 10, 2024</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Strata Committee Meeting Minutes</p>
                      <p className="text-sm text-muted-foreground">October 15, 2024</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Annual General Meeting Minutes</p>
                      <p className="text-sm text-muted-foreground">May 12, 2024</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="agendas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Meeting Agendas</CardTitle>
              <CardDescription>Agendas for upcoming meetings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Strata Committee Meeting Agenda</p>
                      <p className="text-sm text-muted-foreground">April 15, 2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Annual General Meeting Agenda</p>
                      <p className="text-sm text-muted-foreground">May 10, 2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

