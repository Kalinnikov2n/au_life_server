import { users } from '../mocks/users'
import { changeSettings } from './changeSettings'
import { initEvent } from './init'
import { startGame } from './startGame'

export const socktEventListener = (connection: any, socket: any) => {
  connection.on('init', (msg) => initEvent(msg, socket))
  connection.on('changeSettings', (msg) => changeSettings(msg, socket))
  connection.on('startGame', (msg) => startGame(msg, socket))
}
