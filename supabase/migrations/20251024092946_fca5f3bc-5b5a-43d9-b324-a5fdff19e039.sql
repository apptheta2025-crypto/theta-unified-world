-- Create theta_create_waitlist table
CREATE TABLE public.theta_create_waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.theta_create_waitlist ENABLE ROW LEVEL SECURITY;

-- Create policies for public access
CREATE POLICY "Anyone can join theta create waitlist" 
ON public.theta_create_waitlist 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Theta create waitlist data is private" 
ON public.theta_create_waitlist 
FOR SELECT 
USING (false);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_theta_create_waitlist_updated_at
BEFORE UPDATE ON public.theta_create_waitlist
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();