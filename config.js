const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // Session & Auth
    SESSION_ID: process.env.SESSION_ID || "", 
    
    // Bot Configuration
    PREFIX: process.env.PREFIX || ".",
    PREFIXES: (process.env.PREFIXES || ".!#?").split(""),
    NO_PREFIX: process.env.NO_PREFIX === "true" || false,
    AUTO_AI: process.env.AUTO_AI === "false" ? false : true,
    AUTO_AI_GROUP: process.env.AUTO_AI_GROUP === "true" || false,
    CALL_REJECT: process.env.CALL_REJECT !== "false",
    
    // GEMINI API KEYS (5 keys, auto-switch)
    GEMINI_KEY_1: process.env.GEMINI_KEY_1 || process.env.GEMINI_KEY || "",
    GEMINI_KEY_2: process.env.GEMINI_KEY_2 || "",
    GEMINI_KEY_3: process.env.GEMINI_KEY_3 || "",
    GEMINI_KEY_4: process.env.GEMINI_KEY_4 || "",
    GEMINI_KEY_5: process.env.GEMINI_KEY_5 || "",
    
    // TERMAI API KEYS (5 keys + single fallback)
    TERMAI_KEY: process.env.TERMAI_KEY || "",
    TERMAI_KEY_1: process.env.TERMAI_KEY_1 || process.env.TERMAI_KEY || "",
    TERMAI_KEY_2: process.env.TERMAI_KEY_2 || "",
    TERMAI_KEY_3: process.env.TERMAI_KEY_3 || "",
    TERMAI_KEY_4: process.env.TERMAI_KEY_4 || "",
    TERMAI_KEY_5: process.env.TERMAI_KEY_5 || "",
    
    // NVIDIA NIM API (DeepSeek V4 Flash)
    NVIDIA_KEY: process.env.NVIDIA_KEY || "",
    NVIDIA_MODEL: process.env.NVIDIA_MODEL || "deepseek-ai/deepseek-v4-flash",
    NVIDIA_ENABLED: process.env.NVIDIA_ENABLED !== "false",

    // MOONCIELLA API (Last Resort, Layer 4)
    MOONCIELLA_KEY: process.env.MOONCIELLA_KEY || "",
    MOONCIELLA_ENABLED: process.env.MOONCIELLA_ENABLED !== "false",
    MOONCIELLA_MODEL: process.env.MOONCIELLA_MODEL || "kr/deepseek-3.2",
    
    // Identity
    BOT_NAME: process.env.BOT_NAME || "LUPI CEBOL",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "6289522183114",
    OWNER_NAME: process.env.OWNER_NAME || "LUPI CEBOL",
    FOOTER: process.env.FOOTER || "LUPI CEBOL",
    DESCRIPTION: process.env.DESCRIPTION || "LUPI CEBOL",
    
    // Alive Message
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/BVt9McxS/photo-2025-06-15-12-14-29-7516148628621099032.jpg",
    LIVE_MSG: process.env.LIVE_MSG || "LUPI CEBOL IS ACTIVE",
    
    // Mode Settings
    MODE: process.env.MODE || "public",
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    
    // Message Features
    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "true",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    
    // Reaction Settings
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "false",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "",
    
    // Status Features
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "Seen by LUPI CEBOL",
    
    // Anti Features
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || process.env.ANTI_BAD || "false",
    ANTI_DELETE: process.env.ANTI_DELETE || "true",
    ANTI_VV: process.env.ANTI_VV || "true",

    // Owner
    OWNER_REACT: process.env.OWNER_REACT || "false",
    DELETE_LINKS: process.env.DELETE_LINKS || "false",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",

    // Telegram
    TELEGRAM_API_ID: process.env.TELEGRAM_API_ID || "",
    TELEGRAM_API_HASH: process.env.TELEGRAM_API_HASH || "",
    TELEGRAM_SESSION: process.env.TELEGRAM_SESSION || "",
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || "",
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
};
