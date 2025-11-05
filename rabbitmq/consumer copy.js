const amqp = require('amqplib');

// 连接 RabbitMQ 服务器并接收消息
async function receiveMessage() {
  try {
    // 连接到自定义端口的 RabbitMQ 服务器
    const connection = await amqp.connect('amqp://admin:123456@192.168.21.25:15672/');
    
    // 创建一个通道
    const channel = await connection.createChannel();
    
    // 声明要消费的队列，确保队列存在
    const queue = 'demo_queue';
    await channel.assertQueue(queue, {
      durable: false
    });
    
    console.log(`等待接收队列 ${queue} 中的消息...`);
    
    // 消费队列中的消息
    channel.consume(queue, (msg) => {
      if (msg) {
        console.log(`已接收消息: ${msg.content.toString()}`);
        // 确认消息已被处理
        channel.ack(msg);
      }
    });
    
  } catch (error) {
    console.error('接收消息时出错:', error);
  }
}

// 执行接收消息函数
receiveMessage();
    