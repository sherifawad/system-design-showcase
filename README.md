# Enterprise HR Solution: System Design Showcase

Welcome to the **System Design Showcase** for a comprehensive, multi-tenant Enterprise HR Solution. This repository demonstrates my capabilities in architecting and implementing a complex, real-world system that bridges the gap between a centralized mobile application and decentralized on-premises deployments.

## 🚀 Overview

The system is designed to solve the challenge of providing a unified mobile experience while maintaining strict data sovereignty and security for multiple enterprise tenants. Each tenant hosts their own instance of the HR Solution, which is dynamically routed to by a centralized Proxy Service.

### 🌟 Key Capabilities

*   **Multi-Tenant Architecture**: Dynamic routing and tenant-specific on-premises deployments.
*   **Clean Architecture (.NET)**: A robust, maintainable, and testable backend for HR operations.
*   **Modern Frontend (Next.js)**: A high-performance employee portal with advanced state and form management.
*   **Mobile Security & Analysis**: Proactive security enforcement including root detection and versioning.
*   **Advanced UX Patterns**: Optimistic UI updates and resilient polling strategies for critical system actions.

---

## 🏗️ System Components

### [Proxy Service (Next.js)](./proxy-service/README.md)
The central gateway for the mobile app, providing dynamic tenant routing and comprehensive security checks (Version, OS, Root detection).
- [Architecture Details](./proxy-service/README.md)
- [Design Decisions](./proxy-service/DECISIONS.md)

### [Login HR Backend (.NET)](./login_hr/README.md)
A Clean Architecture-based monolith for HR operations, designed for on-premises deployment for each tenant.
- [Architecture Details](./login_hr/README.md)
- [Design Decisions](./login_hr/DECISIONS.md)

### [LOGIN Web HR Front (Next.js)](./login_web_hr_front/README.md)
A feature-rich employee portal demonstrating advanced React patterns and efficient data fetching.
- [Architecture Details](./login_web_hr_front/README.md)
- [Design Decisions](./login_web_hr_front/DECISIONS.md)

---

## 📚 Deep Dives & Case Studies

*   **[Enterprise Permission Synchronization System](./case-studies/01-permission-manager.md)**: How I reduced permission update latency by 40% using optimistic updates and exponential backoff.
*   **[Job Decision Form Case Study](./case-studies/02-job-decision-form.md)**: Managing complex, multi-step forms using React Hook Form and Zustand.
*   **[Overall System Architecture](./ARCHITECTURE.md)**: A high-level view of the entire multi-tenant system and its core components.

---

## 🛠️ Technologies & Tools

- **Backend**: .NET (Core), OData, SQL Server, JWT
- **Frontend**: Next.js, Zustand, React Hook Form, React Query, Tailwind CSS
- **Proxy/Routing**: Next.js, Node.js
- **Architecture Patterns**: Clean Architecture, Multi-Tenancy, Dynamic Proxying, Optimistic UI

---

This repository serves as a showcase for my technical skills, architectural decisions, and ability to build scalable, secure enterprise solutions.
