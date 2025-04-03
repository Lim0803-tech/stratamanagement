import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Download, FileText, PieChart, TrendingUp } from "lucide-react"

export default function FinancesPage() {
  return (
    <div className="container space-y-8 py-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Financial Management</h1>
        <p className="text-muted-foreground">Track and manage the financial health of your strata scheme.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Admin Fund Balance</CardTitle>
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
            <CardTitle className="text-sm font-medium">Outstanding Levies</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,600</div>
            <p className="text-xs text-muted-foreground">3 units with outstanding payments</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Annual Budget</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$175,000</div>
            <p className="text-xs text-muted-foreground">$43,750 spent this quarter</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="levies" className="space-y-4">
        <TabsList>
          <TabsTrigger value="levies">Levy Payments</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="reports">Financial Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="levies" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Levy Payments</CardTitle>
              <CardDescription>Track quarterly levy payments for all units</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Unit</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Unit 101</TableCell>
                    <TableCell>Sarah Johnson</TableCell>
                    <TableCell>$1,250</TableCell>
                    <TableCell>April 15, 2025</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Paid</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Unit 102</TableCell>
                    <TableCell>Michael Chen</TableCell>
                    <TableCell>$1,250</TableCell>
                    <TableCell>April 15, 2025</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Paid</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Unit 103</TableCell>
                    <TableCell>Emma Wilson</TableCell>
                    <TableCell>$1,250</TableCell>
                    <TableCell>April 15, 2025</TableCell>
                    <TableCell>
                      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                        Pending
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Unit 201</TableCell>
                    <TableCell>David Thompson</TableCell>
                    <TableCell>$1,350</TableCell>
                    <TableCell>April 15, 2025</TableCell>
                    <TableCell>
                      <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">Overdue</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Unit 202</TableCell>
                    <TableCell>Jessica Lee</TableCell>
                    <TableCell>$1,350</TableCell>
                    <TableCell>April 15, 2025</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Paid</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Expenses</CardTitle>
              <CardDescription>Track and categorize building expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Fund</TableHead>
                    <TableHead className="text-right">Receipt</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>April 1, 2025</TableCell>
                    <TableCell>Building Insurance Premium</TableCell>
                    <TableCell>Insurance</TableCell>
                    <TableCell>$12,800</TableCell>
                    <TableCell>Admin Fund</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>March 28, 2025</TableCell>
                    <TableCell>Gardening Services</TableCell>
                    <TableCell>Maintenance</TableCell>
                    <TableCell>$850</TableCell>
                    <TableCell>Admin Fund</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>March 15, 2025</TableCell>
                    <TableCell>Elevator Maintenance</TableCell>
                    <TableCell>Maintenance</TableCell>
                    <TableCell>$1,200</TableCell>
                    <TableCell>Admin Fund</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>March 10, 2025</TableCell>
                    <TableCell>Lobby Renovation (Phase 1)</TableCell>
                    <TableCell>Capital Works</TableCell>
                    <TableCell>$15,000</TableCell>
                    <TableCell>Capital Works Fund</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>March 5, 2025</TableCell>
                    <TableCell>Electricity Bill</TableCell>
                    <TableCell>Utilities</TableCell>
                    <TableCell>$1,850</TableCell>
                    <TableCell>Admin Fund</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="budget" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Annual Budget</CardTitle>
              <CardDescription>Budget allocation for the current financial year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-2">Admin Fund Budget</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Utilities (Electricity, Water)</span>
                      <span className="font-medium">$24,000</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "35%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">$8,400 spent (35%)</p>
                  </div>

                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between items-center">
                      <span>Insurance</span>
                      <span className="font-medium">$15,000</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">$12,800 spent (85%)</p>
                  </div>

                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between items-center">
                      <span>Cleaning & Waste Management</span>
                      <span className="font-medium">$18,000</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">$4,500 spent (25%)</p>
                  </div>

                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between items-center">
                      <span>Regular Maintenance</span>
                      <span className="font-medium">$28,000</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">$8,400 spent (30%)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Capital Works Fund Budget</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Lobby Renovation</span>
                      <span className="font-medium">$45,000</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "33%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">$15,000 spent (33%)</p>
                  </div>

                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between items-center">
                      <span>Roof Repairs</span>
                      <span className="font-medium">$30,000</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "0%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">$0 spent (0%)</p>
                  </div>

                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between items-center">
                      <span>Security System Upgrade</span>
                      <span className="font-medium">$15,000</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "0%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">$0 spent (0%)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Reports</CardTitle>
              <CardDescription>Access financial statements and reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Q1 2025 Financial Statement</p>
                      <p className="text-sm text-muted-foreground">January - March 2025</p>
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
                      <p className="font-medium">Q4 2024 Financial Statement</p>
                      <p className="text-sm text-muted-foreground">October - December 2024</p>
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
                      <p className="font-medium">Annual Financial Report</p>
                      <p className="text-sm text-muted-foreground">Financial Year 2024</p>
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
                      <p className="font-medium">10-Year Capital Works Plan</p>
                      <p className="text-sm text-muted-foreground">2025-2035 Projection</p>
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
                      <p className="font-medium">Audit Report</p>
                      <p className="text-sm text-muted-foreground">Financial Year 2024</p>
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

