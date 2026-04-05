# Login HR Backend (.NET)

A robust, enterprise-grade backend for the HR Solution, built with .NET following Clean Architecture principles. It handles core HR business logic, payroll, employee management, and more.

## Key Features

- **Clean Architecture Monolith**: Ensures a clear separation of concerns, making the system maintainable and testable.
- **SQL Server Integration**: Leverages SQL Server for high-performance data storage and reliability.
- **Multi-Tenant On-Premises Deployment**: Designed to be deployed on each tenant's infrastructure, ensuring data sovereignty and meeting enterprise-level security requirements.
- **OData Support**: Provides a standardized protocol for data access, allowing for flexible querying from the frontend.
- **Role-Based Access Control (RBAC)**: Secure access to HR resources based on user roles and permissions.

## Technology Stack

- **Framework**: .NET (Core/Latest version)
- **Architecture**: Clean Architecture (Domain, Application, Infrastructure, Web API)
- **Database**: SQL Server
- **Authentication**: JWT (JSON Web Tokens)
- **Data Access**: Entity Framework Core with OData

## Architectural Decisions

1. **Clean Architecture**: To ensure the core business logic remains independent of external frameworks and databases.
2. **Monolith for Ease of Deployment**: A monolithic architecture was chosen to simplify on-premises deployment and maintenance for each tenant.
3. **SQL Server for Reliability**: A proven, enterprise-level relational database to handle complex HR data relationships.
4. **OData for Frontend Flexibility**: Allows the Next.js frontend to fetch exactly the data it needs with built-in filtering, sorting, and expansion capabilities.
