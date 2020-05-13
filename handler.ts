import service from './src/service'
import {handler as io} from './src/io'

export const hello = async (event, context) => {
  const input = io.input(event)
  console.log("Event log David: ", input)

  const result = service.hello(input)
  return io.returnSuccess(result)
}

export const goodbye = async (event, context) => {
  console.log("Event log David get ====== ")
  const result = service.goodbyeservice(event)
  return io.returnSuccess(result)
}
