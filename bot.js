(async () => {
    const Discord = require("discord.js");
    const Database = require("easy-json-database");
    const moment = require('moment');
    const {
        DB
    } = require("quickmongo");
    const {
        MessageEmbed,
        MessageButton,
        MessageActionRow,
        Intents,
        Permissions,
        MessageSelectMenu
    } = require('discord.js')
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
        joiningMember: null,
        reply: null,
        tokenInvalid: false,
        tokenError: null,
        player: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };
    s4d.client = new s4d.Discord.Client({
        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
        partials: ["REACTION"]
    });
    const {
        Player,
        QueueRepeatMode
    } = require("discord-player")
    s4d.player = new Player(s4d.client)

    function colourRgb(r, g, b) {
        r = Math.max(Math.min(Number(r), 100), 0) * 2.55;
        g = Math.max(Math.min(Number(g), 100), 0) * 2.55;
        b = Math.max(Math.min(Number(b), 100), 0) * 2.55;
        r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
        g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
        b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
        return '#' + r + g + b;
    }

    await s4d.client.login(process.env.TOKEN).catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
    });

    s4d.client.on('ready', async () => {

        while (s4d.client && s4d.client.token) {
            await delay(50);
            if (((((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence.status) == 'offline') {
                s4d.client.channels.cache.get('846431850783440916').send({
                    embeds: [{
                        title: 'Report',
                        color: (colourRgb(50, 50, 50)),
                        image: {
                            url: null
                        },
                        description: 'Status of the Discord Bot Tesla Model Finder: Offline / Down',
                        footer: {
                            text: 'Powered by Googl Bot Series (Normal and Beta)'
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/attachments/848483779865739344/889841898582310912/icons_offline.png'
                        }
                    }],
                });
            }
            if (((((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence.status) == 'online') {
                s4d.client.channels.cache.get('846431850783440916').send({
                    embeds: [{
                        title: 'Report',
                        color: (colourRgb(50, 50, 50)),
                        image: {
                            url: null
                        },
                        description: 'Status of the Discord Bot Tesla Model Finder: Online / Up',
                        footer: {
                            text: 'Powered by Googl Bot Series (Normal and Beta)'
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/attachments/848483779865739344/889841898305495120/icons_online.png'
                        }
                    }],
                });
            }

            
        }

    });

    return s4d;
})();
