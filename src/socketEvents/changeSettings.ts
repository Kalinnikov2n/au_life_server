export const changeSettings = ({ settings }, socket: any) => socket.emit('changeSettings', { settings })
