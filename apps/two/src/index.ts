import { connect } from 'nats'
import { jetstreamManager } from '@nats-io/jetstream'

const nc = await connect({ servers: ['localhost:4222', 'localhost:4223', 'localhost:4224'] })
const js = await jetstreamManager(nc)
