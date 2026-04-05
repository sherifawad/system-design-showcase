# DECISIONS

## Proxy Service Design Decisions

### 1. Unified Mobile Interface
- **Decision**: Use a single mobile application for all tenants.
- **Rationale**: To minimize the development and maintenance effort of building separate apps for each company.
- **Outcome**: A Proxy Service was necessary to route traffic to the correct tenant-specific server based on the user's company name.

### 2. Multi-Tenant Routing
- **Decision**: Implement dynamic URL resolution for each tenant.
- **Rationale**: Tenants host their HR Solution instances on-premises for data sovereignty and security.
- **Outcome**: The Proxy Service maintains a central database of tenant URLs and routes traffic accordingly.

### 3. Mobile App Security Enforcement
- **Decision**: Integrate mobile app versioning and security checks into the Proxy Service.
- **Rationale**: To ensure that all users are on supported, secure mobile versions and to prevent unauthorized access from compromised (rooted) devices.
- **Outcome**: The Proxy Service performs root detection, OS version checks, and app version validation before allowing any communication with the tenant servers.

### 4. Next.js for Proxy Layer
- **Decision**: Utilize Next.js as the core framework for the Proxy Service.
- **Rationale**: Next.js provides excellent server-side capabilities, performance, and the ability to build both API routes and potential management interfaces within the same project.
- **Outcome**: A highly performant and maintainable proxy layer.

### 5. On-Premises Tenant Support
- **Decision**: Architecture designed to support on-premises deployments for every tenant.
- **Rationale**: Enterprises often require full control over their data and infrastructure.
- **Outcome**: The architecture allows for a decentralized deployment model while maintaining a centralized user experience via the mobile app and proxy.
