"use client";

import React from "react";
import Link from "next/link";
import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isLoggedIn?: boolean;
  variant?: "transparent" | "solid" | "light";
  className?: string;
}

export function Navbar({ 
  isLoggedIn = true, 
  variant = "transparent",
  className 
}: NavbarProps) {
  const isTransparent = variant === "transparent";
  const isLight = variant === "light";

  return (
    <nav 
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-12",
        !isTransparent && !isLight && "bg-[#013B26] text-white", // Dark/Solid variant
        isLight && "bg-background text-foreground border-b border-border", // Light variant
        className
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Trophy className={cn("h-6 w-6", isLight ? "text-foreground" : "text-[#D4AF37]")} />
        <span className={cn("font-serif text-xl font-bold tracking-tight", isLight ? "text-foreground" : "text-[#D4AF37]")}>
          InvitedGames
        </span>
      </div>
      
      {/* Navigation Links */}
      <div className={cn("hidden items-center gap-8 text-sm font-medium md:flex", isLight ? "text-muted-foreground" : "text-gray-200")}>
        <Link href="/events" className={cn("transition-colors", isLight ? "hover:text-foreground" : "hover:text-white")}>Events</Link>
        <Link href="#pricing" className={cn("transition-colors", isLight ? "hover:text-foreground" : "hover:text-white")}>Membership</Link>
        <Link href="/rankings" className={cn("transition-colors", isLight ? "hover:text-foreground" : "hover:text-white")}>Rankings</Link>
        <Link href="/shop" className={cn("transition-colors", isLight ? "hover:text-foreground" : "hover:text-white")}>Shop</Link>
      </div>

      {/* Auth / Action Buttons */}
      <div className="flex items-center gap-6">
        {isLoggedIn ? (
          // Logged In State
          <>
            <Link 
              href="/calendar" 
              className={cn("hidden text-sm font-medium transition-colors md:block", isLight ? "text-muted-foreground hover:text-foreground" : "text-gray-200 hover:text-white")}
            >
              Calendar
            </Link>
            <Link 
              href="/my-events" 
              className={cn("hidden text-sm font-medium transition-colors md:block", isLight ? "text-muted-foreground hover:text-foreground" : "text-gray-200 hover:text-white")}
            >
              My Events
            </Link>
            <Button 
              className={cn("rounded-md px-6 font-medium text-white", isLight ? "bg-background text-foreground border hover:bg-accent" : "bg-[#D97706] hover:bg-[#B45309]")}
            >
              Danny
            </Button>
          </>
        ) : (
          // Logged Out State
          <Button 
            className="rounded-md bg-[#D97706] px-6 font-medium text-white hover:bg-[#B45309]"
          >
            Member Portal
          </Button>
        )}
      </div>
    </nav>
  );
}
