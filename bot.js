(async () => {
    const Discord = require("discord.js");
    const Database = require("easy-json-database");
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
        joiningMember: null,
        reply: null,
        tokenInvalid: false,
        tokenError: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };
    s4d.client = new s4d.Discord.Client({
        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
        partials: ["REACTION", "CHANNEL"]
    });

    await s4d.client.login(process.env.TOKEN).catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
    });

    s4d.client.on('ready', async () => {

        while (s4d.client && s4d.client.token) {
            await delay(50);
            if (((((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence ? (((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence.status : 'offline') == 'offline' && (typeof(s4d.client.guilds.cache.find((g) => g.roles.cache.get('891297294815752214') !== undefined).roles.cache.get('891297294815752214')) !== undefined)) {
                await delay(Number(90) * 1000);
                s4d.client.channels.cache.get('846431850783440916').send({
                    embeds: [{
                        title: null,
                        color: null,
                        image: {
                            url: null
                        },
                        description: 'Status of Tesla Model Finder terminated by Discord Bot Tracker: Offline',
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/attachments/848483779865739344/889841898582310912/icons_offline.png'
                        }
                    }],
                    content: 'Real Time Data below:'
                });
                await delay(Number(90) * 1000);
            }
            if (((((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence ? (((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence.status : 'offline') == 'online' && (typeof(s4d.client.guilds.cache.find((g) => g.roles.cache.get('891297294815752214') !== undefined).roles.cache.get('891297294815752214')) !== undefined)) {
                await delay(Number(90) * 1000);
                s4d.client.channels.cache.get('846431850783440916').send({
                    embeds: [{
                        title: null,
                        color: null,
                        image: {
                            url: null
                        },
                        description: 'Status of Tesla Model Finder terminated by Discord Bot Tracker: Online',
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/attachments/848483779865739344/889841898305495120/icons_online.png'
                        }
                    }],
                    content: 'Real Time Data below:'
                });
                await delay(Number(90) * 1000);
            }
            if (((((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence ? (((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence.status : 'offline') == 'idle' && (typeof(s4d.client.guilds.cache.find((g) => g.roles.cache.get('891297294815752214') !== undefined).roles.cache.get('891297294815752214')) !== undefined)) {
                await delay(Number(90) * 1000);
                s4d.client.channels.cache.get('846431850783440916').send({
                    embeds: [{
                        title: null,
                        color: null,
                        image: {
                            url: null
                        },
                        description: 'Status of Tesla Model Finder terminated by Discord Bot Tracker: Idle',
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/attachments/848483779865739344/889841898888499260/icons_idle.png'
                        }
                    }],
                    content: 'Real Time Data below:'
                });
                await delay(Number(90) * 1000);
            }
            if (((((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence ? (((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence.status : 'offline') == 'dnd' && (typeof(s4d.client.guilds.cache.find((g) => g.roles.cache.get('891297294815752214') !== undefined).roles.cache.get('891297294815752214')) !== undefined)) {
                await delay(Number(90) * 1000);
                s4d.client.channels.cache.get('846431850783440916').send({
                    embeds: [{
                        title: null,
                        color: null,
                        image: {
                            url: null
                        },
                        description: 'Status of Tesla Model Finder terminated by Discord Bot Tracker: Do Not Disturb',
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/attachments/848483779865739344/889841899354062878/icons_busy.png'
                        }
                    }],
                    content: 'Real Time Data below:'
                });
                await delay(Number(90) * 1000);
            }
            if (((((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence ? (((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence.activities[0] ? (((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence.activities[0].type === "STREAMING" : false : false) && (typeof(s4d.client.guilds.cache.find((g) => g.roles.cache.get('891297294815752214') !== undefined).roles.cache.get('891297294815752214')) !== undefined)) {
                await delay(Number(90) * 1000);
                s4d.client.channels.cache.get('846431850783440916').send({
                    embeds: [{
                        title: null,
                        color: null,
                        image: {
                            url: null
                        },
                        description: 'Status of Tesla Model Finder terminated by Discord Bot Tracker: Streaming',
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/attachments/848483779865739344/889841899186298911/icons_stream.png'
                        }
                    }],
                    content: 'Real Time Data below:'
                });
                await delay(Number(90) * 1000);
            }

            
        }

    });


    return s4d;
})();
