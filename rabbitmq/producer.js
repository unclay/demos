const amqp = require('amqplib');

// 连接 RabbitMQ 服务器并发送消息
async function sendMessage() {
  try {
    // 连接到自定义端口的 RabbitMQ 服务器
    const connection = await amqp.connect('amqp://admin:123456@192.168.21.25:15672/');
    
    // 创建一个通道
    const channel = await connection.createChannel();
    
    // 声明要发送消息的队列，确保队列存在
    const queue = 'demo_queue';
    await channel.assertQueue(queue, {
      durable: false
    });
    
    // 要发送的消息
    const message = 'Hello, Custom Port RabbitMQ!';
    
    // 发送消息到队列
    channel.sendToQueue(queue, Buffer.from(message));
    console.log(`已发送消息: ${message}`);
    
    // 关闭连接
    setTimeout(() => {
      connection.close();
    }, 500);
    
  } catch (error) {
    console.error('发送消息时出错:', error);
  }
}

// 执行发送消息函数
sendMessage();
    