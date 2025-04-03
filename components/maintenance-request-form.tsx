"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function MaintenanceRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="space-y-4 text-center">
        <div className="rounded-full bg-green-100 dark:bg-green-900 p-3 w-12 h-12 flex items-center justify-center mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-green-600 dark:text-green-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-medium text-lg">Request Submitted</h3>
        <p className="text-sm text-muted-foreground">
          Your maintenance request has been submitted successfully. The building manager will review it shortly.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-2">
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Issue Title</Label>
        <Input id="title" placeholder="Brief description of the issue" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="my-unit">My Unit</SelectItem>
            <SelectItem value="common-hallway">Common Hallway</SelectItem>
            <SelectItem value="lobby">Lobby</SelectItem>
            <SelectItem value="parking">Parking Area</SelectItem>
            <SelectItem value="gym">Gym</SelectItem>
            <SelectItem value="pool">Pool Area</SelectItem>
            <SelectItem value="garden">Garden/Outdoor Area</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Detailed Description</Label>
        <Textarea id="description" placeholder="Please provide details about the issue" rows={4} required />
      </div>

      <div className="space-y-2">
        <Label>Priority</Label>
        <RadioGroup defaultValue="normal">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="urgent" id="urgent" />
            <Label htmlFor="urgent" className="font-normal">
              Urgent (Safety/Security Issue)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="high" id="high" />
            <Label htmlFor="high" className="font-normal">
              High (Affects Daily Living)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="normal" id="normal" />
            <Label htmlFor="normal" className="font-normal">
              Normal (Standard Repair)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="low" id="low" />
            <Label htmlFor="low" className="font-normal">
              Low (Minor Issue)
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact">Contact Number</Label>
        <Input id="contact" type="tel" placeholder="Your phone number" />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  )
}

