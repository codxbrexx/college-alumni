import React, { useState, useEffect, useCallback, useContext } from "react"
import { authApi, alumniApi } from "../services/api"
import { AuthContext } from "./AuthContextDef"

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchUser = useCallback(async () => {
        try {
            const response = await alumniApi.getProfile()
            setUser(response.data)
            setError(null)
        } catch (err) {
            setUser(null)
            if (err.status !== 401) {
                setError(err.message)
            }
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchUser()
    }, [fetchUser])

    const register = async (userData) => {
        setLoading(true)
        setError(null)
        try {
            const response = await authApi.register(userData)
            setUser(response.data.user)
            return response
        } catch (err) {
            setError(err.message)
            throw err
        } finally {
            setLoading(false)
        }
    }

    const login = async (identifier, password) => {
        setLoading(true)
        setError(null)
        try {
            const response = await authApi.login({ identifier, password })
            setUser(response.data.user)
            return response
        } catch (err) {
            setError(err.message)
            throw err
        } finally {
            setLoading(false)
        }
    }

    const logout = async () => {
        setLoading(true)
        try {
            await authApi.logout()
        } catch {
            // Ignore logout errors
        } finally {
            setUser(null)
            setLoading(false)
        }
    }

    const forgotPassword = async (email) => {
        setError(null)
        try {
            return await authApi.forgotPassword(email)
        } catch (err) {
            setError(err.message)
            throw err
        }
    }

    const resetPassword = async (token, password) => {
        setLoading(true)
        setError(null)
        try {
            const response = await authApi.resetPassword({ token, password })
            setUser(response.data.user)
            return response
        } catch (err) {
            setError(err.message)
            throw err
        } finally {
            setLoading(false)
        }
    }

    const updateProfile = async (data) => {
        setError(null)
        try {
            const response = await alumniApi.updateProfile(data)
            setUser(response.data)
            return response
        } catch (err) {
            setError(err.message)
            throw err
        }
    }

    const value = {
        user,
        loading,
        error,
        isAuthenticated: !!user,
        register,
        login,
        logout,
        forgotPassword,
        resetPassword,
        updateProfile,
        refreshUser: fetchUser
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
