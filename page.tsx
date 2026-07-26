'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Lock, Vote } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Vote className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Secure Blockchain
            </h1>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Voting System
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience transparent and secure voting powered by blockchain technology. Every vote is immutable, 
            every result is verifiable, and every citizen is heard.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Transparent</h3>
            </div>
            <p className="text-muted-foreground">
              All votes are recorded on an immutable blockchain ledger, ensuring complete transparency.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Secure</h3>
            </div>
            <p className="text-muted-foreground">
              Cryptographic hashing ensures vote integrity and prevents tampering or fraud.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Vote className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Democratic</h3>
            </div>
            <p className="text-muted-foreground">
              Every eligible voter gets one vote, verified through decentralized identity systems.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/voter-login">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
            >
              Login as Voter
            </Button>
          </Link>
          <Link href="/admin-login">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-8"
            >
              Login as Admin
            </Button>
          </Link>
        </div>

        {/* Footer Info */}
        <div className="mt-16 pt-8 border-t border-border text-center text-muted-foreground">
          <p className="text-sm">
            Powered by blockchain technology • Your vote, your voice, your choice
          </p>
        </div>
      </div>
    </div>
  )
}
