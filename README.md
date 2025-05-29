# Keepalive Supabase

A simple Deno server that keeps your Supabase database alive by regularly pinging a table and responding with its current status.

## Features

- Pings your Supabase database to keep it awake
- Returns `200 Supabase Active` if reachable
- Handles errors and reports if Supabase is down
- Can be deployed to keep your Supabase "always on"

## Usage

1. Set your Supabase URL and API key in `server.ts`.
2. Run the server with:

   ```bash
   deno run --allow-net server.ts
