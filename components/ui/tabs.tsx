"use client"

import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as React from "react"

import { cn } from "@/lib/shadcn.utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "flex space-x-8 border-b border-gray-200 pb-0", // Added subtle bottom border for the whole tab list
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  badge?: number | string;
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, badge, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative pb-3 px-1 text-gray-500",
      "data-[state=active]:text-red-600 data-[state=active]:font-medium",
      "transition-colors duration-200 ease-in-out",
      "focus-visible:outline-none",
      "data-[state=active]:border-b border-red-500",
      className
    )}
    {...props}
  >
    <div className="flex items-center gap-2 relative z-10"> {/* Added z-10 here */}
      {children}
      {badge !== undefined && (
        <span 
          className={cn(
            "inline-flex items-center justify-center px-2 py-0.5 text-xs rounded-full",
            "bg-red-100 text-red-800",
            "data-[state=active]:inline-flex",
            "transition-all duration-200 ease-in-out"
          )}
        >
          {badge}
        </span>
      )}
    </div>
    
    {/* Active tab underline - added z-20 to ensure it appears above other borders */}
    <div 
      className={cn(
        "absolute bottom-0 left-0 right-0 h-0.5 bg-transparent z-20",
        "data-[state=active]:bg-red-600",
        "transition-all duration-200 ease-in-out"
      )}
    />
  </TabsPrimitive.Trigger>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 focus-visible:outline-none",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsContent, TabsList, TabsTrigger }