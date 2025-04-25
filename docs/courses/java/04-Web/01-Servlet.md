---
title: 01-Servlet快速入门
author: Ray
date: 2022/10/02 21:30
categories:
 - Java生态
tags:
 - Java
 - JavaWeb
---
# Servlet快速入门

## 编写一个Web请求

```java
// WebServlet注解表示这是一个Servlet，并映射到地址/:
@WebServlet(urlPatterns = "/")
public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        // 设置响应类型:
        resp.setContentType("text/html");
        // 获取输出流:
        PrintWriter pw = resp.getWriter();
        // 写入响应:
        pw.write("<h1>Hello, world!</h1>");
        // 最后不要忘记flush强制输出:
        pw.flush();
    }
}

```

我们自定义的Servlet都要继承HttpServlet，覆写doGet()和doPost()方法，相当于在Http应用层进行开发，但是不需要解析Http协议，而且不用与底层TCP交互。那么ServletAPI谁提供的？

ServletAPI是一个jar包，需要通过Maven来引入它。

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.itranswarp.learnjava</groupId>
    <artifactId>web-servlet-hello</artifactId>
    <packaging>war</packaging>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <java.version>17</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>jakarta.servlet</groupId>
            <artifactId>jakarta.servlet-api</artifactId>
            <version>5.0.0</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>

    <build>
        <finalName>hello</finalName>
    </build>
</project>
```

可以看到mvn打包的方式是war，这种有别于jar包，jar包可以由java命令直接运行，但是war包是需要服务容器的，由Web服务器加载编写的自己Servlet。
其中scope指定为provided，表示编译时使用，但是不会打包到.war文件中，因为运行期间Web服务器已经提供了Servlet API相关的jar包。

## Servlet开发

### 遇到的问题

现在有个问题就是如果我们开发的话，需要编写Servlet->打包为war文件->复制到Tomcat的webapps目录下->启动Tomcat。
上面的流程过于繁琐，如何简化开发流程呢？

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.itranswarp.learnjava</groupId>
    <artifactId>web-servlet-embedded</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>war</packaging>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <java.version>17</java.version>
        <tomcat.version>10.1.1</tomcat.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-core</artifactId>
            <version>${tomcat.version}</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-jasper</artifactId>
            <version>${tomcat.version}</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
</project>

```

可以看到上面引入依赖tomcat-embed-core和tomcat-embed-jasper，引入的Tomcat版本<tomcat.version>为10.1.1，现在不必引入ServletAPI，因为引入Tomcat依赖之后自动引入了ServletAPI。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        // 启动Tomcat:
        Tomcat tomcat = new Tomcat();
        tomcat.setPort(Integer.getInteger("port", 8080));
        tomcat.getConnector();
        // 创建webapp:
        Context ctx = tomcat.addWebapp("", new File("src/main/webapp").getAbsolutePath());
        WebResourceRoot resources = new StandardRoot(ctx);
        resources.addPreResources(
                new DirResourceSet(resources, "/WEB-INF/classes", new File("target/classes").getAbsolutePath(), "/"));
        ctx.setResources(resources);
        tomcat.start();
        tomcat.getServer().await();
    }
}

```

这样，我们直接运行main()方法，即可启动嵌入式Tomcat服务器，然后通过预设的 `tomcat.addWebapp("",new File("src/main/webapp"))`，Tomcat会自动加载到当前工程作为根webapp，可以直接在浏览器访问 `http://localhost:8080/`

### 生成可执行的war包

如果要生成可执行的war包，用 `java -jar xxx.war`启动，则需要把Tomcat的依赖项的 `scope`去掉，然后配置 `maven-war-plugin`如下：

```xml
<project ...>
    ...
	<build>
		<finalName>hello</finalName>
		<plugins>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-war-plugin</artifactId>
				<version>3.3.2</version>
				<configuration>
					<!-- 复制classes到war包根目录 -->
					<webResources>
						<resource>
							<directory>${project.build.directory}/classes</directory>
						</resource>
					</webResources>
					<archiveClasses>true</archiveClasses>
					<archive>
						<manifest>
							<!-- 添加Class-Path -->
							<addClasspath>true</addClasspath>
							<!-- Classpath前缀 -->
							<classpathPrefix>tmp-webapp/WEB-INF/lib/</classpathPrefix>
							<!-- main启动类 -->
							<mainClass>com.itranswarp.learnjava.Main</mainClass>
						</manifest>
					</archive>
				</configuration>
			</plugin>
		</plugins>
	</build>
</project>


```

![](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/Servlet%E5%BC%80%E5%8F%91%E6%89%93%E6%88%90war%E5%8C%8520250424.png)

之所以要把编译后的classess复制到war包根目录，是因为**用java -jar hello.war启动时，JVM的Class Loader不会查找WEB-INF/lib的jar包**(只有tomcat容器形式启动的时候才会去找webapps)，而是直接hello.war的根目录查找。
打成的War包的描述文件MANIFEST.MF生成的内容如下：

```
Main-Class: com.itranswarp.learnjava.Main
Class-Path: tmp-webapp/WEB-INF/lib/tomcat-embed-core-10.1.1.jar tmp-weba
 pp/WEB-INF/lib/tomcat-annotations-api-10.1.1.jar tmp-webapp/WEB-INF/lib
 /tomcat-embed-jasper-10.1.1.jar tmp-webapp/WEB-INF/lib/tomcat-embed-el-
 10.1.1.jar tmp-webapp/WEB-INF/lib/ecj-3.18.0.jar
```

注意到Class-Path的路径，这里定义的Class-Path相当于 `java -cp`(用来指定JVM在运行时查找类文件的路径)指定的ClassPath，JVM不会在-个jar包中查找jar包内的jar包，它只会在文件系统中搜索。如果我们想要以war包形式启动还得改写main()方法。

```java
public class Main {
    public static void main(String[] args) throws Exception {
        // 判定是否从jar/war启动:
        String jarFile = Main.class.getProtectionDomain().getCodeSource().getLocation().getFile();
        boolean isJarFile = jarFile.endsWith(".war") || jarFile.endsWith(".jar");
        // 定位webapp根目录:
        String webDir = isJarFile ? "tmp-webapp" : "src/main/webapp";
        if (isJarFile) {
            // 解压到tmp-webapp:
            Path baseDir = Paths.get(webDir).normalize().toAbsolutePath();
            if (Files.isDirectory(baseDir)) {
                Files.delete(baseDir);
            }
            Files.createDirectories(baseDir);
            System.out.println("extract to: " + baseDir);
            try (JarFile jar = new JarFile(jarFile)) {
                List<JarEntry> entries = jar.stream().sorted(Comparator.comparing(JarEntry::getName))
                        .collect(Collectors.toList());
                for (JarEntry entry : entries) {
                    Path res = baseDir.resolve(entry.getName());
                    if (!entry.isDirectory()) {
                        System.out.println(res);
                        Files.createDirectories(res.getParent());
                        Files.copy(jar.getInputStream(entry), res);
                    }
                }
            }
            // JVM退出时自动删除tmp-webapp:
            Runtime.getRuntime().addShutdownHook(new Thread(() -> {
                try {
                    Files.walk(baseDir).sorted(Comparator.reverseOrder()).map(Path::toFile).forEach(File::delete);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }));
        }
        // 启动Tomcat:
        TomcatRunner.run(webDir, isJarFile ? "tmp-webapp" : "target/classes");
    }
}

// Tomcat启动类:
class TomcatRunner {
    public static void run(String webDir, String baseDir) throws Exception {
        Tomcat tomcat = new Tomcat();
        tomcat.setPort(Integer.getInteger("port", 8080));
        tomcat.getConnector();
        Context ctx = tomcat.addWebapp("", new File(webDir).getAbsolutePath());
        WebResourceRoot resources = new StandardRoot(ctx);
        resources.addPreResources(new DirResourceSet(resources, "/WEB-INF/classes", new File(baseDir).getAbsolutePath(), "/"));
        ctx.setResources(resources);
        tomcat.start();
        tomcat.getServer().await();
    }
}

```

重新执行java -jar hello.war之后，运行main自动解压之后，文件系统目录如下：

![](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/Servlet%E5%BC%80%E5%8F%91%E9%87%8D%E6%96%B0%E6%89%93war%E5%8C%8520250424.png)

## Servlet进阶

### 1. 重定向与转发

### 2.使用Session与Cookie
