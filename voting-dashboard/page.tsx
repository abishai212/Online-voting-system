'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

export default function VotingDashboard() {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [voted, setVoted] = useState(false)
  const [loading, setLoading] = useState(false)

  const candidates = [
    {
      id: '1',
      name: 'Sarah Johnson',
      party: 'Democratic Party',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      description: 'Experienced Leader for Change'
    },
    {
      id: '2',
      name: 'Michael Chen',
      party: 'Progressive Alliance',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      description: 'Innovation & Progress'
    },
    {
      id: '3',
      name: 'Emma Williams',
      party: 'Community First',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      description: 'People-Centered Politics'
    },
    {
      id: '4',
      name: 'James Rodriguez',
      party: 'United Future',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      description: 'Building Tomorrow Today'
    },
  ]

  const handleVote = async () => {
    setLoading(true)
    // Simulate blockchain transaction
    setTimeout(() => {
      setVoted(true)
      setLoading(false)
      setShowConfirmation(false)
    }, 2000)
  }

  const selectedCandidateData = candidates.find(c => c.id === selectedCandidate)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Link href="/voter-login">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-foreground">2024 Presidential Election</h1>
              <p className="text-muted-foreground mt-1">Select your candidate to cast your vote</p>
            </div>
          </div>
          <div className={`text-right ${voted ? 'text-green-500' : 'text-primary'}`}>
            {voted ? (
              <div className="text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-semibold">Vote Submitted</p>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Status: Active</p>
            )}
          </div>
        </div>

        {/* Candidates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {candidates.map((candidate) => (
            <Card 
              key={candidate.id}
              className={`bg-card border-2 cursor-pointer transition-all duration-200 overflow-hidden hover:border-primary/50 ${
                selectedCandidate === candidate.id ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'
              } ${voted ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => !voted && setSelectedCandidate(candidate.id)}
            >
              <div className="aspect-square overflow-hidden bg-secondary">
                <img 
                  src={candidate.image} 
                  alt={candidate.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground mb-1">{candidate.name}</h3>
                <p className="text-sm font-semibold text-primary mb-2">{candidate.party}</p>
                <p className="text-xs text-muted-foreground mb-4">{candidate.description}</p>
                
                {selectedCandidate === candidate.id && (
                  <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    Selected
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Vote Button */}
        {!voted && selectedCandidate && (
          <div className="flex justify-center">
            <Button
              onClick={() => setShowConfirmation(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12"
            >
              Cast Your Vote
            </Button>
          </div>
        )}

        {/* Success Message */}
        {voted && (
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center max-w-2xl mx-auto">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Vote Successfully Submitted</h2>
            <p className="text-muted-foreground mb-6">
              Your vote for {selectedCandidateData?.name} has been recorded on the blockchain and cannot be modified.
            </p>
            <div className="bg-secondary rounded-lg p-4 mb-6">
              <p className="text-xs text-muted-foreground mb-2">Transaction Hash</p>
              <p className="text-sm font-mono text-foreground break-all">0x742d35Cc6634C0532925a3b844Bc24E7e0C4334502a83e70D000000000000001</p>
            </div>
            <Link href="/results">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                View Results
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent className="bg-card border-border">
          <AlertDialogTitle className="text-foreground">Confirm Your Vote</AlertDialogTitle>
          <AlertDialogDescription className="text-muted-foreground">
            You are about to cast your vote for <span className="font-semibold text-foreground">{selectedCandidateData?.name}</span> from the <span className="font-semibold text-foreground">{selectedCandidateData?.party}</span>. This action cannot be reversed.
          </AlertDialogDescription>
          <div className="flex gap-3 pt-4">
            <AlertDialogCancel className="border-border text-foreground hover:bg-secondary">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleVote}
              disabled={loading}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {loading ? 'Submitting...' : 'Confirm Vote'}
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
