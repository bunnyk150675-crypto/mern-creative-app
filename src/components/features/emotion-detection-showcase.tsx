"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "motion/react"
import { Camera, Play, Pause, RotateCcw, Settings, AlertCircle, RefreshCw, Eye, EyeOff, Users, Sun, Moon } from "lucide-react"

interface EmotionState {
  emotion: string
  icon: string
  confidence: number
  color: string
  bgColor: string
}

interface AdaptationResponse {
  emotion: string
  message: string
  actionType: "encourage" | "clarify" | "adjust" | "refocus"
}

interface CameraAlert {
  type: "no-person" | "camera-blocked" | "low-light" | "multiple-people" | "camera-off" | "connection-lost"
  title: string
  message: string
  icon: JSX.Element
  severity: "warning" | "error" | "info"
  color: string
}

const emotionStates: EmotionState[] = [
  { emotion: "Engaged", icon: "😊", confidence: 0, color: "text-green-600", bgColor: "bg-green-50" },
  { emotion: "Confused", icon: "😕", confidence: 0, color: "text-yellow-600", bgColor: "bg-yellow-50" },
  { emotion: "Focused", icon: "🎯", confidence: 0, color: "text-blue-600", bgColor: "bg-blue-50" },
  { emotion: "Tired", icon: "😴", confidence: 0, color: "text-purple-600", bgColor: "bg-purple-50" },
  { emotion: "Frustrated", icon: "😖", confidence: 0, color: "text-red-600", bgColor: "bg-red-50" }
]

const adaptationResponses: AdaptationResponse[] = [
  { emotion: "Engaged", message: "Great focus! Let's continue with advanced concepts.", actionType: "encourage" },
  { emotion: "Confused", message: "This seems tricky. Would you like a visual explanation?", actionType: "clarify" },
  { emotion: "Focused", message: "Perfect concentration! Here's a challenging exercise.", actionType: "encourage" },
  { emotion: "Tired", message: "Let's take a quick break and review what we've learned.", actionType: "adjust" },
  { emotion: "Frustrated", message: "I understand this is challenging. Let's try a different approach.", actionType: "refocus" }
]

const cameraAlerts: Record<string, CameraAlert> = {
  "no-person": {
    type: "no-person",
    title: "No Person Detected",
    message: "Please position yourself in front of the camera. Make sure your face is clearly visible and well-lit.",
    icon: <Eye className="w-5 h-5" />,
    severity: "warning",
    color: "border-yellow-500 bg-yellow-50 text-yellow-800"
  },
  "camera-blocked": {
    type: "camera-blocked",
    title: "Camera Blocked",
    message: "Camera appears to be covered or blocked. Please remove any obstructions and ensure proper lighting.",
    icon: <EyeOff className="w-5 h-5" />,
    severity: "error",
    color: "border-red-500 bg-red-50 text-red-800"
  },
  "low-light": {
    type: "low-light",
    title: "Low Light Detected",
    message: "Lighting conditions are too dim for accurate emotion detection. Please move to a brighter area.",
    icon: <Moon className="w-5 h-5" />,
    severity: "warning",
    color: "border-blue-500 bg-blue-50 text-blue-800"
  },
  "multiple-people": {
    type: "multiple-people",
    title: "Multiple People Detected",
    message: "Multiple faces detected. For best results, ensure only one person is visible in the camera frame.",
    icon: <Users className="w-5 h-5" />,
    severity: "info",
    color: "border-purple-500 bg-purple-50 text-purple-800"
  },
  "camera-off": {
    type: "camera-off",
    title: "Camera Disconnected",
    message: "Camera connection lost. Please check your camera connection and refresh the page.",
    icon: <Camera className="w-5 h-5" />,
    severity: "error",
    color: "border-red-500 bg-red-50 text-red-800"
  },
  "connection-lost": {
    type: "connection-lost",
    title: "Connection Lost",
    message: "Camera stream interrupted. Attempting to reconnect automatically.",
    icon: <RefreshCw className="w-5 h-5" />,
    severity: "error",
    color: "border-orange-500 bg-orange-50 text-orange-800"
  }
}

export default function EmotionDetectionShowcase() {
  const [isActive, setIsActive] = useState(false)
  const [emotions, setEmotions] = useState<EmotionState[]>(emotionStates)
  const [currentResponse, setCurrentResponse] = useState<AdaptationResponse | null>(null)
  const [demoEmotion, setDemoEmotion] = useState<string>("Engaged")
  const [cameraError, setCameraError] = useState<string>("")
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [activeAlerts, setActiveAlerts] = useState<CameraAlert[]>([])
  const [personDetected, setPersonDetected] = useState<boolean>(false)
  const [lightLevel, setLightLevel] = useState<number>(50)
  const [faceCount, setFaceCount] = useState<number>(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Enhanced camera access function with better error handling
  const startCamera = async () => {
    try {
      setIsLoading(true)
      setCameraError("")
      setActiveAlerts([])
      
      // Check if getUserMedia is supported
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Camera not supported by this browser")
      }

      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 640, min: 320 },
          height: { ideal: 480, min: 240 },
          facingMode: "user"
        },
        audio: false
      })
      
      setCameraStream(stream)
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        
        // Add event listeners for video loading
        videoRef.current.onloadedmetadata = () => {
          if (videoRef.current) {
            videoRef.current.play().catch(error => {
              console.error("Error playing video:", error)
              setCameraError("Failed to start video playback")
            })
          }
        }

        videoRef.current.onerror = () => {
          setCameraError("Video playback error occurred")
          addAlert(cameraAlerts["camera-off"])
        }

        // Monitor stream for disconnection
        stream.getTracks().forEach(track => {
          track.onended = () => {
            addAlert(cameraAlerts["connection-lost"])
            attemptReconnection()
          }
        })
      }
      
      setIsLoading(false)
      startAdvancedDetection()
      return true
    } catch (error) {
      setIsLoading(false)
      console.error("Camera access error:", error)
      
      if (error instanceof Error) {
        if (error.name === "NotAllowedError") {
          setCameraError("Camera access denied. Please click the camera icon in your browser's address bar and allow camera access.")
        } else if (error.name === "NotFoundError") {
          setCameraError("No camera found. Please connect a camera device and refresh the page.")
          addAlert(cameraAlerts["camera-off"])
        } else if (error.name === "NotReadableError") {
          setCameraError("Camera is already in use by another application. Please close other camera apps and try again.")
        } else if (error.message.includes("not supported")) {
          setCameraError("Camera not supported by this browser. Please use Chrome, Firefox, or Safari.")
        } else {
          setCameraError(`Camera error: ${error.message}. Please check your camera settings and try again.`)
        }
      }
      return false
    }
  }

  // Advanced detection functions
  const startAdvancedDetection = () => {
    if (!videoRef.current || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const detection = () => {
      if (!videoRef.current || !isActive) return

      canvas.width = videoRef.current.videoWidth
      canvas.height = videoRef.current.videoHeight
      
      // Draw current video frame to canvas
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)
      
      // Get image data for analysis
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      
      // Analyze frame
      analyzeFrame(imageData)
      
      // Continue detection
      if (isActive) {
        requestAnimationFrame(detection)
      }
    }

    detection()
  }

  const analyzeFrame = (imageData: ImageData) => {
    const data = imageData.data
    let totalBrightness = 0
    let pixelCount = 0
    
    // Calculate average brightness to detect low light or camera blocked
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const brightness = (r + g + b) / 3
      totalBrightness += brightness
      pixelCount++
    }
    
    const avgBrightness = totalBrightness / pixelCount
    setLightLevel(Math.round((avgBrightness / 255) * 100))
    
    // Simulate person detection (in real implementation, use face detection library)
    const mockPersonDetected = avgBrightness > 10 && Math.random() > 0.3
    const mockFaceCount = mockPersonDetected ? (Math.random() > 0.8 ? 2 : 1) : 0
    
    setPersonDetected(mockPersonDetected)
    setFaceCount(mockFaceCount)
    
    // Update alerts based on analysis
    updateAlerts(avgBrightness, mockPersonDetected, mockFaceCount)
  }

  const updateAlerts = (brightness: number, personDetected: boolean, faceCount: number) => {
    const newAlerts: CameraAlert[] = []
    
    // Check for various conditions
    if (brightness < 20) {
      newAlerts.push(cameraAlerts["camera-blocked"])
    } else if (brightness < 50) {
      newAlerts.push(cameraAlerts["low-light"])
    }
    
    if (!personDetected && brightness > 20) {
      newAlerts.push(cameraAlerts["no-person"])
    }
    
    if (faceCount > 1) {
      newAlerts.push(cameraAlerts["multiple-people"])
    }
    
    setActiveAlerts(newAlerts)
  }

  const addAlert = (alert: CameraAlert) => {
    setActiveAlerts(prev => {
      if (!prev.find(a => a.type === alert.type)) {
        return [...prev, alert]
      }
      return prev
    })
  }

  const removeAlert = (alertType: string) => {
    setActiveAlerts(prev => prev.filter(alert => alert.type !== alertType))
  }

  const attemptReconnection = async () => {
    setTimeout(async () => {
      if (isActive) {
        console.log("Attempting to reconnect camera...")
        stopCamera()
        await startCamera()
      }
    }, 2000)
  }

  // Enhanced stop camera function
  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => {
        track.stop()
        console.log("Camera track stopped:", track.kind)
      })
      setCameraStream(null)
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null
      videoRef.current.pause()
    }
    setIsLoading(false)
    setActiveAlerts([])
    setPersonDetected(false)
    setFaceCount(0)
    setLightLevel(50)
  }

  // Simulate emotion detection updates
  useEffect(() => {
    if (!isActive || !personDetected) {
      // Reset emotions if no person detected
      setEmotions(prev => prev.map(emotion => ({
        ...emotion,
        confidence: 0
      })))
      return
    }

    const interval = setInterval(() => {
      setEmotions(prev => prev.map(emotion => ({
        ...emotion,
        confidence: emotion.emotion === demoEmotion 
          ? Math.random() * 30 + 70 // High confidence for demo emotion
          : Math.random() * 20 + 5   // Low confidence for others
      })))

      // Update adaptation response based on dominant emotion
      const response = adaptationResponses.find(r => r.emotion === demoEmotion)
      if (response && Math.random() > 0.7) {
        setCurrentResponse(response)
        setTimeout(() => setCurrentResponse(null), 4000)
      }
    }, 1500)

    return () => clearInterval(interval)
  }, [isActive, demoEmotion, personDetected])

  // Cleanup camera on unmount
  useEffect(() => {
    return () => {
      stopCamera()
    }
  }, [])

  const toggleDetection = async () => {
    if (!isActive) {
      // Starting detection - request camera access
      const cameraStarted = await startCamera()
      if (cameraStarted) {
        setIsActive(true)
      }
    } else {
      // Stopping detection
      setIsActive(false)
      stopCamera()
      setEmotions(prev => prev.map(emotion => ({
        ...emotion,
        confidence: 0
      })))
    }
  }

  const retryCamera = () => {
    setCameraError("")
    setActiveAlerts([])
    toggleDetection()
  }

  const cycleDemoEmotion = () => {
    const currentIndex = emotionStates.findIndex(e => e.emotion === demoEmotion)
    const nextIndex = (currentIndex + 1) % emotionStates.length
    setDemoEmotion(emotionStates[nextIndex].emotion)
  }

  return (
    <div className="bg-surface-white p-8 rounded-xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Live Emotion Detection Demo
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Experience how EduPulse adapts learning content in real-time based on emotional states
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              onClick={toggleDetection}
              disabled={isLoading}
              className={`${isActive ? 'bg-destructive hover:bg-destructive/90' : 'bg-primary hover:bg-primary/90'} text-white disabled:opacity-50`}
            >
              {isLoading ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : isActive ? (
                <Pause className="w-4 h-4 mr-2" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              {isLoading ? 'Loading...' : isActive ? 'Stop Detection' : 'Start Detection'}
            </Button>
            
            <Button
              onClick={cycleDemoEmotion}
              variant="outline"
              className="border-border hover:bg-muted"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Cycle Demo Emotion ({demoEmotion})
            </Button>
          </div>

          {/* Enhanced camera error message */}
          {cameraError && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <div className="flex items-center gap-2 text-destructive mb-2">
                <AlertCircle className="w-5 h-5" />
                <span className="font-medium">Camera Access Issue</span>
              </div>
              <p className="text-sm text-destructive/80 mb-3">{cameraError}</p>
              <Button
                onClick={retryCamera}
                size="sm"
                variant="outline"
                className="border-destructive/30 text-destructive hover:bg-destructive/10"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            </div>
          )}

          {/* Advanced alerts system */}
          {activeAlerts.length > 0 && (
            <div className="mb-6 space-y-3">
              {activeAlerts.map((alert, index) => (
                <motion.div
                  key={alert.type}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 border rounded-lg ${alert.color}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {alert.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="font-medium mb-1">{alert.title}</h4>
                      <p className="text-sm opacity-90">{alert.message}</p>
                    </div>
                    <Button
                      onClick={() => removeAlert(alert.type)}
                      size="sm"
                      variant="ghost"
                      className="flex-shrink-0 h-6 w-6 p-0 hover:bg-black/10"
                    >
                      ×
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Emotion Indicators */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-4">Emotion Detection</h3>
            
            {/* Detection status indicators */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="text-sm font-medium">Person Detected</span>
                <Badge variant={personDetected ? "default" : "secondary"}>
                  {personDetected ? "Yes" : "No"}
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="text-sm font-medium">Light Level</span>
                <div className="flex items-center gap-2">
                  {lightLevel < 30 ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  <Badge variant={lightLevel > 50 ? "default" : "secondary"}>
                    {lightLevel}%
                  </Badge>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="text-sm font-medium">Face Count</span>
                <Badge variant={faceCount === 1 ? "default" : faceCount > 1 ? "destructive" : "secondary"}>
                  {faceCount}
                </Badge>
              </div>
            </div>

            {emotions.map((emotion, index) => (
              <motion.div
                key={emotion.emotion}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`${emotion.confidence > 50 ? emotion.bgColor : 'bg-card'} border-border transition-all duration-300 ${!personDetected ? 'opacity-50' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{emotion.icon}</span>
                        <span className={`font-medium ${emotion.confidence > 50 ? emotion.color : 'text-muted-foreground'}`}>
                          {emotion.emotion}
                        </span>
                      </div>
                      <Badge 
                        variant={emotion.confidence > 50 ? "default" : "secondary"}
                        className={emotion.confidence > 50 ? `${emotion.color} bg-transparent` : ''}
                      >
                        {Math.round(emotion.confidence)}%
                      </Badge>
                    </div>
                    <Progress 
                      value={personDetected ? emotion.confidence : 0} 
                      className="h-2"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Center Panel - Video Preview */}
          <div className="relative">
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative">
                  {/* Hidden canvas for frame analysis */}
                  <canvas
                    ref={canvasRef}
                    className="hidden"
                  />
                  
                  {/* Video element - always present */}
                  <video
                    ref={videoRef}
                    className={`w-full h-full object-cover ${cameraStream ? 'block' : 'hidden'}`}
                    autoPlay
                    playsInline
                    muted
                    style={{ transform: 'scaleX(-1)' }} // Mirror the video for better UX
                  />
                  
                  {/* Placeholder when no camera */}
                  {!cameraStream && (
                    <div className="absolute inset-4 border-2 border-dashed border-border rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground font-medium">Camera Preview</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {isLoading 
                            ? 'Accessing camera...' 
                            : cameraError 
                              ? 'Camera access required' 
                              : isActive 
                                ? 'Starting camera...' 
                                : 'Click "Start Detection" to begin'
                          }
                        </p>
                        {!isActive && !cameraError && (
                          <p className="text-xs text-muted-foreground mt-1">
                            Your browser will ask for camera permission
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Loading overlay */}
                  {isLoading && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="bg-white/90 rounded-lg p-4 flex items-center gap-3">
                        <RefreshCw className="w-5 h-5 animate-spin text-primary" />
                        <span className="text-sm font-medium">Accessing camera...</span>
                      </div>
                    </div>
                  )}

                  {/* Floating emotion indicators */}
                  <AnimatePresence>
                    {isActive && personDetected && emotions.filter(e => e.confidence > 30).map((emotion, index) => (
                      <motion.div
                        key={emotion.emotion}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          x: Math.sin(Date.now() * 0.001 + index) * 20,
                          y: Math.cos(Date.now() * 0.001 + index) * 15
                        }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute top-4 left-4 pointer-events-none"
                        style={{
                          left: `${20 + index * 15}%`,
                          top: `${20 + (index % 2) * 30}%`
                        }}
                      >
                        <div className={`${emotion.bgColor} ${emotion.color} px-3 py-1 rounded-full text-sm font-medium shadow-lg border border-border`}>
                          {emotion.icon} {emotion.emotion}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Enhanced detection status indicator */}
                  <div className="absolute top-4 right-4">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium shadow-sm ${
                      cameraStream && isActive && personDetected
                        ? 'bg-green-100 text-green-700 border border-green-200' 
                        : cameraStream && isActive && !personDetected
                          ? 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                        : isLoading
                          ? 'bg-blue-100 text-blue-700 border border-blue-200'
                          : 'bg-gray-100 text-gray-600 border border-gray-200'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        cameraStream && isActive && personDetected
                          ? 'bg-green-500 animate-pulse' 
                        : cameraStream && isActive && !personDetected
                          ? 'bg-yellow-500 animate-pulse'
                        : isLoading
                          ? 'bg-blue-500 animate-pulse'
                          : 'bg-gray-400'
                      }`} />
                      {cameraStream && isActive && personDetected 
                        ? 'Live' 
                        : cameraStream && isActive && !personDetected
                          ? 'No Person'
                        : isLoading 
                          ? 'Loading' 
                          : 'Inactive'
                      }
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced settings panel */}
            <Card className="mt-4 bg-card border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Detection Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Sensitivity:</span>
                    <span className="ml-2 font-medium">High</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Interval:</span>
                    <span className="ml-2 font-medium">1.5s</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Confidence:</span>
                    <span className="ml-2 font-medium">≥70%</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Auto-Retry:</span>
                    <span className="ml-2 font-medium">Enabled</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Adaptation Responses */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-4">AI Responses</h3>
            
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                {currentResponse && personDetected ? (
                  <motion.div
                    key={currentResponse.emotion}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="bg-accent/5 border-accent/20">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-accent flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                          AI Adaptation Response
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">
                              {emotionStates.find(e => e.emotion === currentResponse.emotion)?.icon}
                            </span>
                            <span className="font-medium text-foreground">
                              {currentResponse.emotion} Detected
                            </span>
                          </div>
                          <p className="text-muted-foreground">
                            {currentResponse.message}
                          </p>
                          <Badge 
                            variant="secondary" 
                            className="bg-accent/10 text-accent border-accent/20"
                          >
                            {currentResponse.actionType}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-8"
                  >
                    <div className="text-muted-foreground">
                      <p className="mb-2">
                        {!personDetected && isActive 
                          ? "Position yourself in the camera view..." 
                          : "Waiting for emotion detection..."
                        }
                      </p>
                      <p className="text-sm">AI responses will appear here based on detected emotions</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Recent responses history */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-sm">Response History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  {adaptationResponses.slice(0, 3).map((response, index) => (
                    <div key={index} className="flex items-start gap-3 p-2 rounded-lg bg-muted/30">
                      <span className="text-lg">
                        {emotionStates.find(e => e.emotion === response.emotion)?.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">
                          {response.emotion}
                        </p>
                        <p className="text-muted-foreground text-xs truncate">
                          {response.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced bottom metrics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card className="bg-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {isActive && personDetected ? Math.round(emotions.reduce((sum, e) => sum + e.confidence, 0) / emotions.length) : 0}%
              </div>
              <div className="text-sm text-muted-foreground">Avg Confidence</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-accent">
                {isActive && personDetected ? emotions.filter(e => e.confidence > 50).length : 0}
              </div>
              <div className="text-sm text-muted-foreground">Active Emotions</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">
                {isActive ? '1.5s' : '0s'}
              </div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-warning">
                {personDetected ? '98.7%' : '0%'}
              </div>
              <div className="text-sm text-muted-foreground">Detection Rate</div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-destructive">
                {activeAlerts.length}
              </div>
              <div className="text-sm text-muted-foreground">Active Alerts</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}