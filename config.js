const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348028064339";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_55_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDc2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgODksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDczLFxuICAgICAgICAyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODUsXG4gICAgICAgIDY3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYwLFxuICAgICAgICA4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyLFxuICAgICAgICA3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDcxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAxODEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzOCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNHZBVk5zSXd5M0FVbEJUSHc0WFNxWXk1K3RhcDV4bHp1RUIrYU1YWFRPdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDI4MDY0MzM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMEE2RDM5MkJBOUExQzg3RTVDRjZBRTAxMkU4NzQ4QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI5NzQ5MTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYTlxc0xTS0xRY2U4VXNlbGZRUjNvZ1wiLFxuICBcInBob25lSWRcIjogXCJjODY3NmFmZC1mODdkLTQ4YWYtOTZlZi0zMmZiZGJhYTQyYjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMjE4LFxuICAgICAgMjMxLFxuICAgICAgMzQsXG4gICAgICAxNjgsXG4gICAgICA4NCxcbiAgICAgIDE2NixcbiAgICAgIDE0LFxuICAgICAgNjEsXG4gICAgICA4NSxcbiAgICAgIDE1NCxcbiAgICAgIDIzNixcbiAgICAgIDE1OSxcbiAgICAgIDIwNixcbiAgICAgIDIyLFxuICAgICAgMTg0LFxuICAgICAgMTQ5LFxuICAgICAgMTMxLFxuICAgICAgMjQ5LFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMSxcbiAgICAgIDE1LFxuICAgICAgMTM4LFxuICAgICAgNDQsXG4gICAgICAxNixcbiAgICAgIDIzNCxcbiAgICAgIDkwLFxuICAgICAgMTkzLFxuICAgICAgMTY5LFxuICAgICAgNjksXG4gICAgICAyMjIsXG4gICAgICAxMzMsXG4gICAgICA0MSxcbiAgICAgIDY5LFxuICAgICAgNjUsXG4gICAgICAyNyxcbiAgICAgIDEwMSxcbiAgICAgIDI1NCxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRlZRNUtGNjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMjgwNjQzMzk6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImZhdGFpbWFsaWsxNVwiLFxuICAgIFwibGlkXCI6IFwiNjE3NDkyOTg1MjAyMDA6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPZkRxZUVIRUx5eXJMb0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlN5aW1ZZWZyVUxaaXd6UjlmUE9sbWJaYytFTThYcUpJdlNUOEQ2V01NU1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidGFtSkhadWt1OXN5L1pzMzlYak5VT1phUDN3U1VrOVlqTXA5VFJ4YVVpT0VJZ3BSTEhISWcxYXF3Rm44UmJBYnJoSGs2YnB4VFAxbWpxeTU1RXZyQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK056bTNPaWZsaTBmT0lkZXpiZzdydnl2eXJJQVZUQll1WHZBcUUxRnA0V2FNK3NvcnR2bWc4c1VXd0E1ay9PQ3lXdDd5b09idWhxRXdwWGJqbm5IRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAyODA2NDMzOTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyOTc0OTEyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1JkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPUmQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJydkpMdWpOZ1hkdGNNQ08zT0NOSWNUNVJoUXVCRDUrdzNpb3kwcjd0MU1FPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwODMxNTIzNTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjk3MjU2NjY3MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
