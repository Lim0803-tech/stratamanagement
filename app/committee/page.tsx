import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, FileText } from "lucide-react"
import Link from "next/link"

export default function CommitteePage() {
  return (
    <div className="container space-y-8 py-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Strata Committee</h1>
        <p className="text-muted-foreground">Information about your strata committee members and responsibilities.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CommitteeMemberCard
          name="Sarah Johnson"
          unit="Unit 101"
          position="Chairperson"
          email="sarah.j@example.com"
          phone="0412 345 678"
          bio="Sarah has been a resident for 5 years and is serving her second term as Chairperson. She has a background in property management."
          avatarFallback="SJ"
        />

        <CommitteeMemberCard
          name="Michael Chen"
          unit="Unit 102"
          position="Secretary"
          email="m.chen@example.com"
          phone="0423 456 789"
          bio="Michael is a lawyer specializing in property law and has been on the committee for 3 years. He handles meeting minutes and correspondence."
          avatarFallback="MC"
        />

        <CommitteeMemberCard
          name="Jessica Lee"
          unit="Unit 202"
          position="Treasurer"
          email="j.lee@example.com"
          phone="0434 567 890"
          bio="Jessica is an accountant with 10 years of experience. She manages the strata finances and prepares financial reports."
          avatarFallback="JL"
        />

        <CommitteeMemberCard
          name="David Thompson"
          unit="Unit 201"
          position="Committee Member"
          email="d.thompson@example.com"
          phone="0445 678 901"
          bio="David has a background in engineering and oversees building maintenance projects and contractor management."
          avatarFallback="DT"
        />

        <CommitteeMemberCard
          name="Emma Wilson"
          unit="Unit 103"
          position="Committee Member"
          email="e.wilson@example.com"
          phone="0456 789 012"
          bio="Emma works in communications and helps with resident communications and community events."
          avatarFallback="EW"
        />
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Committee Responsibilities</CardTitle>
          <CardDescription>As defined by the Strata Schemes Management Act (2015)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Chairperson</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Preside at all meetings of the strata committee and the owners corporation</li>
              <li>Establish meeting procedures and ensure orderly conduct</li>
              <li>Act as the principal spokesperson for the strata committee</li>
              <li>Ensure decisions of the strata committee are implemented</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Secretary</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Prepare and distribute meeting notices, agendas, and minutes</li>
              <li>Maintain the strata roll and records of the owners corporation</li>
              <li>Handle correspondence on behalf of the owners corporation</li>
              <li>Ensure compliance with record-keeping requirements</li>
              <li>Lodge annual returns and other documents with NSW Fair Trading</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Treasurer</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Notify owners of levy contributions</li>
              <li>Receive, acknowledge, and account for money paid to the owners corporation</li>
              <li>Prepare financial statements and budgets</li>
              <li>Maintain financial records and manage bank accounts</li>
              <li>Arrange for the audit of financial statements</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Committee Members</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Attend and participate in committee meetings</li>
              <li>Make decisions on behalf of the owners corporation</li>
              <li>Oversee the management of common property</li>
              <li>Ensure compliance with by-laws</li>
              <li>Act in the best interests of all owners</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Committee Documents</CardTitle>
          <CardDescription>Important documents related to the strata committee</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <FileText className="h-8 w-8 text-muted-foreground" />
                <div>
                  <p className="font-medium">Strata Committee Code of Conduct</p>
                  <p className="text-sm text-muted-foreground">Guidelines for committee member conduct</p>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/documents">View</Link>
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <FileText className="h-8 w-8 text-muted-foreground" />
                <div>
                  <p className="font-medium">Committee Meeting Schedule</p>
                  <p className="text-sm text-muted-foreground">2025 meeting dates and locations</p>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/meetings">View</Link>
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <FileText className="h-8 w-8 text-muted-foreground" />
                <div>
                  <p className="font-medium">Strata Schemes Management Act</p>
                  <p className="text-sm text-muted-foreground">NSW legislation governing strata schemes</p>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://www.legislation.nsw.gov.au/view/html/inforce/current/act-2015-050" target="_blank">
                  View
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface CommitteeMemberCardProps {
  name: string
  unit: string
  position: string
  email: string
  phone: string
  bio: string
  avatarFallback: string
}

function CommitteeMemberCard({ name, unit, position, email, phone, bio, avatarFallback }: CommitteeMemberCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center mb-4">
          <Avatar className="h-20 w-20 mb-4">
            <AvatarImage src="/placeholder-user.jpg" alt={name} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <h3 className="font-medium text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground">{unit}</p>
          <Badge className="mt-2">{position}</Badge>
        </div>

        <div className="space-y-4">
          <p className="text-sm">{bio}</p>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{phone}</span>
            </div>
          </div>

          <Button variant="outline" size="sm" className="w-full">
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

