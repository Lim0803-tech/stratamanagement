import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MaintenanceRequestForm } from "@/components/maintenance-request-form"

export default function MaintenancePage() {
  return (
    <div className="container space-y-8 py-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Maintenance Requests</h1>
        <p className="text-muted-foreground">View and manage maintenance requests for your building.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <Tabs defaultValue="active" className="space-y-4">
            <TabsList>
              <TabsTrigger value="active">Active Requests</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="all">All Requests</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4">
              <MaintenanceRequestCard
                title="Water Leak in Basement"
                description="There is water leaking from the ceiling near parking spot #12."
                unit="Common Area - Parking Level 1"
                date="April 1, 2025"
                status="urgent"
                assignedTo="Plumbing Experts Pty Ltd"
                comments={[
                  {
                    author: "John Smith (Building Manager)",
                    text: "Plumber scheduled for tomorrow morning.",
                    date: "April 2, 2025",
                  },
                ]}
              />

              <MaintenanceRequestCard
                title="Lobby Light Replacement"
                description="Three lights in the main lobby are not working and need replacement."
                unit="Common Area - Ground Floor"
                date="March 28, 2025"
                status="in-progress"
                assignedTo="Sydney Electrical Services"
                comments={[
                  {
                    author: "Jane Doe (Secretary)",
                    text: "Electrician has ordered parts, scheduled for this Friday.",
                    date: "March 30, 2025",
                  },
                ]}
              />

              <MaintenanceRequestCard
                title="Intercom System Issues"
                description="The intercom in unit 14 is not connecting to the main entrance."
                unit="Unit 14"
                date="March 25, 2025"
                status="pending"
                assignedTo="Unassigned"
                comments={[]}
              />

              <MaintenanceRequestCard
                title="Gym Equipment Maintenance"
                description="The treadmill is making unusual noises and sometimes stops working."
                unit="Common Area - Gym"
                date="March 22, 2025"
                status="scheduled"
                assignedTo="Fitness Equipment Repairs"
                comments={[
                  { author: "Building Manager", text: "Technician scheduled for April 5th.", date: "March 24, 2025" },
                ]}
              />
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              <MaintenanceRequestCard
                title="Garden Maintenance"
                description="Regular trimming and maintenance of the common garden areas."
                unit="Common Area - Gardens"
                date="March 15, 2025"
                status="completed"
                assignedTo="Green Thumb Landscaping"
                comments={[
                  { author: "Building Manager", text: "Work completed satisfactorily.", date: "March 18, 2025" },
                ]}
              />

              <MaintenanceRequestCard
                title="Elevator Service"
                description="Annual maintenance service for both elevators."
                unit="Common Area - Elevators"
                date="March 10, 2025"
                status="completed"
                assignedTo="Otis Elevator Company"
                comments={[
                  {
                    author: "Technician",
                    text: "Service completed. Both elevators in good working condition.",
                    date: "March 12, 2025",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="all" className="space-y-4">
              <p className="text-sm text-muted-foreground mb-4">Showing all maintenance requests (6)</p>

              <MaintenanceRequestCard
                title="Water Leak in Basement"
                description="There is water leaking from the ceiling near parking spot #12."
                unit="Common Area - Parking Level 1"
                date="April 1, 2025"
                status="urgent"
                assignedTo="Plumbing Experts Pty Ltd"
                comments={[
                  {
                    author: "John Smith (Building Manager)",
                    text: "Plumber scheduled for tomorrow morning.",
                    date: "April 2, 2025",
                  },
                ]}
              />

              <MaintenanceRequestCard
                title="Lobby Light Replacement"
                description="Three lights in the main lobby are not working and need replacement."
                unit="Common Area - Ground Floor"
                date="March 28, 2025"
                status="in-progress"
                assignedTo="Sydney Electrical Services"
                comments={[
                  {
                    author: "Jane Doe (Secretary)",
                    text: "Electrician has ordered parts, scheduled for this Friday.",
                    date: "March 30, 2025",
                  },
                ]}
              />

              <MaintenanceRequestCard
                title="Intercom System Issues"
                description="The intercom in unit 14 is not connecting to the main entrance."
                unit="Unit 14"
                date="March 25, 2025"
                status="pending"
                assignedTo="Unassigned"
                comments={[]}
              />

              <MaintenanceRequestCard
                title="Gym Equipment Maintenance"
                description="The treadmill is making unusual noises and sometimes stops working."
                unit="Common Area - Gym"
                date="March 22, 2025"
                status="scheduled"
                assignedTo="Fitness Equipment Repairs"
                comments={[
                  { author: "Building Manager", text: "Technician scheduled for April 5th.", date: "March 24, 2025" },
                ]}
              />

              <MaintenanceRequestCard
                title="Garden Maintenance"
                description="Regular trimming and maintenance of the common garden areas."
                unit="Common Area - Gardens"
                date="March 15, 2025"
                status="completed"
                assignedTo="Green Thumb Landscaping"
                comments={[
                  { author: "Building Manager", text: "Work completed satisfactorily.", date: "March 18, 2025" },
                ]}
              />

              <MaintenanceRequestCard
                title="Elevator Service"
                description="Annual maintenance service for both elevators."
                unit="Common Area - Elevators"
                date="March 10, 2025"
                status="completed"
                assignedTo="Otis Elevator Company"
                comments={[
                  {
                    author: "Technician",
                    text: "Service completed. Both elevators in good working condition.",
                    date: "March 12, 2025",
                  },
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>

        <div className="md:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>Submit New Request</CardTitle>
              <CardDescription>Report a maintenance issue in your unit or common areas</CardDescription>
            </CardHeader>
            <CardContent>
              <MaintenanceRequestForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

interface Comment {
  author: string
  text: string
  date: string
}

interface MaintenanceRequestCardProps {
  title: string
  description: string
  unit: string
  date: string
  status: "urgent" | "in-progress" | "pending" | "scheduled" | "completed"
  assignedTo: string
  comments: Comment[]
}

function MaintenanceRequestCard({
  title,
  description,
  unit,
  date,
  status,
  assignedTo,
  comments,
}: MaintenanceRequestCardProps) {
  const statusColors = {
    urgent: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100",
    "in-progress": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100",
    pending: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100",
    scheduled: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100",
    completed: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100",
  }

  const statusLabels = {
    urgent: "Urgent",
    "in-progress": "In Progress",
    pending: "Pending",
    scheduled: "Scheduled",
    completed: "Completed",
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
              {unit} • Reported on {date}
            </CardDescription>
          </div>
          <Badge className={statusColors[status]}>{statusLabels[status]}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{description}</p>
        <div className="text-sm">
          <p>
            <span className="font-medium">Assigned to:</span> {assignedTo}
          </p>
        </div>

        {comments.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Comments:</h4>
            <div className="space-y-2">
              {comments.map((comment, index) => (
                <div key={index} className="bg-muted p-2 rounded-md text-xs">
                  <p className="font-medium">
                    {comment.author} • {comment.date}
                  </p>
                  <p>{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          Add Comment
        </Button>
        <Button size="sm">Update Status</Button>
      </CardFooter>
    </Card>
  )
}

