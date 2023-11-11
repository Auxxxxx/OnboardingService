FROM openjdk:17-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY spring-boot-backend/target/ROOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]