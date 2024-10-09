import { connect } from 'nats'

const natsConnection = await connect({
	servers: ['nats://nats-cluster.default.svc.cluster.local:4222']
})

console.log(natsConnection.info)

await natsConnection.close()
