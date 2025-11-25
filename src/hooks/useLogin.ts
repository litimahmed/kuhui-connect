import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { loginAdmin } from "@/services/api";
import { LoginPayload } from "@/types/auth";

export const useLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (payload: LoginPayload) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await loginAdmin(payload);
      // Here you would typically save the access/refresh tokens
      // e.g., localStorage.setItem('accessToken', data.access);
      toast({ title: "Success", description: "Welcome back!" });
      navigate("/");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Login failed. Please try again.";
      setError(errorMessage);
      toast({ title: "Error", description: errorMessage, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};