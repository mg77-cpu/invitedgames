import React from "react";
import { 
  ShoppingBag, 
  Wind, 
  Shield, 
  Shirt, 
  Truck, 
  CheckCircle,
  Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Section */}
      <header className="bg-[#1a8e48] text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingBag className="h-8 w-8" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Invited Games Shop</h1>
          </div>
          <p className="max-w-2xl text-lg md:text-xl opacity-90 leading-relaxed">
            Premium athletic apparel for elite competition. Gear up with official Invited 
            Games merchandise featuring customizable options for your club or team.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 space-y-16">
        {/* Shop by Category Section */}
        <section>
          <h2 className="text-3xl font-serif font-bold mb-8 text-foreground">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard 
              icon={<Wind className="h-6 w-6 text-emerald-600" />}
              iconBg="bg-emerald-100"
              title="Warm-Up Kits"
              description="Professional warm-up suits for pre-game preparation"
              buttonText="Browse Warm-Up Kits"
            />
            <CategoryCard 
              icon={<Shield className="h-6 w-6 text-amber-600" />}
              iconBg="bg-amber-100"
              title="Game Day Uniforms"
              description="Official competition jerseys and shorts"
              buttonText="Browse Game Day Uniforms"
            />
            <CategoryCard 
              icon={<Shirt className="h-6 w-6 text-blue-600" />}
              iconBg="bg-blue-100"
              title="Sweaters & Tracksuits"
              description="Comfortable apparel for training and travel"
              buttonText="Browse Sweaters & Tracksuits"
            />
            <CategoryCard 
              icon={<Shirt className="h-6 w-6 text-slate-600" />}
              iconBg="bg-slate-100"
              title="T-Shirts"
              description="Casual wear and team spirit apparel"
              buttonText="Browse T-Shirts"
            />
          </div>
        </section>

        {/* Featured Products Section */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-serif font-bold text-foreground">Featured Products</h2>
            <Button variant="outline" className="hidden md:flex">View All Products</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductPlaceholder />
            <ProductPlaceholder />
            <ProductPlaceholder />
          </div>
          <div className="mt-6 md:hidden">
            <Button variant="outline" className="w-full">View All Products</Button>
          </div>
        </section>

        {/* Features/Benefits Section */}
        <section className="pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <FeatureHighlight 
              icon={<Shield className="h-8 w-8 text-emerald-600" />}
              iconBg="bg-emerald-100"
              title="Premium Quality"
              description="Professional-grade athletic apparel designed for elite competition"
            />
            <FeatureHighlight 
              icon={<Palette className="h-8 w-8 text-yellow-600" />}
              iconBg="bg-yellow-100"
              title="Custom Branding"
              description="Add your club logo, team name, and player numbers to select items"
            />
            <FeatureHighlight 
              icon={<ShoppingBag className="h-8 w-8 text-blue-600" />}
              iconBg="bg-blue-100"
              title="Fast Shipping"
              description="Quick turnaround on all orders with tracking included"
            />
          </div>
        </section>
      </main>
      
      {/* Floating Badge (from mock) */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-black text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Made with Manus
        </div>
      </div>
    </div>
  );
}

// Sub-components
function CategoryCard({ 
  icon, 
  iconBg, 
  title, 
  description, 
  buttonText 
}: { 
  icon: React.ReactNode; 
  iconBg: string; 
  title: string; 
  description: string; 
  buttonText: string; 
}) {
  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base mt-2 line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto pt-0">
        <Button variant="outline" className="w-full justify-center">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}

function ProductPlaceholder() {
  return (
    <div className="space-y-4">
      {/* Image Placeholder */}
      <div className="aspect-[4/3] w-full bg-[#b4690e] rounded-lg shadow-sm"></div>
      
      {/* Text Lines Placeholders */}
      <div className="space-y-2">
        <div className="h-4 w-3/4 bg-[#b4690e] rounded opacity-100"></div>
        <div className="h-4 w-full bg-[#b4690e] rounded opacity-100"></div>
      </div>
    </div>
  );
}

function FeatureHighlight({
  icon,
  iconBg,
  title,
  description
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className={`w-16 h-16 rounded-full ${iconBg} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-serif font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm max-w-xs">{description}</p>
    </div>
  );
}
