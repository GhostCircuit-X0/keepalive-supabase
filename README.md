# 🔄 Supabase Keepalive Server

[![GitHub Repo stars](https://img.shields.io/github/stars/Hike-projects/keepalive-supabase?style=social)](https://github.com/Hike-projects/keepalive-supabase)
[![GitHub forks](https://img.shields.io/github/forks/Hike-projects/keepalive-supabase?style=social)](https://github.com/Hike-projects/keepalive-supabase/fork)
[![GitHub issues](https://img.shields.io/github/issues/Hike-projects/keepalive-supabase)](https://github.com/Hike-projects/keepalive-supabase/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/Hike-projects/keepalive-supabase)](https://github.com/Hike-projects/keepalive-supabase/pulls)
[![GitHub license](https://img.shields.io/github/license/Hike-projects/keepalive-supabase)](https://github.com/Hike-projects/keepalive-supabase/blob/main/LICENSE)

---

A lightweight Deno server designed to keep your Supabase database alive by periodically pinging a table and returning its status.

## 🚀 Features
- Prevents Supabase from entering an idle state by sending scheduled requests
- Uses Deno's built-in HTTP server module
- Returns Supabase activity status in real-time

## 🛠️ Setup

1. **Configure API Keys**  
   Replace `{{SUPABASE_URL}}` and `{{SUPABASE_KEY}}` in the script with your actual Supabase credentials.

2. **Create `server.ts`**  
   Save the script as `server.ts`.

## 🌎 Deploying to Deno Deploy

Deploy your keepalive server using [Deno Deploy](https://deno.com/deploy).

### ✨ Steps:
1. **Create a GitHub Repository**  
   - Go to [GitHub](https://github.com/).
   - Click **New Repository** and name it `supabase-keepalive`.
   - Clone it locally and upload your `server.ts` file.

2. **Deploy to Deno Deploy**  
   - Log into [Deno Deploy](https://deno.com/deploy).
   - Click **New Project** and import from GitHub.
   - Select `server.ts` as the entry point.
   - Configure environment variables (`SUPABASE_URL`, `SUPABASE_KEY`).
   - Click **Deploy** and retrieve your live URL.

## 🔍 Response Behavior

| Status | Response             |
|--------|----------------------|
| 200    | Supabase Active      |
| 500    | Supabase Down        |
| 500    | Unexpected Response  |
| 500    | Error Connecting to Supabase |

## 📈 Monitoring with UptimeRobot

For continuous monitoring:
- Use [UptimeRobot](https://uptimerobot.com/) or similar services.
- Create a new **HTTP monitor** pointing to your Deno Deploy URL.
- Get notifications if downtime occurs.

## 🤝 Contributing

- Fork the repository  
- Submit issues or feature requests  
- Make pull requests for improvements  

---

🚀 Keep Supabase running & responsive!
