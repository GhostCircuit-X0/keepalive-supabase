# Supabase Keepalive Server

A simple Deno server that keeps your Supabase database alive by regularly pinging a table and responding with its current status.

## 🚀 Features
- Prevents Supabase from entering an idle state by sending periodic requests
- Uses Deno's built-in HTTP server module
- Returns a status response confirming Supabase is active

## 📦 Installation

Ensure you have [Deno](https://deno.land/) installed before running this script.

## 🛠️ Setup

1. Replace `{{SUPABASE_URL}}` and `{{SUPABASE_KEY}}` in `SUPABASE_URL` and `SUPABASE_KEY` constants with your actual Supabase URL and API key.
2. Save the file as `server.ts`.

## 🌎 Deploying to Deno Deploy

You can deploy this keepalive server to [Deno Deploy](https://deno.com/deploy).

### Steps:
1. Sign in to [Deno Deploy](https://deno.com/deploy).
2. Click **New Project** and select **Import from GitHub** (or manually upload your `server.ts`).
3. Set the entry point to `server.ts`.
4. Add environment variables for `SUPABASE_URL` and `SUPABASE_KEY` via **Project Settings**.
5. Deploy your project and get the live URL.

## 🔍 Response Behavior

| Status | Response             |
|--------|----------------------|
| 200    | Supabase Active      |
| 500    | Supabase Down        |
| 500    | Unexpected Response  |
| 500    | Error Connecting to Supabase |


## 🤝 Contributing

Feel free to fork this repository, submit issues, or make pull requests for improvements.

---

Keep Supabase alive and running! 🚀
