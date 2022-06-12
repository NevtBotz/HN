import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

/**Owner number**/
global.owner = [
  ['6283190403329'],
  ['6281313312123'],
  ['62895605887712'],
  ['6282328303332'],
  ['62887435373103'],
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
 'https://api.lolhuman.xyz' : '327a6596e4c4baa20c756132',
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

// Sticker WM
global.packname = 'Created By\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.author = 'Hinata-Md'
global.wm = "Hinata-Md X Wudysoft"
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
