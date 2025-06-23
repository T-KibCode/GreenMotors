export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          first_name: string | null
          last_name: string | null
          phone: string | null
          location: string | null
          avatar_url: string | null
          user_type: 'individual' | 'dealer'
          is_verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          location?: string | null
          avatar_url?: string | null
          user_type?: 'individual' | 'dealer'
          is_verified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          location?: string | null
          avatar_url?: string | null
          user_type?: 'individual' | 'dealer'
          is_verified?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      dealers: {
        Row: {
          id: string
          profile_id: string
          business_name: string
          business_address: string | null
          business_phone: string | null
          subscription_plan: 'starter' | 'professional' | 'enterprise'
          subscription_status: 'active' | 'inactive' | 'trial'
          max_listings: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          business_name: string
          business_address?: string | null
          business_phone?: string | null
          subscription_plan?: 'starter' | 'professional' | 'enterprise'
          subscription_status?: 'active' | 'inactive' | 'trial'
          max_listings?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          profile_id?: string
          business_name?: string
          business_address?: string | null
          business_phone?: string | null
          subscription_plan?: 'starter' | 'professional' | 'enterprise'
          subscription_status?: 'active' | 'inactive' | 'trial'
          max_listings?: number
          created_at?: string
          updated_at?: string
        }
      }
      vehicles: {
        Row: {
          id: string
          seller_id: string
          title: string
          make: string
          model: string
          year: number
          mileage: number
          fuel_type: 'petrol' | 'diesel' | 'electric' | 'hybrid'
          price: number
          description: string | null
          location: string
          images: string[]
          status: 'active' | 'sold' | 'pending' | 'inactive'
          is_premium: boolean
          views_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          seller_id: string
          title: string
          make: string
          model: string
          year: number
          mileage: number
          fuel_type: 'petrol' | 'diesel' | 'electric' | 'hybrid'
          price: number
          description?: string | null
          location: string
          images?: string[]
          status?: 'active' | 'sold' | 'pending' | 'inactive'
          is_premium?: boolean
          views_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          seller_id?: string
          title?: string
          make?: string
          model?: string
          year?: number
          mileage?: number
          fuel_type?: 'petrol' | 'diesel' | 'electric' | 'hybrid'
          price?: number
          description?: string | null
          location?: string
          images?: string[]
          status?: 'active' | 'sold' | 'pending' | 'inactive'
          is_premium?: boolean
          views_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          vehicle_id: string
          sender_id: string
          receiver_id: string
          content: string
          is_read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          vehicle_id: string
          sender_id: string
          receiver_id: string
          content: string
          is_read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          vehicle_id?: string
          sender_id?: string
          receiver_id?: string
          content?: string
          is_read?: boolean
          created_at?: string
        }
      }
      favorites: {
        Row: {
          id: string
          user_id: string
          vehicle_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          vehicle_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          vehicle_id?: string
          created_at?: string
        }
      }
    }
  }
}