const amqp = require('amqplib');

async function listener() {
  try {
    const connection = await amqp.connect('amqp://admin:123456@192.168.21.25:15672/');
    const channel = await connection.createChannel();
    const queue = 'demo_queue';
    await channel.assertQueue(queue, {
      durable: false
    })
  } catch(e) {
    console.error('接收消息时出错:', e);
  }
}

listener();