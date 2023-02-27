FROM openjdk:11.0.11-jdk

WORKDIR /code
COPY /target/*.jar app.jar
EXPOSE 9001
ENTRYPOINT ["java","-jar","/code/app.jar"]