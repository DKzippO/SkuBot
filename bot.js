const { WAConnection, MessageType } = require('@adiwajshing/baileys')

const client = new WAConnection()

client.connect()

client.on('open', () => {
  console.log('Conectado a WhatsApp')
})

client.on('message', async message => {
  console.log(`Recibido mensaje: ${message.body}`)

  if (message.body === 'Hola') {
    const number = message.senderId
    const message = 'Hola, soy un bot de WhatsApp'
    client.sendMessage(number, message, MessageType.text)
  }
})
