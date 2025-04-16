---
title: XXLJOB快速入门
author: Ray
date: 2024/3/1 21:21
categories:
 - 中间件生态
tags:
 - xxljob
---
# XXLJOB快速入门

## 介绍

分布式任务执行框架

## 快速上手

### 安装

官网的提供的案例非常容易上手，强烈推荐，大家可以自行搜索，不做赘述

### 编写Job

```java
@Component
public class MyJobHandle {

    @Autowired
    private IUserService userService;

    /**
     * xxl-job-core最新版本2.1.2中@JobHandler注解已过时，取而代之的是@XxlJob注解，也不需要去继承IJobHandler类。
     *
     * @param param  调度平台接收的参数信息
     */
    @XxlJob("syncUser")
    public ReturnT<String> syncUser(String param){
        System.out.println("--------------->>参数为\t"+param);
        XxlJobLogger.log("xxl-job启动成功 ，欢迎使用xxl-job同步数据 。。。 syncUser");

        List<User> userList = userService.userList();
        userList.forEach(System.out::println);

        return ReturnT.SUCCESS;
    }
}
```

### 配置执行器

```java
private Logger logger = LoggerFactory.getLogger(XxlJobConfig.class);

    @Value("${xxl.job.admin.addresses}")
    private String adminAddresses;

    @Value("${xxl.job.accessToken}")
    private String accessToken;

    @Value("${xxl.job.executor.appname}")
    private String appname;

    @Value("${xxl.job.executor.address}")
    private String address;

    @Value("${xxl.job.executor.ip}")
    private String ip;

    @Value("${xxl.job.executor.port}")
    private int port;

    @Value("${xxl.job.executor.logpath}")
    private String logPath;

    @Value("${xxl.job.executor.logretentiondays}")
    private int logRetentionDays;


    @Bean
    public XxlJobSpringExecutor xxlJobExecutor() {
        logger.info(">>>>>>>>>>> xxl-job config init.");
        XxlJobSpringExecutor xxlJobSpringExecutor = new XxlJobSpringExecutor();
        xxlJobSpringExecutor.setAdminAddresses(adminAddresses);
        xxlJobSpringExecutor.setAppname(appname);
        xxlJobSpringExecutor.setAddress(address);
        xxlJobSpringExecutor.setIp(ip);
        xxlJobSpringExecutor.setPort(port);
        xxlJobSpringExecutor.setAccessToken(accessToken);
        xxlJobSpringExecutor.setLogPath(logPath);
        xxlJobSpringExecutor.setLogRetentionDays(logRetentionDays);
        return xxlJobSpringExecutor;
    }

```

### 配置任务(名称、Handler以及执行周期)

这里我们需要去可视化界面添加调度规则
![](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/xxljob%E6%B7%BB%E5%8A%A0%E8%B0%83%E5%BA%A6%E8%A7%84%E5%88%9920250326.png)
