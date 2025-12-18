import { neon } from '@neondatabase/serverless';

// Initialize Neon database connection
// Make sure to add DATABASE_URL to your .env file
const sql = neon(process.env.DATABASE_URL);

export default sql;

// SQL to create the tables (run this once in Neon console):
/*
CREATE TABLE IF NOT EXISTS email_subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  wallet_address VARCHAR(42),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS settings (
  id SERIAL PRIMARY KEY,
  key VARCHAR(255) UNIQUE NOT NULL,
  value TEXT NOT NULL
);

-- Insert default PDF link
INSERT INTO settings (key, value) VALUES ('pdf_download_link', 'https://example.com/decode-book.pdf')
ON CONFLICT (key) DO NOTHING;

-- If you already have the table, run this to add wallet_address column:
-- ALTER TABLE email_subscribers ADD COLUMN IF NOT EXISTS wallet_address VARCHAR(42);
*/
