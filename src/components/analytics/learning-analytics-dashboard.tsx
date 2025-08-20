"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  Target, 
  AlertTriangle, 
  Brain, 
  Heart, 
  BarChart3,
  Filter,
  Users,
  Calendar,
  Lightbulb,
  CheckCircle,
  XCircle,
  Activity
} from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

interface EmotionData {
  time: string
  engagement: number
  focus: number
  confusion: number
  frustration: number
}

interface StudentMetric {
  name: string
  focusTime: number
  totalTime: number
  completedMilestones: number
  totalMilestones: number
  emotionScore: number
}

const mockEmotionData: EmotionData[] = [
  { time: "9:00", engagement: 75, focus: 85, confusion: 20, frustration: 15 },
  { time: "9:30", engagement: 82, focus: 78, confusion: 25, frustration: 18 },
  { time: "10:00", engagement: 68, focus: 90, confusion: 35, frustration: 30 },
  { time: "10:30", engagement: 85, focus: 82, confusion: 15, frustration: 12 },
  { time: "11:00", engagement: 90, focus: 88, confusion: 10, frustration: 8 },
  { time: "11:30", engagement: 78, focus: 85, confusion: 22, frustration: 20 }
]

const mockStudentMetrics: StudentMetric[] = [
  { name: "Sarah Chen", focusTime: 85, totalTime: 120, completedMilestones: 8, totalMilestones: 12, emotionScore: 82 },
  { name: "Alex Rivera", focusTime: 92, totalTime: 105, completedMilestones: 10, totalMilestones: 12, emotionScore: 78 },
  { name: "Jordan Smith", focusTime: 78, totalTime: 140, completedMilestones: 6, totalMilestones: 12, emotionScore: 65 }
]

const mockInterventions = [
  { type: "break", title: "Suggest 5-minute mindfulness break", priority: "medium", studentCount: 3 },
  { type: "content", title: "Simplify current lesson complexity", priority: "high", studentCount: 5 },
  { type: "engagement", title: "Add interactive elements", priority: "low", studentCount: 2 },
  { type: "support", title: "Offer one-on-one tutoring", priority: "high", studentCount: 1 }
]

export default function LearningAnalyticsDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("week")
  const [selectedStudent, setSelectedStudent] = useState("all")

  const getEmotionColor = (emotion: string) => {
    switch (emotion) {
      case "engagement": return "stroke-[#2563eb]" // Primary Blue
      case "focus": return "stroke-[#0d9488]" // Secondary Teal
      case "confusion": return "stroke-[#eab308]" // Warning Yellow
      case "frustration": return "stroke-[#dc2626]" // Error Red
      default: return "stroke-[#64748b]" // Neutral Gray
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-[#dc2626] text-white"
      case "medium": return "bg-[#eab308] text-white"
      case "low": return "bg-[#16a34a] text-white"
      default: return "bg-[#64748b] text-white"
    }
  }

  // Generate smooth curve path using cubic bezier curves
  const generateCurvePath = (data: EmotionData[], emotion: keyof EmotionData) => {
    if (data.length < 2) return ""
    
    const points = data.map((item, i) => ({
      x: (i / (data.length - 1)) * 600,
      y: 200 - (item[emotion] as number * 2)
    }))
    
    let path = `M ${points[0].x} ${points[0].y}`
    
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1]
      const curr = points[i]
      const next = points[i + 1]
      
      // Calculate control points for smooth curves
      const tension = 0.3
      let cp1x, cp1y, cp2x, cp2y
      
      if (i === 1) {
        // First curve
        cp1x = prev.x + (curr.x - prev.x) * tension
        cp1y = prev.y
      } else {
        const prevPrev = points[i - 2]
        cp1x = prev.x + (curr.x - prevPrev.x) * tension * 0.5
        cp1y = prev.y + (curr.y - prevPrev.y) * tension * 0.5
      }
      
      if (i === points.length - 1) {
        // Last curve
        cp2x = curr.x - (curr.x - prev.x) * tension
        cp2y = curr.y
      } else {
        cp2x = curr.x - (next.x - prev.x) * tension * 0.5
        cp2y = curr.y - (next.y - prev.y) * tension * 0.5
      }
      
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`
    }
    
    return path
  }

  return (
    <div className="w-full min-h-screen bg-[#ffffff] p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#0a0a0a] font-[var(--font-display)]">
              Learning Analytics Dashboard
            </h1>
            <p className="text-[#64748b] mt-2 font-[var(--font-body)]">
              Real-time insights into student emotional engagement and learning progress
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-[140px] bg-[#ffffff] border-[#e5e5e5]">
                <Calendar className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#ffffff] border-[#e5e5e5]">
                <SelectItem value="day">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedStudent} onValueChange={setSelectedStudent}>
              <SelectTrigger className="w-[160px] bg-[#ffffff] border-[#e5e5e5]">
                <Users className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#ffffff] border-[#e5e5e5]">
                <SelectItem value="all">All Students</SelectItem>
                <SelectItem value="sarah">Sarah Chen</SelectItem>
                <SelectItem value="alex">Alex Rivera</SelectItem>
                <SelectItem value="jordan">Jordan Smith</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Top Row - Emotion Trends and Focus Metrics */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Emotion Trends Chart */}
          <Card className="xl:col-span-2 bg-[#ffffff] border-[#e5e5e5] shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#0a0a0a] font-[var(--font-display)]">
                <Activity className="w-5 h-5 text-[#2563eb]" />
                Emotion Trends Over Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 bg-[#ffffff]">
                <svg viewBox="0 0 600 200" className="w-full h-full">
                  {/* Grid lines */}
                  {[0, 25, 50, 75, 100].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={200 - (y * 2)}
                      x2="600"
                      y2={200 - (y * 2)}
                      stroke="#e5e5e5"
                      strokeWidth="1"
                    />
                  ))}
                  
                  {/* Smooth emotion curves */}
                  {["engagement", "focus", "confusion", "frustration"].map((emotion, index) => {
                    const curvePath = generateCurvePath(mockEmotionData, emotion as keyof EmotionData)
                    
                    return (
                      <motion.path
                        key={emotion}
                        d={curvePath}
                        fill="none"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={getEmotionColor(emotion)}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: index * 0.2, ease: "easeInOut" }}
                      />
                    )
                  })}
                  
                  {/* Data points */}
                  {mockEmotionData.map((data, i) => (
                    <g key={i}>
                      {["engagement", "focus", "confusion", "frustration"].map((emotion) => {
                        const x = (i / (mockEmotionData.length - 1)) * 600
                        const y = 200 - (data[emotion as keyof EmotionData] as number * 2)
                        
                        return (
                          <motion.circle
                            key={`${emotion}-${i}`}
                            cx={x}
                            cy={y}
                            r="4"
                            className={`fill-current ${getEmotionColor(emotion).replace('stroke-', 'text-')}`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 1.5 + i * 0.1 }}
                          />
                        )
                      })}
                    </g>
                  ))}
                </svg>
                
                {/* Legend */}
                <div className="flex flex-wrap gap-4 mt-4">
                  {[
                    { name: "Engagement", color: "#2563eb" },
                    { name: "Focus", color: "#0d9488" },
                    { name: "Confusion", color: "#eab308" },
                    { name: "Frustration", color: "#dc2626" }
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-[#64748b] font-[var(--font-body)]">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Focus Time Metrics */}
          <Card className="bg-[#ffffff] border-[#e5e5e5] shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#0a0a0a] font-[var(--font-display)]">
                <Clock className="w-5 h-5 text-[#0d9488]" />
                Focus Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {mockStudentMetrics.slice(0, 3).map((student, index) => (
                <motion.div
                  key={student.name}
                  className="space-y-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[#0a0a0a] font-[var(--font-body)]">
                      {student.name}
                    </span>
                    <Badge 
                      variant={student.focusTime > 80 ? "default" : "secondary"}
                      className={student.focusTime > 80 ? "bg-[#16a34a] text-white" : "bg-[#f5f5f5] text-[#64748b]"}
                    >
                      {Math.round((student.focusTime / student.totalTime) * 100)}%
                    </Badge>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={(student.focusTime / student.totalTime) * 100} 
                      className="h-2"
                    />
                    <div className="flex justify-between text-xs text-[#64748b] mt-1">
                      <span>{student.focusTime}m focused</span>
                      <span>{student.totalTime}m total</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Middle Row - Learning Path and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Learning Path Progression */}
          <Card className="bg-[#ffffff] border-[#e5e5e5] shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#0a0a0a] font-[var(--font-display)]">
                <Target className="w-5 h-5 text-[#2563eb]" />
                Learning Path Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockStudentMetrics.map((student, index) => (
                  <motion.div
                    key={student.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-[#f5f5f5] border border-[#e5e5e5]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#2563eb] flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-[#0a0a0a] font-[var(--font-body)]">{student.name}</p>
                        <p className="text-sm text-[#64748b]">
                          {student.completedMilestones}/{student.totalMilestones} milestones
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-lg font-bold text-[#0a0a0a]">
                          {Math.round((student.completedMilestones / student.totalMilestones) * 100)}%
                        </div>
                        <div className="text-xs text-[#64748b]">Complete</div>
                      </div>
                      {student.completedMilestones === student.totalMilestones ? (
                        <CheckCircle className="w-5 h-5 text-[#16a34a]" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-[#e5e5e5]" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Stress/Frustration Alerts */}
          <Card className="bg-[#ffffff] border-[#e5e5e5] shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#0a0a0a] font-[var(--font-display)]">
                <AlertTriangle className="w-5 h-5 text-[#eab308]" />
                Emotional Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <motion.div
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#fef3c7] border border-[#fbbf24]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <AlertTriangle className="w-5 h-5 text-[#eab308]" />
                  <div className="flex-1">
                    <p className="font-medium text-[#92400e]">High Confusion Detected</p>
                    <p className="text-sm text-[#92400e]">3 students struggling with current topic</p>
                  </div>
                  <Badge className="bg-[#eab308] text-white">Active</Badge>
                </motion.div>
                
                <motion.div
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#fee2e2] border border-[#fca5a5]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <XCircle className="w-5 h-5 text-[#dc2626]" />
                  <div className="flex-1">
                    <p className="font-medium text-[#991b1b]">Frustration Spike</p>
                    <p className="text-sm text-[#991b1b]">Jordan Smith - Math lesson</p>
                  </div>
                  <Badge className="bg-[#dc2626] text-white">Critical</Badge>
                </motion.div>
                
                <motion.div
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#dcfce7] border border-[#86efac]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Heart className="w-5 h-5 text-[#16a34a]" />
                  <div className="flex-1">
                    <p className="font-medium text-[#166534]">High Engagement</p>
                    <p className="text-sm text-[#166534]">Class average above 85%</p>
                  </div>
                  <Badge className="bg-[#16a34a] text-white">Positive</Badge>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row - Performance Correlation and Interventions */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Performance Correlation */}
          <Card className="xl:col-span-2 bg-[#ffffff] border-[#e5e5e5] shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#0a0a0a] font-[var(--font-display)]">
                <BarChart3 className="w-5 h-5 text-[#2563eb]" />
                Emotion vs Comprehension Correlation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-[#0a0a0a] font-[var(--font-display)]">Positive Correlations</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#64748b] font-[var(--font-body)]">High Engagement</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-[#e5e5e5] rounded-full h-2">
                          <div className="bg-[#16a34a] h-2 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                        <span className="text-sm font-medium text-[#16a34a]">+88%</span>
                        <TrendingUp className="w-4 h-4 text-[#16a34a]" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#64748b] font-[var(--font-body)]">Strong Focus</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-[#e5e5e5] rounded-full h-2">
                          <div className="bg-[#0d9488] h-2 rounded-full" style={{ width: '82%' }}></div>
                        </div>
                        <span className="text-sm font-medium text-[#0d9488]">+82%</span>
                        <TrendingUp className="w-4 h-4 text-[#0d9488]" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-[#0a0a0a] font-[var(--font-display)]">Negative Correlations</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#64748b] font-[var(--font-body)]">High Confusion</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-[#e5e5e5] rounded-full h-2">
                          <div className="bg-[#eab308] h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <span className="text-sm font-medium text-[#eab308]">-65%</span>
                        <TrendingDown className="w-4 h-4 text-[#eab308]" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#64748b] font-[var(--font-body)]">Frustration</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-[#e5e5e5] rounded-full h-2">
                          <div className="bg-[#dc2626] h-2 rounded-full" style={{ width: '78%' }}></div>
                        </div>
                        <span className="text-sm font-medium text-[#dc2626]">-78%</span>
                        <TrendingDown className="w-4 h-4 text-[#dc2626]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommended Interventions */}
          <Card className="bg-[#ffffff] border-[#e5e5e5] shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#0a0a0a] font-[var(--font-display)]">
                <Lightbulb className="w-5 h-5 text-[#ea580c]" />
                AI Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockInterventions.map((intervention, index) => (
                  <motion.div
                    key={index}
                    className="p-3 rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] hover:bg-[#e5e5e5] transition-colors cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[#0a0a0a] font-[var(--font-body)]">
                          {intervention.title}
                        </p>
                        <p className="text-xs text-[#64748b] mt-1">
                          {intervention.studentCount} student{intervention.studentCount !== 1 ? 's' : ''} affected
                        </p>
                      </div>
                      <Badge className={getPriorityColor(intervention.priority)}>
                        {intervention.priority}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
                
                <Button 
                  className="w-full mt-4 bg-[#2563eb] text-white hover:bg-[#1d4ed8] border-0"
                  size="sm"
                >
                  <Brain className="w-4 h-4 mr-2" />
                  Apply All Recommendations
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}