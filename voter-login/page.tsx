'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Wallet, CheckCircle } from 'lucide-react'

export default function VoterLogin() {
  const router = useRouter()
  const [voterId, setVoterId] = useState('')
  const [walletConnected, setWalletConnected] = useState(false)
  const [verified, setVerified] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleConnectWallet = async () => {
    setLoading(true)
    // Simulate wallet connection
    setTimeout(() => {
      setWalletConnected(true)
      setLoading(false)
    }, 1500)
  }

  const handleVerify = async () => {
    if (!voterId.trim()) {
      alert('Please enter your Voter ID')
      return
    }

    setLoading(true)
    // Simulate verification
    setTimeout(() => {
      setVerified(true)
      setLoading(false)
      // Redirect to voting dashboard after verification
      setTimeout(() => {
        router.push('/voting-dashboard')
      }, 1000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>

        {/* Main Card */}
        <Card className="bg-card border border-border shadow-2xl">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Wallet className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Voter Login</h1>
              <p className="text-muted-foreground">Connect your wallet and verify your identity</p>
            </div>

            {/* Step 1: Connect Wallet */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                  walletConnected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  1
                </div>
                <label className="text-foreground font-semibold">Connect MetaMask Wallet</label>
              </div>
              
              {walletConnected ? (
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Wallet Connected</p>
                    <p className="text-xs text-muted-foreground">0x742d35Cc6634C0532925a3b844Bc24E7…</p>
                  </div>
                </div>
              ) : (
                <Button 
                  onClick={handleConnectWallet}
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  size="lg"
                >
                  {loading ? 'Connecting...' : 'Connect MetaMask'}
                </Button>
              )}
            </div>

            {/* Step 2: Enter Voter ID */}
            {walletConnected && (
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                    voterId ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    2
                  </div>
                  <label className="text-foreground font-semibold">Enter Voter ID</label>
                </div>
                
                <Input 
                  placeholder="Enter your 10-digit Voter ID"
                  value={voterId}
                  onChange={(e) => setVoterId(e.target.value)}
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground mb-3"
                  disabled={!walletConnected || verified}
                />
                <p className="text-xs text-muted-foreground">Your Voter ID can be found in your voter registration document.</p>
              </div>
            )}

            {/* Step 3: Verify */}
            {walletConnected && voterId && (
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                    verified ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    3
                  </div>
                  <label className="text-foreground font-semibold">Verify Identity</label>
                </div>

                {verified ? (
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Identity Verified</p>
                      <p className="text-xs text-muted-foreground">Redirecting to voting dashboard...</p>
                    </div>
                  </div>
                ) : (
                  <Button 
                    onClick={handleVerify}
                    disabled={loading || !voterId}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    size="lg"
                  >
                    {loading ? 'Verifying...' : 'Verify Identity'}
                  </Button>
                )}
              </div>
            )}

            {/* Info */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                Your data is secure and encrypted. We never store your private keys.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
