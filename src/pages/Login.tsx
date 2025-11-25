import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { useLogin } from "@/hooks/useLogin";
import loginGradient from "@/assets/login-gradient-teal.jpg";

const Login = () => {
  const { toast } = useToast();
  const { login, isLoading } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: "Error", description: "Please fill in all fields", variant: "destructive" });
      return;
    }
    await login({ email, password });
  };
  return <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4 md:p-8">
      <div className="w-full max-w-6xl bg-card rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[600px]">
          {/* Left Column - Form */}
          <div className="flex items-center justify-center p-10 md:p-14">
            <div className="w-full max-w-md">
              {/* Header */}
              <div className="mb-12">
                <h1 className="text-4xl text-primary mb-3 font-extrabold">
                  ​Toorrii Admin    
                </h1>
                <p className="text-base text-muted-foreground">
                  Secure login to your queue management system
                </p>
              </div>

              {/* Tabs */}
              <div className="flex gap-3 mb-10">
                <button onClick={() => setActiveTab("signin")} className={`flex-1 py-2.5 px-4 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === "signin" ? "bg-primary text-primary-foreground shadow-md" : "bg-transparent text-muted-foreground hover:text-foreground"}`}>
                  Sign In
                </button>
                <button onClick={() => setActiveTab("signup")} className={`flex-1 py-2.5 px-4 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === "signup" ? "bg-primary text-primary-foreground shadow-md" : "bg-transparent text-muted-foreground hover:text-foreground"}`}>
                  Sign Up
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="h-12 bg-muted/50 border-border/50 rounded-xl text-sm placeholder:text-muted-foreground/60" disabled={isLoading} />
                </div>

                <div>
                  <Input id="password" type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} className="h-12 bg-muted/50 border-border/50 rounded-xl text-sm placeholder:text-muted-foreground/60" disabled={isLoading} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" checked={rememberMe} onCheckedChange={checked => setRememberMe(checked as boolean)} disabled={isLoading} className="border-muted-foreground/30" />
                    <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer select-none">
                      Remember me
                    </label>
                  </div>
                  <button type="button" className="text-sm text-primary hover:text-primary-hover transition-colors duration-200 font-medium" disabled={isLoading}>
                    Forgot Password?
                  </button>
                </div>

                <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl text-sm font-medium shadow-md transition-all duration-200" disabled={isLoading}>
                  {isLoading ? <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Signing in...
                    </> : "Login"}
                </Button>
              </form>

              {/* Signature Section */}
              <div className="mt-10 pt-8">
                <Separator className="mb-8" />
                <div className="text-center space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">
                    Secure administrative access
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    © 2024 Toorrii. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Gradient Image */}
          <div className="hidden md:block relative overflow-hidden">
            <img src={loginGradient} alt="Abstract gradient background" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>;
};
export default Login;