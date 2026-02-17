-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  date VARCHAR(100) NOT NULL,
  time VARCHAR(100) NOT NULL,
  location VARCHAR(255) NOT NULL,
  attendees INTEGER DEFAULT 0,
  max_attendees INTEGER NOT NULL,
  type VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  image VARCHAR(500),
  highlights TEXT[] DEFAULT '{}',
  status VARCHAR(20) DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'past')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on status for faster queries
CREATE INDEX IF NOT EXISTS idx_events_status ON events(status);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_events_created_at ON events(created_at DESC);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON events
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Allow public read access to events
CREATE POLICY "Allow public read access" ON events
  FOR SELECT
  USING (true);

-- For admin operations, we'll handle authentication in the API layer
-- This allows all operations for now (secure via API authentication)
CREATE POLICY "Allow all operations for authenticated users" ON events
  FOR ALL
  USING (true)
  WITH CHECK (true);
