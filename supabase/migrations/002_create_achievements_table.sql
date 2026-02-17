-- Create achievements table
CREATE TABLE achievements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    date VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    image TEXT,
    impact TEXT,
    details TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on category for filtering
CREATE INDEX idx_achievements_category ON achievements(category);

-- Create index on date for sorting
CREATE INDEX idx_achievements_date ON achievements(date);

-- Create updated_at trigger function (if not exists)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
CREATE TRIGGER update_achievements_updated_at
    BEFORE UPDATE ON achievements
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON achievements
    FOR SELECT USING (true);

-- Allow authenticated write access (enforced by API authentication)
CREATE POLICY "Allow authenticated write access" ON achievements
    FOR ALL USING (true);

-- Add comments for documentation
COMMENT ON TABLE achievements IS 'Stores major achievements and milestones';
COMMENT ON COLUMN achievements.title IS 'Achievement title';
COMMENT ON COLUMN achievements.description IS 'Short description for cards';
COMMENT ON COLUMN achievements.date IS 'Achievement date or year';
COMMENT ON COLUMN achievements.category IS 'Category (e.g., Competition, Recognition, Community)';
COMMENT ON COLUMN achievements.image IS 'Cloudinary image URL';
COMMENT ON COLUMN achievements.impact IS 'Impact statement';
COMMENT ON COLUMN achievements.details IS 'Detailed description';
