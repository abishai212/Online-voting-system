'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Plus, LogOut, Play, Square, Zap, Users, CheckCircle, Settings, Lock, Eye, Radio } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { SecurityLogs } from '@/components/security-logs'
import { MFASettings } from '@/components/mfa-settings'
import { RBACManagement } from '@/components/rbac-management'
import { ThreatAlerts } from '@/components/threat-alerts'
import { IPWhitelist } from '@/components/ip-whitelist'
import { NetworkStatus } from '@/components/network-status'
import { SessionControl } from '@/components/session-control'
import { EmergencyPause } from '@/components/emergency-pause'

export default function AdminDashboard() {
  const [candidates, setCandidates] = useState([
    { id: 1, name: 'Sarah Johnson', party: 'Democratic Party', photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
    { id: 2, name: 'Michael Chen', party: 'Progressive Alliance', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
    { id: 3, name: 'Emma Williams', party: 'Community First', photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
    { id: 4, name: 'James Rodriguez', party: 'United Future', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop' },
  ])
  const [newCandidate, setNewCandidate] = useState({ name: '', party: '', photoUrl: '' })
  const [electionActive, setElectionActive] = useState(true)
  const [showAddCandidate, setShowAddCandidate] = useState(false)
  const [showDeployContract, setShowDeployContract] = useState(false)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  const handleAddCandidate = () => {
    if (!newCandidate.name || !newCandidate.party) {
      alert('Please fill in all fields')
      return
    }
    setCandidates([...candidates, {
      id: candidates.length + 1,
      ...newCandidate
    }])
    setNewCandidate({ name: '', party: '', photoUrl: '' })
    setShowAddCandidate(false)
  }

  const handleToggleElection = () => {
    setLoading(true)
    setTimeout(() => {
      setElectionActive(!electionActive)
      setLoading(false)
    }, 1500)
  }

  const handleDeployContract = () => {
    setLoading(true)
    setTimeout(() => {
      alert('Smart contract deployed successfully!\nContract Address: 0x742d35Cc6634C0532925a3b844Bc24E7e0C433450')
      setShowDeployContract(false)
      setLoading(false)
    }, 2000)
  }

  const totalVotes = 10000
  const registeredVoters = 11447

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-foreground flex items-center gap-2">
                <Lock className="w-8 h-8 text-primary" />
                Secure Admin Control Center
              </h1>
              <p className="text-muted-foreground mt-1">Enterprise-grade election administration system</p>
            </div>
          </div>
          <Link href="/">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card border border-border p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-xs mb-2">Total Votes</p>
                <p className="text-3xl font-bold text-foreground">{totalVotes.toLocaleString()}</p>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="w-5 h-5 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="bg-card border border-border p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-xs mb-2">Registered Voters</p>
                <p className="text-3xl font-bold text-foreground">{registeredVoters.toLocaleString()}</p>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="w-5 h-5 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="bg-card border border-border p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-xs mb-2">Election Status</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${electionActive ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                  <p className="text-lg font-bold text-foreground">{electionActive ? 'Active' : 'Closed'}</p>
                </div>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg">
                <Radio className="w-5 h-5 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="bg-green-500/10 border border-green-500/30 p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-green-300/70 text-xs mb-2">System Security</p>
                <p className="text-lg font-bold text-green-300">Secure</p>
              </div>
              <div className="p-2 bg-green-500/20 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
            </div>
          </Card>
        </div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="bg-secondary border border-border grid w-full grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
            <TabsTrigger value="security" className="text-xs">Security</TabsTrigger>
            <TabsTrigger value="access" className="text-xs">Access</TabsTrigger>
            <TabsTrigger value="monitoring" className="text-xs">Monitoring</TabsTrigger>
            <TabsTrigger value="blockchain" className="text-xs">Blockchain</TabsTrigger>
            <TabsTrigger value="candidates" className="text-xs">Candidates</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6 mt-6">
            <ThreatAlerts />
            <SecurityLogs />
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6 mt-6">
            <MFASettings />
            <SessionControl />
          </TabsContent>

          {/* Access Control Tab */}
          <TabsContent value="access" className="space-y-6 mt-6">
            <RBACManagement />
            <IPWhitelist />
          </TabsContent>

          {/* Monitoring Tab */}
          <TabsContent value="monitoring" className="space-y-6 mt-6">
            <SecurityLogs />
            <ThreatAlerts />
          </TabsContent>

          {/* Blockchain Tab */}
          <TabsContent value="blockchain" className="space-y-6 mt-6">
            <NetworkStatus />
            <EmergencyPause />
            <Card className="bg-card border border-border p-6">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Election Control
              </h3>
              <div className="space-y-4">
                <Button 
                  onClick={handleToggleElection}
                  disabled={loading}
                  className={`w-full py-6 font-semibold text-lg ${
                    electionActive 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  }`}
                >
                  {electionActive ? (
                    <>
                      <Square className="w-5 h-5 mr-2" />
                      End Election
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 mr-2" />
                      Start Election
                    </>
                  )}
                </Button>

                <Button 
                  onClick={() => setShowDeployContract(true)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 font-semibold text-lg"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Deploy Smart Contract
                </Button>

                <div className="bg-secondary rounded-lg p-4 border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Smart Contract Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <p className="font-semibold text-foreground">Deployed on Blockchain</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 break-all font-mono">
                    0x742d35Cc6634C0532925a3b844Bc24E7e0C433450
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Candidates Tab */}
          <TabsContent value="candidates" className="space-y-6 mt-6">
            <Card className="bg-card border border-border p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Candidates Management</h2>
                <Button 
                  onClick={() => setShowAddCandidate(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="sm"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Candidate
                </Button>
              </div>

              <div className="space-y-4">
                {candidates.map((candidate) => (
                  <div key={candidate.id} className="flex items-center gap-4 p-4 bg-secondary rounded-lg border border-border hover:bg-secondary/80 transition-colors">
                    <img 
                      src={candidate.photoUrl}
                      alt={candidate.name}
                      className="w-12 h-12 rounded-full object-cover border border-border"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{candidate.name}</p>
                      <p className="text-sm text-muted-foreground">{candidate.party}</p>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Add Candidate Dialog */}
        <AlertDialog open={showAddCandidate} onOpenChange={setShowAddCandidate}>
          <AlertDialogContent className="bg-card border-border max-w-md">
            <AlertDialogTitle className="text-foreground">Add New Candidate</AlertDialogTitle>
            <div className="space-y-4 py-4">
              <div>
                <label className="text-sm font-semibold text-foreground block mb-2">Candidate Name</label>
                <Input 
                  placeholder="Full name"
                  value={newCandidate.name}
                  onChange={(e) => setNewCandidate({...newCandidate, name: e.target.value})}
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground block mb-2">Party Name</label>
                <Input 
                  placeholder="Political party"
                  value={newCandidate.party}
                  onChange={(e) => setNewCandidate({...newCandidate, party: e.target.value})}
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground block mb-2">Photo URL</label>
                <Input 
                  placeholder="Image URL (optional)"
                  value={newCandidate.photoUrl}
                  onChange={(e) => setNewCandidate({...newCandidate, photoUrl: e.target.value})}
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <AlertDialogCancel className="border-border text-foreground hover:bg-secondary">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleAddCandidate}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Add Candidate
              </AlertDialogAction>
            </div>
          </AlertDialogContent>
        </AlertDialog>

        {/* Deploy Contract Dialog */}
        <AlertDialog open={showDeployContract} onOpenChange={setShowDeployContract}>
          <AlertDialogContent className="bg-card border-border">
            <AlertDialogTitle className="text-foreground">Deploy Smart Contract</AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground">
              This will deploy the voting smart contract to the blockchain. This action cannot be reversed. Ensure all candidates and election parameters are correctly configured.
            </AlertDialogDescription>
            <div className="flex gap-3 pt-4">
              <AlertDialogCancel className="border-border text-foreground hover:bg-secondary">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDeployContract}
                disabled={loading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {loading ? 'Deploying...' : 'Deploy Contract'}
              </AlertDialogAction>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}
