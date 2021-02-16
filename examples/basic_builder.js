const {
  ChatMessage,
  Message,
  MessageComponent
} = require('../')('1.16')

const exampleMessage = new Message()
  .setTranslate('chat.type.text')
  .addComponent(new MessageComponent().setText('Notch'))
  .addComponent([
    new MessageComponent().setColor('red').setBold(true).setText('Hello '),
    new MessageComponent().setColor('white').setItalic(true).setText('world!')
  ])

// json format for direct use in minecraft (ie: chat packet or /tellraw @a OUTPUT)
console.log(JSON.stringify(exampleMessage))

const message = new ChatMessage(exampleMessage)

console.log(message.toString()) // to string
console.log(message.toAnsi()) // to string (with console coloring)