---
title: RabbitMQ快速入门
author: Ray
date: 2024/3/1 21:21
categories:
 - 中间件生态
tags:
 - RabbitMQ
---
# RabbitMQ快速入门

## 安装及配置

我本地使用的是Docker进行安装，教程大家可以自行搜索，这里不多做赘述

## SpringBoot集成RabbitMQ

### 简单使用

1. 配置pom包，主要是添加spring-boot-starter-amqp的支持

```xml
<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```

2. 配置文件

配置rabbitmq的安装地址、端口以及账户信息

```shell
#rabbitmq
spring.rabbitmq.host=localhost
spring.rabbitmq.port=5672
spring.rabbitmq.username=admin
spring.rabbitmq.password=123456
```

3. 队列配置

```java
@Configuration
public class RabbitConfig {

    @Bean
    public Queue Queue() {
        return new Queue("hello");
    }

}
```

4. 发送者

rabbitTemplate是springboot 提供的默认实现

```java
public class HelloSender {

	@Autowired
	private AmqpTemplate rabbitTemplate;

	public void send() {
		String context = "hello " + new Date();
		System.out.println("Sender : " + context);
		this.rabbitTemplate.convertAndSend("hello", context);
	}

}
```

5. 接收者

```java
@Component
@RabbitListener(queues = "hello")
public class HelloReceiver {

    @RabbitHandler
    public void process(String hello) {
        System.out.println("Receiver  : " + hello);
    }

}
```

6. 测试

```java
@RunWith(SpringRunner.class)
@SpringBootTest
public class RabbitMqHelloTest {

	@Autowired
	private HelloSender helloSender;

	@Test
	public void hello() throws Exception {
		helloSender.send();
	}

}
```

注意，发送者和接收者的queue name必须一致，不然不能接收

#### 高级使用

1. 对象的支持
   springboot以及完美的支持对象的发送和接收，不需要格外的配置。

```java

//发送者
public void send(User user) {
	System.out.println("Sender object: " + user.toString());
	this.rabbitTemplate.convertAndSend("object", user);
}

...

//接受者
@RabbitHandler
public void process(User user) {
    System.out.println("Receiver object : " + user);
}
```

结果如下：

```bash
Sender object: User{name='neo', pass='123456'}
Receiver object : User{name='neo', pass='123456'}
```

2. Topic Exchange

topic 是RabbitMQ中最灵活的一种方式，可以根据routing_key自由的绑定不同的队列

首先对topic规则配置，这里使用两个队列来测试

```java
@Configuration
public class TopicRabbitConfig {

	public final static String TOPIC_ONE = "topic.one";
	public final static String TOPIC_TWO = "topic.two";
	public final static String TOPIC_EXCHANGE = "topicExchange";

	@Bean
	public Queue queue_one(){
		return new Queue(TOPIC_ONE);
	}

	@Bean
	public Queue queue_two(){
		return new Queue(TOPIC_TWO);
	}

	@Bean
	TopicExchange exchange(){
		return new TopicExchange(TOPIC_EXCHANGE);
	}

	@Bean
	Binding bindingExchangeOne(Queue queue_one, TopicExchange exchange){
		return BindingBuilder.bind(queue_one).to(exchange).with("topic.one");
	}

	@Bean
	Binding bindingExchangeTwo(Queue queue_two, TopicExchange exchange){
		//# 表示零个或多个词
		//* 表示一个词
		return BindingBuilder.bind(queue_two).to(exchange).with("topic.#");
	}

}
```

使用queueMessages同时匹配两个队列，queueMessage只匹配”topic.message”队列

```java

@Component
public class TopicSender {

	@Autowired
	private AmqpTemplate rabbitTemplate;

	//两个消息接受者都可以收到
	public void send_one() {
		String context = "Hi, I am message one";
		System.out.println("Sender : " + context);
		this.rabbitTemplate.convertAndSend(TopicRabbitConfig.TOPIC_EXCHANGE,"topic.one",context);
	}


	//只有TopicReceiverTwo都可以收到
	public void send_two() {
		String context = "Hi, I am message two";
		System.out.println("Sender : " + context);
		this.rabbitTemplate.convertAndSend(TopicRabbitConfig.TOPIC_EXCHANGE,"topic.two",context);
	}

}
```

发送send1会匹配到topic.#和topic.message 两个Receiver都可以收到消息，发送send2只有topic.#可以匹配所有只有Receiver2监听到消息
