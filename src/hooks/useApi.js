import { createClient } from '@supabase/supabase-js'
import {useMemo, useState} from "react";
const supabaseUrl = 'https://baawitrgtkxttxmreqln.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhYXdpdHJndGt4dHR4bXJlcWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNjI1NDcsImV4cCI6MjA2MjYzODU0N30.HMBdnJ1Y34dHBiNq66MrJ0aICsA28VEFehRdxm-sEsQ'
const supabase = createClient(supabaseUrl, supabaseKey);

export function useApi() {
  const [token, setToken] = useState(null);
  const isLoggedIn = useMemo(() => !!token, [token]);

  async function login() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'admin@admin.com',
      password: 'admin',
    })

    if (error) {
      console.error('Login error:', error)
      return
    }

    const accessToken = data.session;
    setToken(accessToken);
    console.log('JWT Access Token:', accessToken)
  }

  async function refreshToken() {
    const { data, error } = await supabase.auth.refreshSession({ refresh_token: token.refresh_token})

    if (error) {
      console.error('Failed to refresh token:', error)
      return null
    }

    const newSession = data.session
    console.log('New JWT access token:', newSession);
    setToken(newSession);
    return newSession
  }

  async function logout() {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.error('Logout error:', error)
    } else {
      console.log('User successfully logged out.')
      setToken(null);
    }
  }

  return {login, refreshToken, logout, token, isLoggedIn};
}