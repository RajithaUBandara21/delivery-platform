# ShopSphere — DevOps Microservices Delivery Platform (Kubernetes + CI/CD + Observability)

ShopSphere is a portfolio-grade DevOps project that simulates real-world DevOps work in a startup environment.

The goal of this project is to build a **production-style delivery platform** for a microservices application where:

- Developers push code to GitHub
- Jenkins automatically runs tests, builds Docker images, and pushes them to a registry
- Kubernetes deploys services safely with **zero downtime**
- The platform includes **monitoring, logging, and alerting**
- The system supports **autoscaling** and reliability testing

This project is designed to demonstrate practical DevOps skills used in real companies.

---

## 📌 Project Scenario

You are working as the DevOps Engineer for a startup called **ShopSphere**.

The company has a microservices web application and needs a deployment platform that is:

- Automated (CI/CD)
- Scalable (Kubernetes + HPA)
- Reliable (health checks + safe deployments)
- Observable (metrics, logs, dashboards, alerts)

---

## 🧩 Microservices

This project includes a minimal but realistic microservices architecture:

- **frontend** (React)
- **api-gateway** (Node.js)
- **auth-service** (Spring Boot / .NET)
- **product-service** (Spring Boot)
- **order-service** (Node.js)
- **database** (PostgreSQL)

---

## 🏗️ Architecture

