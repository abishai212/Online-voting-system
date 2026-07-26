'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, TrendingUp, Crown } from 'lucide-react'

export default function Results() {
  const results = [
    {
      id: '1',
      name: 'Sarah Johnson',
      party: 'Democratic Party',
      votes: 4250,
      percentage: 42.5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      winner: true
    },
    {
      id: '2',
      name: 'Michael Chen',
      party: 'Progressive Alliance',
      votes: 3120,
      percentage: 31.2,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      winner: false
    },
    {
      id: '3',
      name: 'Emma Williams',
      party: 'Community First',
      votes: 1680,
      percentage: 16.8,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      winner: false
    },
    {
      id: '4',
      name: 'James Rodriguez',
      party: 'United Future',
      votes: 950,
      percentage: 9.5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      winner: false
    },
  ]

  const totalVotes = results.reduce((acc, r) => acc + r.votes, 0)
  const winner = results.find(r => r.winner)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <Link href="/voting-dashboard">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Election Results</h1>
            <p className="text-muted-foreground mt-1">Live vote count and blockchain verification</p>
          </div>
        </div>

        {/* Winner Announcement */}
        {winner && (
          <Card className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 mb-12 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Crown className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Election Winner</h2>
                  <p className="text-muted-foreground">Based on verified blockchain votes</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <img 
                  src={winner.image} 
                  alt={winner.name}
                  className="w-24 h-24 rounded-full border-4 border-primary"
                />
                <div>
                  <h3 className="text-3xl font-bold text-foreground">{winner.name}</h3>
                  <p className="text-lg text-primary font-semibold mb-2">{winner.party}</p>
                  <p className="text-muted-foreground">
                    {winner.votes.toLocaleString()} votes • {winner.percentage}% of votes
                  </p>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Vote Breakdown */}
          <Card className="bg-card border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Vote Breakdown
            </h2>
            <div className="space-y-6">
              {results.map((candidate) => (
                <div key={candidate.id}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3 flex-1">
                      <img 
                        src={candidate.image}
                        alt={candidate.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-foreground">{candidate.name}</p>
                        <p className="text-xs text-muted-foreground">{candidate.party}</p>
                      </div>
                    </div>
                    <p className="font-bold text-foreground text-right">
                      {candidate.votes.toLocaleString()}
                    </p>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        candidate.winner ? 'bg-primary' : 'bg-primary/60'
                      }`}
                      style={{ width: `${candidate.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground"></span>
                    <span className="text-sm font-semibold text-foreground">{candidate.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Statistics */}
          <Card className="bg-card border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Election Statistics</h2>
            <div className="space-y-6">
              <div className="border-b border-border pb-6">
                <p className="text-muted-foreground text-sm mb-2">Total Votes Cast</p>
                <p className="text-4xl font-bold text-foreground">{totalVotes.toLocaleString()}</p>
              </div>
              <div className="border-b border-border pb-6">
                <p className="text-muted-foreground text-sm mb-2">Voter Turnout</p>
                <p className="text-4xl font-bold text-foreground">87.3%</p>
              </div>
              <div className="border-b border-border pb-6">
                <p className="text-muted-foreground text-sm mb-2">Election Status</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <p className="text-lg font-semibold text-foreground">Completed</p>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-2">Blockchain Verified</p>
                <p className="text-lg font-semibold text-primary">✓ 100% Verified</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Blockchain Transaction */}
        <Card className="bg-card border border-border p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Blockchain Transaction Details</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-secondary rounded-lg p-4">
              <p className="text-muted-foreground text-sm mb-2">Contract Address</p>
              <p className="text-sm font-mono text-foreground break-all">
                0x742d35Cc6634C0532925a3b844Bc24E7e0C433450...
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-4">
              <p className="text-muted-foreground text-sm mb-2">Latest Block Hash</p>
              <p className="text-sm font-mono text-foreground break-all">
                0xabcd1234efgh5678ijkl9012mnop3456qrst7890...
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-4">
              <p className="text-muted-foreground text-sm mb-2">Election ID</p>
              <p className="text-sm font-mono text-foreground break-all">
                ELECTION-2024-PRES-001
              </p>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="flex justify-center gap-4">
          <Link href="/">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Back to Home
            </Button>
          </Link>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Download Certificate
          </Button>
        </div>
      </div>
    </div>
  )
}
