import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Auth helpers
export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
  return { user, error };
};

// Profile helpers
export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  return { data, error };
};

export const updateProfile = async (userId: string, updates: any) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();
  return { data, error };
};

// Vehicle helpers
export const getVehicles = async (filters?: any) => {
  let query = supabase
    .from('vehicles')
    .select(`
      *,
      profiles:seller_id (
        first_name,
        last_name,
        location,
        user_type
      )
    `)
    .eq('status', 'active')
    .order('created_at', { ascending: false });

  if (filters?.make) {
    query = query.eq('make', filters.make);
  }
  if (filters?.fuel_type) {
    query = query.eq('fuel_type', filters.fuel_type);
  }
  if (filters?.min_price) {
    query = query.gte('price', filters.min_price);
  }
  if (filters?.max_price) {
    query = query.lte('price', filters.max_price);
  }

  const { data, error } = await query;
  return { data, error };
};

export const getVehicleById = async (id: string) => {
  const { data, error } = await supabase
    .from('vehicles')
    .select(`
      *,
      profiles:seller_id (
        first_name,
        last_name,
        phone,
        location,
        user_type
      )
    `)
    .eq('id', id)
    .single();
  return { data, error };
};

export const createVehicle = async (vehicle: any) => {
  const { data, error } = await supabase
    .from('vehicles')
    .insert(vehicle)
    .select()
    .single();
  return { data, error };
};

export const updateVehicle = async (id: string, updates: any) => {
  const { data, error } = await supabase
    .from('vehicles')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  return { data, error };
};

export const deleteVehicle = async (id: string) => {
  const { error } = await supabase
    .from('vehicles')
    .delete()
    .eq('id', id);
  return { error };
};

// Message helpers
export const getMessages = async (userId: string) => {
  const { data, error } = await supabase
    .from('messages')
    .select(`
      *,
      vehicle:vehicle_id (
        title,
        make,
        model,
        year
      ),
      sender:sender_id (
        first_name,
        last_name,
        avatar_url
      ),
      receiver:receiver_id (
        first_name,
        last_name,
        avatar_url
      )
    `)
    .or(`sender_id.eq.${userId},receiver_id.eq.${userId}`)
    .order('created_at', { ascending: false });
  return { data, error };
};

export const sendMessage = async (message: any) => {
  const { data, error } = await supabase
    .from('messages')
    .insert(message)
    .select()
    .single();
  return { data, error };
};

export const markMessageAsRead = async (messageId: string) => {
  const { error } = await supabase
    .from('messages')
    .update({ is_read: true })
    .eq('id', messageId);
  return { error };
};

// Favorites helpers
export const getFavorites = async (userId: string) => {
  const { data, error } = await supabase
    .from('favorites')
    .select(`
      *,
      vehicle:vehicle_id (
        *,
        profiles:seller_id (
          first_name,
          last_name,
          location
        )
      )
    `)
    .eq('user_id', userId);
  return { data, error };
};

export const addToFavorites = async (userId: string, vehicleId: string) => {
  const { data, error } = await supabase
    .from('favorites')
    .insert({ user_id: userId, vehicle_id: vehicleId })
    .select()
    .single();
  return { data, error };
};

export const removeFromFavorites = async (userId: string, vehicleId: string) => {
  const { error } = await supabase
    .from('favorites')
    .delete()
    .eq('user_id', userId)
    .eq('vehicle_id', vehicleId);
  return { error };
};