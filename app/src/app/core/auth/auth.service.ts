import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';

const AUTH_KEY = 'auth_user';

export interface AuthUser {
  email: string;
  name?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSignal = signal<AuthUser | null>(this.getStoredUser());

  currentUser = this.userSignal.asReadonly();
  isLoggedIn = computed(() => !!this.userSignal());

  constructor(private router: Router) {}

  private getStoredUser(): AuthUser | null {
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      return raw ? (JSON.parse(raw) as AuthUser) : null;
    } catch {
      return null;
    }
  }

  login(email: string, password: string): boolean {
    // 데모: email/password 검증 (실제로는 API 호출)
    if (!email?.trim() || !password?.trim()) return false;
    const user: AuthUser = { email: email.trim(), name: email.split('@')[0] };
    this.userSignal.set(user);
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    return true;
  }

  logout(): void {
    this.userSignal.set(null);
    localStorage.removeItem(AUTH_KEY);
    this.router.navigate(['/login']);
  }
}
