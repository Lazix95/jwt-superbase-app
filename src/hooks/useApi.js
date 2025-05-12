import { createClient } from '@supabase/supabase-js'
import {useEffect, useMemo, useRef, useState} from "react";
const supabaseUrl = 'https://baawitrgtkxttxmreqln.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhYXdpdHJndGt4dHR4bXJlcWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNjI1NDcsImV4cCI6MjA2MjYzODU0N30.HMBdnJ1Y34dHBiNq66MrJ0aICsA28VEFehRdxm-sEsQ'
const supabase = createClient(supabaseUrl, supabaseKey);

export function useApi() {
  const timeout = useRef(null);
  const [token, setToken] = useState(null);
  const [tokenSavedAt, setTokenSavedAt] = useState(null);
  const isLoggedIn = useMemo(() => !!token, [token]);

  // Koristiti tokenSavedAt i token.expires_in za racunanje timestamp-a kad token istice.
  const tokenExpiresAt = useMemo(() => {
    if (!token) return null;
    return tokenSavedAt + (token.expires_in - 59.5 * 60) * 1000;
  }, [token, tokenSavedAt]);

  // Napraviti da auto refresh radi ispravno nakon refresha stranice (sesija mora da se zadrzi);
  useEffect(() => {
    let savedToken = localStorage.getItem('token');
    if (!savedToken) return;
    savedToken = JSON.parse(savedToken);
    setToken(savedToken.token);
    setTokenSavedAt(savedToken.savedAt);
  }, []);

  useEffect(() => {
    if (!tokenExpiresAt) return;
    if (timeout.current) {
      console.log('clearTimeout');
      clearTimeout(timeout.current);
    }
    const timestamp = new Date().getTime();
    const time = tokenExpiresAt - timestamp;
    console.log('time ', time / 1000);
    if (time >= 0) {
      timeout.current = setTimeout(refreshToken, time);
    } else {
      refreshToken();
    }

  }, [tokenExpiresAt, token]);

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
    const savedAt = new Date().getTime();
    setToken(accessToken);
    setTokenSavedAt(savedAt);
    localStorage.setItem('token', JSON.stringify({token: accessToken, savedAt}));
    console.log('JWT Access Token:', accessToken)
  }

  async function refreshToken() {
    const { data, error } = await supabase.auth.refreshSession({ refresh_token: token.refresh_token + '2'})

    if (error) {
      logout();
      console.error('Failed to refresh token:', error)
      return null
    }

    const newSession = data.session
    const savedAt = new Date().getTime();
    console.log('New JWT access token:', newSession);
    setToken(newSession);
    setTokenSavedAt(savedAt);
    localStorage.setItem('token', JSON.stringify({token: newSession, savedAt}));
    return newSession
  }

  async function logout() {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.error('Logout error:', error)
    } else {
      console.log('User successfully logged out.')
      setToken(null);
      setToken(null);
      setTokenSavedAt(null);
      localStorage.clear()
    }
  }

  return {login, refreshToken, logout, token, tokenSavedAt, tokenExpiresAt, isLoggedIn};
}
