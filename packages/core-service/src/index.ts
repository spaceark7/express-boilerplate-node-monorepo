import { webServer } from "./server";

const PORT = process.env.APP_PORT || 3000;

const server = webServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

async function shutdown() {
  console.log("🛑 Shutting down gracefully...");

  // 1. Stop accepting new connections
  server.close(async () => {
    console.log("✅ HTTP server closed");
    process.exit(0);
  });
}

// Handle restarts / Ctrl+C / Docker stop
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);


