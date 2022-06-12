let handler = async (m, { conn, text, usedPrefix, command }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    let caption = `*${conn.getName(m.sender)}* Sekarang lagi AFK${text ? ': ' + text : ''}`
conn.sendButton(m.chat, caption, author, null, [
        ['Ikut Afk', '.afk Saya ingin ikut afk juga :l']
    ], m)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler
//tes
