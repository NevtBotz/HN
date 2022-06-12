let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {

    let toM = a => '@' + a.split('@')[0]
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    
if (command == 'jodohnya') {
let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`*Ciee...* ${toM(a)} ❤️ ${toM(b)}`, null, {
        mentions: [a, b]
    })
    }
    
if (command == 'jodohku') {
let ps = groupMetadata.participants.map(v => v.id)
let name = await conn.getName(m.sender)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`*Ciee...* ${name.split("@")[0]} ❤️ ${toM(b)}`, null, {
        mentions: [a, b]
    })
    }
    
}
handler.tags = ['main', 'fun']
handler.command = handler.help = ['jodohnya', 'jodohku']

handler.group = true

export default handler