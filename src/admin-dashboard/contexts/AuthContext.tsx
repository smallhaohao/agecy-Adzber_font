/**
 * 认证上下文管理
 * 处理管理员登录状态、token管理和权限验证
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

interface Admin {
  id: string;
  username: string;
  email: string;
  role: string;
}

interface AuthState {
  isAuthenticated: boolean;
  admin: Admin | null;
  token: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 检查本地存储的token
    const storedToken = localStorage.getItem('admin_token');
    const storedAdmin = localStorage.getItem('admin_info');
    
    if (storedToken && storedAdmin) {
      setToken(storedToken);
      setAdmin(JSON.parse(storedAdmin));
      setIsAuthenticated(true);
    }
    
    setLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch(`${process.env.AIPA_API_DOMAIN}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      
      if (data.success) {
        const { token: authToken, admin: adminInfo } = data.data;
        
        setToken(authToken);
        setAdmin(adminInfo);
        setIsAuthenticated(true);
        
        // 存储到本地
        localStorage.setItem('admin_token', authToken);
        localStorage.setItem('admin_info', JSON.stringify(adminInfo));
        
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = async () => {
    if (token) {
      try {
        await fetch(`${process.env.AIPA_API_DOMAIN}/api/admin/logout`, {
          method: 'POST',
          headers: {
            'Authorization': token,
          },
        });
      } catch (error) {
        console.error('Logout error:', error);
      }
    }

    setToken(null);
    setAdmin(null);
    setIsAuthenticated(false);
    
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_info');
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      admin,
      token,
      login,
      logout,
      loading,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
