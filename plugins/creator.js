let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ @${nomorown.split`@`[0]} ✦
------- ${nameown} -------
//------------ BIO
let ppown = 'https://telegra.ph/file/e8f6c7288a8d34157d54e.jpg'
let teksbio = `${htki} *BIODATA* ${htka}
❑ *Nama* : Rozi
❑ *Umur* : 15 Tahun
❑ *Kelas* : 1 Sma

❑ *Ulang Tahun* : 4 juli 2007
❑ *Alamat* : Indonesia, Kalimantan barat, Pontianak

${htjava} *Instagram:* ${sig}
${htjava} *Github:* ${sgh}
•·––––––––––––––––––––––––––·•
`
  let teks = 'Pilih dibawah kak'
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	    {title: "📱 • Nomor David", rowId: ".owner nomor"},
	{title: "🎨 • Biodata David", rowId: ".owner bio"},
	{title: "🌎 • Script yang bot gunakan", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".donasi"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}\n_Hidup Memang Cape, Sama. Kita Semua Sama Cape Untuk Menjalankan Hidup Ini_`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.send2Button( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`, `Donasi`, `.donasi`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
