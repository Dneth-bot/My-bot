const fs = require("fs");
if (fs.existsSync("config.env")) require("dotenv").config({ path: "./config.env" });

module.exports = {
  https://mega.nz/fm/Dc9FXRhR
  SESSION_ID: process.env.SESSION_ID || "3NNHSTyL#VgdtpuHknED2CoGuPNLeLF1jGolA06lfOjtzrmV3pUo",

  ALIVE_IMG:
    process.env.ALIVE_IMG ||
    "https://github.com/DANUWA-MD/DANUWA-MD/blob/main/images/DANUWA-MD.png?raw=true",

  ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 DINETH_MD Is Alive Now😍*",

  BOT_OWNER: process.env.BOT_OWNER || "94742438184", // ✅ Digits only
};
