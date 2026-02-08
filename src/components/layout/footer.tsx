import React from "react";
import Link from "next/link";
import { Trophy, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Trophy className="h-6 w-6 text-[#013B26]" />
              <span className="font-serif text-xl font-bold tracking-tight text-[#013B26]">InvitedGames</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
              The premier platform for youth sports leagues, bringing professional management tools and championship experiences to clubs and schools nationwide.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-[#013B26] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#013B26] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#013B26] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#013B26] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Platform</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/events" className="text-gray-500 hover:text-[#013B26] transition-colors">Browse Events</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#013B26] transition-colors">Club Management</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#013B26] transition-colors">League Tools</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#013B26] transition-colors">Rankings</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#013B26] transition-colors">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#013B26] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#013B26] transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#013B26] transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#013B26] transition-colors">Partners</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#013B26] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-gray-900 mb-6">Stay Updated</h3>
            <p className="text-gray-500 text-sm mb-4">
              Subscribe to our newsletter for the latest tournament news and updates.
            </p>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-50 border-gray-200 focus-visible:ring-[#013B26]"
              />
              <Button className="w-full bg-[#013B26] hover:bg-[#012d1d] text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} InvitedGames. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
