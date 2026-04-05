# Proxy Service

A high-performance dynamic router and security gateway designed for multi-tenant enterprise HR systems. This service acts as the central entry point for mobile applications, dynamically routing requests to tenant-specific on-premises servers.

## Key Features

- **Multi-Tenant Routing**: Dynamically resolves and redirects traffic to a tenant's on-premises HR server based on the login credentials and company identifier.
- **Mobile Security & Analysis**:
    - **Version Enforcement**: Checks for the latest mobile app version to ensure users are on the current release.
    - **OS Version Validation**: Verifies that the device's operating system version is within the supported range.
    - **Root Detection**: Identifies if a mobile device is rooted or compromised, allowing for proactive security policy enforcement.
    - **Device Analysis**: Monitors and analyzes connected mobile devices for potential security threats.
- **Credential Proxying**: Securely forwards authentication requests to the correct tenant environment.

## Technology Stack

- **Framework**: Next.js
- **Environment**: Node.js
- **Database (Central)**: SQL Server (for tenant metadata and routing info)

## Architecture Overview

The Proxy Service sits between the unified mobile application and decentralized tenant deployments. Its primary role is to ensure that mobile users are securely and accurately routed to their respective company's server while maintaining strict security compliance.

### Request Flow
1. Mobile App sends login request + Company Name.
2. Proxy Service queries the central database for the Tenant's Server URL.
3. Proxy performs security checks (Version, OS, Root status).
4. If security checks pass, the request is proxied to the Tenant Server.
5. The Tenant Server authenticates the user and returns the response through the Proxy.
