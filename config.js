import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import moment from 'moment-timezone'

/**Owner number**/
global.owner = [
  ['6282195322106', '️Owner1 Hinata-Md', true],
  ['6282195322106', '️Owner2 Hinata-Md', true],
  ['6282195322106', '️Owner3 Hinata-Md', true],
  ['6282195322106', '️Owner4 Hinata-Md', true],
  ['6282195322106', '️Owner5 Hinata-Md', true],
  ['6282195322106', '️Owner6 Hinata-Md', true],
  ['6282195322106', '️Owner Hinata-Md', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.girlfren = [] // Your gf/pacar

//Api website
global.APIs = { // API Prefix
  // name: 'https://website'
 amel : 'https://melcanz.com',
 bg : 'http://bochil.ddns.net',
 bsbt : 'https://rest-beni.herokuapp.com',
 bx : 'https://bx-hunter.herokuapp.com',
 dhnjing : 'https://dhnjing.xyz',
 dzx : 'https://api.dhamzxploit.my.id',
 erdwepe : 'https://erdwpe-api.herokuapp.com',
 fdci : 'https://api.fdci.se',
 hardianto : 'https://hardianto.xyz',
 jonaz : 'https://jonaz-api-v2.herokuapp.com',
 LeysCoder : 'https://leyscoders-api.herokuapp.com',
 lolhuman : 'https://api.lolhuman.xyz',
 neoxr : 'https://neoxr-api.herokuapp.com',
 nrtm : 'https://nurutomo.herokuapp.com',
 nzcha : 'http://nzcha-apii.herokuapp.com',
 pencarikode : 'https://pencarikode.xyz',
 violetics : 'https://violetics.pw',
 xteam : 'https://api.xteam.xyz',
 zahir : 'https://zahirr-web.herokuapp.com',
 zekais : 'http://zekais-api.herokuapp.com',
 zeks : 'https://api.zeks.xyz',
 zenz : 'https://zenzapis.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
 'https://api.lolhuman.xyz' : '9b817532fadff8fc7cb86862',
 'https://api.xteam.xyz' : 'HIRO',
 'https://api.zeks.xyz' : 'apivinz',
 'https://hardianto-chan.herokuapp.com' : 'hardianto',
 'https://hardianto.xyz' : 'hardianto',
 'https://leyscoders-api.herokuapp.com' : 'MIMINGANZ',
 'https://melcanz.com' : 'manHkmst',
 'https://pencarikode.xyz' : 'pais',
 'https://rest-beni.herokuapp.com' : 'benniismaelapikey',
 'https://violetics.pw' : 'beta',
 'https://zahirr-web.herokuapp.com' : 'zahirgans',
 'https://zekais-api.herokuapp.com' : 'zekais',
 'https://zenzapis.xyz' : 'f9fccfcff1'
}

//Apikey alpha
let api = ['Gh5QOSGn', 'NaVPLSqV', 'yLwXcHYJ', 'oFmq6PEB', 'vZuOHLdg', 'qwh5dMe6', 'fGBTtQkE']
let keyalpha = api[Math.floor(Math.random() * api.length)]
global.apikeys = keyalpha

//Thumb
global.wm = '                「 Hinata-Md あ⁩ 」' //Main Watermark
global.wm2 = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘օառɛʀ - chαn˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'
global.wm3 = '⫹⫺ Hinata-Md'
global.botdate = `⫹⫺ Date :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`
global.titlebot = `⫹⫺ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}\n⫹⫺ Date Server :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`


global.thumbnailUrl = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
]

global.sgc = 'https://chat.whatsapp.com/HAuQGhEBwqFK8CzrrYOwLq'
global.sig = 'https://instagram.com/wudysoft.2'

//Ini cuma simpenan owner kanna kok :v
global.hoppai = ['https://telegra.ph/file/f34d76df4a2065af1a5ba.jpg','https://telegra.ph/file/05c1b22ee83bcd7723b4d.jpg','https://telegra.ph/file/1d886f66a44871205335f.jpg','https://telegra.ph/file/54d19a9094dc509370bf9.jpg','https://telegra.ph/file/e649475bcde78a9977ee5.jpg','https://telegra.ph/file/32ba20b6139b129c559c8.jpg','https://telegra.ph/file/948434cda49e4af5d9f11.jpg','https://telegra.ph/file/6f353c68533283fe79871.jpg','https://telegra.ph/file/de268ca9b01101acf2b8a.jpg','https://telegra.ph/file/fc6c5b2ae9a20c4256e7f.jpg', 'https://telegra.ph/file/efb70bb0988640f841742.jpg', 'https://telegra.ph/file/77d03fff530a2bcff3bf7.jpg','https://telegra.ph/file/6e4623464a659dd8d902b.jpg','https://telegra.ph/file/685aa39f0cb0f2c4fd85b.jpg','https://telegra.ph/file/10454b9ad693e1eefea58.jpg','https://telegra.ph/file/7de8ce5c290c3d8be0856.jpg','https://telegra.ph/file/8d7c4eadb7a4722747074.jpg','https://telegra.ph/file/ccc5f8eaac0f30919ef6c.jpg','https://telegra.ph/file/95f4b43439d7888f15ea5.jpg','https://telegra.ph/file/9c2a750db555bd2fad1f3.jpg', 'https://telegra.ph/file/efc5f7e637744fd6bfec2.jpg','https://telegra.ph/file/3a5231aade245665633bd.jpg','https://telegra.ph/file/2ecfc76feb26ec1eab99b.jpg','https://telegra.ph/file/dabb70983b4e833d98344.jpg','https://telegra.ph/file/75193a893e38fc580afe6.jpg','https://telegra.ph/file/217aa0f4ec76273808aa4.jpg','https://telegra.ph/file/8a35d3446b97ae22c7b23.jpg','https://telegra.ph/file/092df720701575a7ceaaa.jpg','https://telegra.ph/file/a65184a676cd648de34c3.jpg',
'https://telegra.ph/file/180e28807e78419d45537.jpg','https://telegra.ph/file/140eff27be983e0cd6781.jpg','https://telegra.ph/file/1581b791e16d0029e16b5.jpg','https://telegra.ph/file/6a4b36372b4f265bae3bc.jpg','https://telegra.ph/file/093caff422f194f00bc6c.jpg','https://telegra.ph/file/2294b7ab49eca8a8046b2.jpg','https://telegra.ph/file/869224d1c417e8b5c8ff1.jpg','https://telegra.ph/file/a78443f0ee887f46808d7.jpg','https://telegra.ph/file/1889878933264d16c58bf.jpg','https://telegra.ph/file/735aeb47d9c4aa87aaaf3.jpg','https://telegra.ph/file/fcf861516db09dda164e0.jpg','https://telegra.ph/file/355d96d7e06d109435f67.jpg']
global.hwaifu = ['https://telegra.ph/file/a3bd959e8cf3131be2213.jpg']
global.hyuri = ['https://telegra.ph/file/5d908f4a17515a15c6202.jpg']
global.hLokun = ['https://telegra.ph/file/8902f4fc550727a62e99f.jpg','https://telegra.ph/file/6a6a40e924c16a8f0de03.jpg', 'https://telegra.ph/file/b035d3038a0b124f1d846.jpg', 'https://telegra.ph/file/9d475f7852bf6f6193c80.jpg']
global.hloli = ['https://telegra.ph/file/872c360a7104d86752650.jpg', 'https://telegra.ph/file/f6bbb53620374257bfa51.jpg','https://telegra.ph/file/9b76375f3869440818d57.jpg','https://telegra.ph/file/a78443f0ee887f46808d7.jpg']
global.hneko = ['https://telegra.ph/file/805a37b1e9a963e7d7ecf.jpg', 'https://telegra.ph/file/f9c4d97477b647cf57a2b.jpg','https://telegra.ph/file/b6905b77e6c7732592a13.jpg', 'https://telegra.ph/file/9f82c432d0ba4cfffda9a.png', 'https://telegra.ph/file/484083949d4bfd763b8cf.jpg']
global.hbunny = ['https://telegra.ph/file/2b71a8d46d29351479fbc.jpg', 'https://telegra.ph/file/ae610571b62b5ab876e9c.jpg', 'https://telegra.ph/file/cc8255d5b989eef587af2.jpg','https://telegra.ph/file/30d2e7375996abd9cfee3.jpg', 'https://telegra.ph/file/78980c90c44a95a1d30fa.jpg', 'https://telegra.ph/file/2ac5d8ccf23e73eaa5bfa.jpg']
global.hbeach = ['https://telegra.ph/file/14ae0ba2da77d74e6b80c.jpg', 'https://telegra.ph/file/b6905b77e6c7732592a13.jpg','https://telegra.ph/file/9da45a352eb4c40e5d641.jpg', 'https://telegra.ph/file/59e78846ee365975ee6e3.jpg','https://telegra.ph/file/1bf7dee46b83eb4c41d7d.jpg','https://telegra.ph/file/0525a7929f819cb8278f3.jpg']

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

// Sticker WM
global.packname = 'Created By'
global.author = "Hinata-Md X Wudysoft"
global.multiplier = 69 // The higher, The harder levelup

//
global.eror = 'Erorr...'
global.wait = 'Wait...'
global.render = 'Render...'
global.webs = 'https://s.id/Cerdasin62/'//Your Website
global.logo = "https://i.pinimg.com/564x/1d/10/8e/1d108e56fb96be61d9b48f7e17dd95b7.jpg"//Your logo
global.gcwangsaf = "https://chat.whatsapp.com/HAuQGhEBwqFK8CzrrYOwLq"//Link Group whatsapp

//Donasi
global.saweria = "https://saweria.co/wudysoft"// website saweria.co
global.dana = ["0887435373103"]
global.pulsa = ["082195322106"]//pulsa here
global.trakteer = "https://trakteer.id/wudysoft"//Link url https://
global.paypal = "wudysoft@gmail.com"//paypal email
global.gopay = "082195322106"//Numver for Payment digital Gopay Gojek

//Rpg
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      strength: '🦹‍♀️',
      mana: '🪄',
      stamina: '⚡',
      agility: '🤸‍♂️',
      intelligence: '🧠',
      exp: '✉️',
      pointxp: '📧',
      money: '💵',
      potion: '🥤',
      gems: '🍀',
      crystal: '🔮',
      diamond: '💎',
      darkcrystal: '♠️',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '🗡️',
      arc: '🏹',
      bow: '🏹',
      magicwand: '⚕️',
      keyiron: '🗝️',
      keygold: '🔑',
      knife: '🔪',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      cow: '🐄',
      bull: '🐃',
      tiger: '🐅',
      lion: '🦁',
      giraffe: '🦒',
      elephant: '🐘',
      snake: '🐍',
      dragon: '🐉',
      chicken: '🐓',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
