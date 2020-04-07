import { ASSETS_URL } from '.'

const fileLoader = game => {
  game.load.crossOrigin = 'Anonymous'
  game.stage.backgroundColor = '#1E1E1E'
  game.load.image('asphalt', `${ASSETS_URL}/sprites/asphalt/asphalt.gif`)
  game.load.image('car', `${ASSETS_URL}/sprites/car/car.gif`)
}

export default fileLoader