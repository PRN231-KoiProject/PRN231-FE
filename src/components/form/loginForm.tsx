
import { motion } from 'framer-motion';
import { Eye, EyeOff, Fish } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useToast } from '../ui/toast';

const users = [
  { email: 'member@example.com', password: 'memberpass', role: 'member' },
  { email: 'admin@example.com', password: 'adminpass', role: 'admin' },
]

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  // const [role, setRole] = useState('member')
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const user = users.find(u => u.email === email && u.password === password)
    if (user) {
      toast({
        title: "Login Successful",
        description: `Welcome back, ${user.role === 'admin' ? 'Admin' : 'Member'}!`,
      })
      console.log('Logged in as:', user.role)
      // Here you would typically set user session or redirect based on role
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      })
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full"
      >
        <div className="flex justify-center mb-6">
          <Fish className="h-12 w-12 text-red-600" />
        </div>
        <h1 className="text-3xl font-bold text-center text-red-800 mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
          </div>
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
            Login
          </Button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-red-600 hover:underline">Forgot password?</a>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-red-600 hover:underline">Sign up now</a>
          </p>
        </div>
      </motion.div>
    </div>
  )
};

export default LoginForm;
