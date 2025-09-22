const cards =
[
    {
      question: 'What does SOLID stand for? Give a brief sentence for each.',
      answer: `S – Single Responsibility Principle: A class should only have one reason to change. 
      Scenario: A UserService that both sends emails and manages persistence violates SRP. 
      → Pros: Easier to maintain, test, and extend. 
      → Cons: May lead to many small classes, harder for beginners to manage.

      O – Open/Closed Principle: Modules should be open for extension but closed for modification. 
      Scenario: Instead of modifying a PaymentProcessor for new payment methods, add new strategy classes. 
      → Pros: Reduces regression bugs, encourages plugin-style extensibility. 
      → Cons: Might increase abstraction complexity.

      L – Liskov Substitution Principle: Subtypes must be replaceable for their base types. 
      Scenario: A Square class that overrides Rectangle behavior incorrectly violates LSP. 
      → Pros: Prevents subtle runtime errors. 
      → Cons: Can limit creative subclass design.

      I – Interface Segregation Principle: Prefer small, focused interfaces over large ones. 
      Scenario: Instead of forcing all services to implement IPrinter with Scan(), Fax(), Print(), break it into smaller interfaces. 
      → Pros: Cleaner contracts, less coupling. 
      → Cons: More interfaces to manage.

      D – Dependency Inversion Principle: Depend on abstractions, not concretions. 
      Scenario: A Controller injects ILogger rather than instantiating ConsoleLogger directly. 
      → Pros: Enables testing with mocks, loose coupling. 
      → Cons: Initial setup (IoC containers) adds learning curve.`,
          tags:['SOLID','principles']
        },
        {
          question: 'When would you use the Repository pattern in .NET? What problem does it solve?',
          answer: `Scenario: An e-commerce app where business logic must retrieve Products without knowing if the data comes from EF Core, Dapper, or even an API. 
      The Repository pattern encapsulates data access, exposing collection-like methods (Add, Find, Remove). 

      Pros: 
      - Abstracts data persistence → makes unit testing easier. 
      - Centralizes queries → consistent data access strategy. 
      - Decouples domain logic from EF or SQL specifics. 

      Cons: 
      - Adds extra layer of abstraction, sometimes redundant if using EF Core’s DbContext directly. 
      - Can lead to "anemic repositories" if not well-designed.`,
          tags:['.NET','Design Patterns']
        },
        {
          question: 'What is the difference between a monolithic application and microservices? List pros and cons.',
          answer: `Monolithic: Single deployable unit (all modules packaged together).
      Scenario: A legacy ERP system with billing, inventory, and reporting in one WAR/DLL.

      → Pros: 
      - Simple to develop/deploy initially. 
      - Easier debugging since everything is in one place. 
      - Shared memory = faster in-process calls. 

      → Cons: 
      - Scaling requires scaling entire app, not modules. 
      - One faulty module can bring down the whole system. 
      - Harder to adopt new tech stacks per module.

      Microservices: Independent services communicating over APIs.
      Scenario: A retail platform where checkout, inventory, and recommendations are separate services.

      → Pros: 
      - Scale each service independently. 
      - Teams can own services with different tech stacks. 
      - Better fault isolation (checkout stays up if recommendations fail). 

      → Cons: 
      - Operational complexity: service discovery, monitoring, tracing. 
      - Network latency/failures must be handled. 
      - Requires DevOps maturity (CI/CD, containers, orchestration).`,
          tags:['architecture','microservices']
        },
        {
          question: 'In Angular, what is the purpose of an RxJS Subject vs Observable?',
          answer: `Observable: A cold, read-only stream of data; values are produced when subscribed to. 
      Scenario: HTTP.get returns an Observable — each subscriber makes a new request. 

      Subject: Both an Observer (you can push values) and an Observable (others can subscribe). 
      Scenario: A shared EventBus where multiple components react to user login events. 

      Pros of Observable: 
      - Declarative, lazy, predictable. 
      - Ideal for single-use async tasks (HTTP calls). 

      Cons of Observable: 
      - No multicasting by default. 

      Pros of Subject: 
      - Allows multicasting to many subscribers. 
      - Useful for hot events like WebSocket streams or cross-component communication. 

      Cons of Subject: 
      - State management complexity if misused. 
      - Harder to test/debug if values are pushed arbitrarily.`,
          tags:['Angular','RxJS']
        },
        {
          question: 'What is an ERP System?',
          answer: `An Enterprise Resource Planning (ERP) system is integrated software that manages a company's core business processes 
      (such as finance, HR, supply chain, manufacturing) by centralizing data into a single source of truth. 
      → Benefits: streamlined operations, reduced data duplication, real-time reporting, scalability.`,
          tags:['architecture concepts']
        },
        {
          question: 'What is a CRM System?',
          answer: `A Customer Relationship Management (CRM) system is software that manages customer interactions, sales pipelines, 
      and marketing campaigns. 
      → Benefits: improved customer satisfaction, sales insights, better retention. 
      → Example: Salesforce, Dynamics 365.`,
          tags:['architecture concepts']
        },
        {
          question: 'What is a Data Warehouse?',
          answer: `A Data Warehouse is a centralized repository optimized for analytics and reporting, aggregating data from multiple sources. 
      → Benefits: supports BI tools, historical analysis, decision-making. 
      → Trade-off: Not optimized for real-time updates like OLTP systems.`,
          tags:['data architecture']
        },
        {
          question: 'What is an OLTP System?',
          answer: `OLTP (Online Transaction Processing) systems are optimized for fast insert/update/delete operations (e.g., banking, e-commerce). 
      → Benefits: high throughput, ACID compliance. 
      → Contrast: OLAP systems focus on analysis, not transaction speed.`,
          tags:['architecture concepts']
        },
        {
          question: 'What is an OLAP System?',
          answer: `OLAP (Online Analytical Processing) systems are optimized for querying and analyzing aggregated data. 
      → Benefits: supports multidimensional analysis (cubes, slicing/dicing). 
      → Example: financial forecasting, sales trends.`,
          tags:['data architecture']
        },
        {
          question: 'What is a Message Queue?',
          answer: `A Message Queue (MQ) decouples producers and consumers by storing messages until they are processed. 
      → Benefits: fault tolerance, scalability, async communication. 
      → Examples: RabbitMQ, AWS SQS, Azure Service Bus.`,
          tags:['architecture concepts','integration']
        },
        {
          question: 'What is an API Gateway?',
          answer: `An API Gateway is an entry point for client requests to multiple backend services. 
      → Functions: routing, rate limiting, authentication, load balancing. 
      → Examples: AWS API Gateway, Kong, NGINX.`,
          tags:['architecture concepts','API']
        },
        {
          question: 'What is Middleware in software architecture?',
          answer: `Middleware is software that connects applications or services, handling communication, messaging, or data translation. 
      → Examples: authentication middleware in Express, enterprise service buses (ESB). 
      → Benefits: standardization, easier integration.`,
          tags:['architecture concepts']
        },
        {
          question: 'What is a Microservices Architecture?',
          answer: `Microservices architecture structures an app as a collection of loosely coupled services. 
      → Benefits: independent scaling, technology diversity, resilience. 
      → Trade-offs: operational complexity, distributed data management.`,
          tags:['architecture concepts','microservices']
        },
        {
          question: 'What is a Monolithic Architecture?',
          answer: `Monolithic architecture structures the application as one deployable unit. 
      → Benefits: easier development & deployment initially. 
      → Trade-offs: scaling limits, difficult to maintain with growth.`,
          tags:['architecture concepts']
        },
        {
          question: 'What is Event-Driven Architecture?',
          answer: `Event-driven architecture (EDA) uses events (state changes) to trigger actions asynchronously. 
      → Benefits: decoupling, real-time processing, scalability. 
      → Examples: Kafka, AWS EventBridge.`,
          tags:['architecture concepts','integration']
        },
        {
          question: 'What is a Load Balancer?',
          answer: `A Load Balancer distributes traffic across multiple servers to improve availability and performance. 
      → Types: Layer 4 (transport) vs Layer 7 (application). 
      → Examples: AWS ELB, NGINX, HAProxy.`,
          tags:['architecture concepts','cloud']
        },
        {
          question: 'What is High Availability (HA) in architecture?',
          answer: `High Availability ensures a system remains operational with minimal downtime. 
      → Techniques: redundancy, failover, clustering. 
      → Example: deploying services in multiple availability zones in AWS.`,
          tags:['architecture concepts']
        },
        {
          question: 'What is Scalability in system design?',
          answer: `Scalability is the ability of a system to handle increased load by adding resources. 
      → Vertical scaling: adding more power to a single node. 
      → Horizontal scaling: adding more nodes. 
      → Trade-off: cost vs complexity.`,
          tags:['architecture concepts']
        },
        {
          question: 'What is a CDN?',
          answer: `A Content Delivery Network (CDN) caches and delivers content from edge servers closer to users. 
      → Benefits: reduced latency, better performance, offload origin servers. 
      → Examples: Cloudflare, AWS CloudFront, Akamai.`,
          tags:['architecture concepts','cloud']
        },
        {
          question: 'What is Caching in software architecture?',
          answer: `Caching stores frequently accessed data in memory or distributed stores (Redis, Memcached). 
      → Benefits: improved performance, reduced DB load. 
      → Trade-offs: cache invalidation complexity, stale data.`,
          tags:['architecture concepts']
        },
        {
          question: 'What is a Service-Oriented Architecture (SOA)?',
          answer: `SOA organizes software as a set of services that communicate over a network using standardized protocols (SOAP, REST). 
      → Benefits: reusability, interoperability. 
      → Contrast: Microservices focus more on independence and scalability.`,
          tags:['architecture concepts']
        },
        {
          question: 'What is an API?',
          answer: `An Application Programming Interface (API) defines a contract for communication between software components. 
      → Types: REST, SOAP, GraphQL, gRPC. 
      → Benefits: decoupling, interoperability.`,
          tags:['architecture concepts','API']
        },
        {
          question: 'What is Cloud Computing in architecture?',
          answer: `Cloud computing provides on-demand access to compute, storage, and networking via providers like AWS, Azure, GCP. 
      → Benefits: scalability, pay-as-you-go, managed infrastructure. 
      → Models: IaaS, PaaS, SaaS.`,
          tags:['architecture concepts','cloud']
        },
        {
          question: 'What is a Container in system design?',
          answer: `A container packages code and dependencies into an isolated environment. 
      → Benefits: portability, consistency across environments, faster deployments. 
      → Examples: Docker, Kubernetes.`,
          tags:['architecture concepts','cloud']
        },
        {question: 'What does SOLID stand for? Give a brief sentence for each.', answer: 'S - Single Responsibility Principle: a class should have one reason to change.\nO - Open/Closed Principle: modules should be open for extension but closed for modification.\nL - Liskov Substitution Principle: derived classes must be substitutable for their base types.\nI - Interface Segregation Principle: prefer multiple specific interfaces over a large general one.\nD - Dependency Inversion Principle: depend on abstractions, not concretions.', tags:['SOLID','principles']},
        {question: 'When would you use the Repository pattern in .NET? What problem does it solve?', answer: 'Use it to encapsulate data access, provide a collection-like interface and decouple business logic from persistence details. It helps unit testing and keeps EF Core or SQL away from business services.', tags:['.NET','Design Patterns']},
        {question: 'Explain Event-Driven Architecture and one use case.', answer: 'EDA decouples producers and consumers via events (message brokers). Use case: microservices communicating asynchronously (e.g., order created event triggers inventory and billing services).', tags:['architecture','patterns']},
        {question: 'What is the difference between a monolithic application and microservices? List pros and cons.', answer: 'Monolith: single deployable — simpler to develop, harder to scale independently.\nMicroservices: independently deployable services — better scalability and isolation but adds operational complexity (distributed systems, monitoring, network faults).', tags:['architecture','microservices']},
        {question: 'In Angular, what is the purpose of an RxJS Subject vs Observable?', answer: 'Observable: cold data source by default, consumed by subscribers.\nSubject: both an Observable and Observer — can multicast values to multiple subscribers and act as an event bus.', tags:['Angular','RxJS']},
        {question: 'What is Dependency Injection and why is it useful?', answer: 'DI is supplying dependencies from the outside rather than creating them internally. It enables loose coupling, easier testing (mocks/stubs), and cleaner separation of concerns.', tags:['principles','design']},
        {question: 'Describe CAP theorem and its implications for distributed systems.', answer: 'CAP: cannot simultaneously guarantee Consistency, Availability, and Partition tolerance. In presence of network partitions, systems must choose between consistency and availability.', tags:['architecture','distributed']},
        {question: 'When should you choose NoSQL over SQL?', answer: 'Choose NoSQL when you need flexible schemas, horizontal scalability, high write throughput, or data models like documents/graphs — e.g., logging, session stores, social graphs.', tags:['db','architecture']},
        {question: 'What is the purpose of an index in a database? Name a downside of too many indexes.', answer: 'Indexes speed up read queries by allowing fast lookups. Downside: they slow writes (insert/update/delete) and consume space.', tags:['db','performance']},
        {question: 'Explain the Single Responsibility Principle with a small example.', answer: 'A class that both formats and persists data violates SRP. Split into Formatter and Repository so each class has one reason to change.', tags:['SOLID','principles']},
        {question: 'In React, what are hooks and why were they introduced?', answer: 'Hooks (useState, useEffect, etc.) allow functional components to have state and lifecycle logic. They make code reuse easier and reduce the need for class components.', tags:['React']},
        {question: 'How do you secure an AWS S3 bucket to allow a specific web app to read files? (high-level)', answer: 'Use IAM roles or a presigned URL; restrict bucket policy to the app’s IAM role or CloudFront origin; enable least privilege and block public access.', tags:['AWS','security']},
        {question: 'What is Infrastructure as Code and name two tools for it.', answer: 'IaC is managing infrastructure using declarative configuration files. Tools: Terraform, AWS CloudFormation, Azure Resource Manager (ARM) templates.', tags:['DevOps','IaC']},
        {question: 'What is CORS and why might you see CORS errors when calling an API from a web app?', 
        answer: `**CORS (Cross-Origin Resource Sharing)** is a security mechanism implemented by browsers that controls how resources from one origin (domain, protocol, port) can be requested by a web page from a different origin.  

        **Why it exists:**  
        - Browsers enforce the Same-Origin Policy (SOP) to prevent malicious scripts on one site from accessing sensitive data on another site.  
        - CORS allows servers to selectively permit cross-origin requests by including specific HTTP headers.

        **How it works:**  
        - A web app at origin A (e.g., https://myapp.com) requests a resource from origin B (e.g., https://api.example.com).  
        - If the server responds with the 'Access-Control-Allow-Origin' header including origin A (or '*''), the browser allows the request.  
        - Otherwise, the browser blocks it and logs a **CORS error**.

        **Common reasons for CORS errors:**  
        1. Server does not include 'Access-Control-Allow-Origin' header.  
        2. Server only allows specific origins and the client origin is not listed.  
        3. Preflight request ('OPTIONS') is missing required headers like 'Access-Control-Allow-Methods' or 'Access-Control-Allow-Headers'.  
        4. Using credentials ('cookies', 'Authorization') without 'Access-Control-Allow-Credentials: true`

        , tags:['web','security']},
        {question: 'Explain the Adapter pattern and one scenario to use it.', answer: 'Adapter converts one interface to another expected by clients. Use when integrating a third-party API with an incompatible interface.', tags:['Design Patterns','Adapter']},
        {question: 'What is the difference between authentication and authorization?', answer: 'Authentication verifies who you are (identity). Authorization determines what you can do (permissions).', tags:['security']},
        {question: 'Describe a content delivery strategy for a global web app.', answer: 'Use a CDN (CloudFront, Azure CDN), replicate static assets, edge caching, compress responses, and localize origins for reduced latency.', tags:['performance','AWS','Azure']},
        {question: 'What is the Repository + Unit of Work pattern? Why combine them?', answer: 'Repository abstracts data access; Unit of Work groups operations into a single transaction. Combined they coordinate multiple repository operations within one transaction scope.', tags:['.NET','patterns']},
        {question: 'Name three best practices when building RESTful APIs.', answer: '1) Use meaningful resource URLs and HTTP verbs.\n2) Return appropriate status codes and error messages.\n3) Version APIs and use pagination for list endpoints.', tags:['web','api']},
        {question: 'When building an Angular app, what strategies help with improving initial load time?', answer: 'Use lazy-loaded modules, AOT compilation, tree-shaking, minimize bundle size, compress assets, and use server-side rendering if needed.', tags:['Angular','performance']},
        {question: 'Explain CQRS briefly and one advantage of using it.', answer: 'CQRS splits read and write models: Command for writes, Query for reads. Advantage: optimizes read performance and scaling; can use different storage for reads vs writes.', tags:['architecture','patterns']},
        {question: 'What is immutability and why is it useful in React?', answer: 'Immutability means not changing existing objects; create new copies instead. In React it enables simpler change detection, predictable state updates, and pure components.', tags:['React','best practices']},
        {question: 'How do you monitor a production .NET application? Mention tools and metrics.', answer: 'Monitor CPU, memory, request latency, error rates, and logs. Tools: Application Insights, Prometheus + Grafana, ELK stack. Use distributed tracing for microservices.', tags:['.NET','monitoring']},
        {question: 'What are Idempotent operations and why are they important for APIs?', answer: 'Idempotent operations yield the same result when performed multiple times (e.g., PUT). They are important for safe retries and network fault tolerance.', tags:['api','reliability']},
        {question: 'Explain how Azure App Service differs from Kubernetes (AKS).', answer: 'Azure App Service is a platform-as-a-service for easy app hosting (managed), while AKS is a managed Kubernetes cluster providing container orchestration and more control at the cost of complexity.', tags:['Azure','cloud']},
        {question: 'In AWS, what is the purpose of IAM roles vs IAM users?', answer: 'IAM users represent humans/service accounts with long-lived credentials. IAM roles are assumed by entities (EC2, Lambda) to get temporary credentials — better for security and least privilege.', tags:['AWS','security']},
        {question: 'What is a circuit breaker in distributed systems?', answer: 'A circuit breaker detects failing downstream calls and short-circuits calls to prevent cascading failures, allowing recovery time and faster failure responses.', tags:['resilience','patterns']},
        {question: 'How would you approach debugging a memory leak in a Node.js backend?', answer: 'Collect heap snapshots, use profiling tools (Chrome DevTools, clinic.js), identify retained objects and long-lived references, reproduce in a staging environment, fix root cause (unclosed timers, global caches).', tags:['debugging','backend']},
        {question: 'What is dependency inversion and give an example in C#?', answer: 'High-level modules should not depend on low-level modules; both depend on abstractions. Example: IService interface injected into Controller via constructor instead of instantiating a concrete Service.', tags:['SOLID','.NET']},
        {question: 'When is it appropriate to use serverless (Lambda/Azure Functions)?', answer: 'For event-driven, short-lived tasks, APIs with variable load, scheduled jobs, or glue code. Not ideal for long-running processes or heavy sustained CPU workloads.', tags:['AWS','Azure','serverless']},
        {question: 'Explain the difference between process and thread.', answer: 'Process: independent memory space with at least one thread. Thread: execution path inside a process sharing memory with other threads.', tags:['os','programming']},
        {question: 'Name common anti-patterns to avoid in web apps.', answer: 'Big ball of mud (no structure), God object, premature optimization, tightly coupled modules, ignoring error handling and logging.', tags:['best practices']},
        {question: 'What is a Promise vs Observable (JS)?', answer: 'Promise: single async value, eager. Observable: stream of values, can be lazy, cancellable, and composable with RxJS.', tags:['JS','Angular','React']},
        {question: 'How do you design an upload flow for large files in a web app? (high-level)', answer: 'Use chunked upload or multipart uploads (S3 multipart), resume support, progress reporting, server-side validation, and temporary storage with lifecycle policies.', tags:['web','aws']},
        {question: 'Describe the Template Method pattern.', answer: 'Template Method defines the skeleton of an algorithm in a base class with concrete subclasses overriding specific steps; promotes code reuse with controlled variability.', tags:['Design Patterns']},
        {question: 'What questions would you ask when hiring a fullstack developer? (mention 3)', answer: '1) Describe a production bug you fixed and how you diagnosed it.\n2) How do you design APIs and client-side state to minimize coupling?\n3) Which testing strategies do you use (unit, integration, e2e)?', tags:['hiring','interview']},
        {
    question: 'What is AWS EC2?',
    answer: `Amazon EC2 (Elastic Compute Cloud) provides scalable virtual servers in the cloud. 
→ Use case: hosting applications, APIs, or backend services. 
→ Benefits: flexible instance types, autoscaling, pay-per-use. 
→ Trade-off: requires management of OS, patches, scaling configs.`,
    tags:['AWS','compute']
  },
  {
    question: 'What is Azure Virtual Machines?',
    answer: `Azure VMs are scalable virtual machines hosted in Azure. 
→ Use case: lift-and-shift legacy apps. 
→ Benefits: wide OS support, integration with Azure services. 
→ Trade-off: higher management overhead compared to PaaS.`,
    tags:['Azure','compute']
  },
  {
    question: 'What is AWS Lambda?',
    answer: `AWS Lambda is a serverless compute service that runs code in response to events without provisioning servers. 
→ Benefits: auto-scaling, pay-per-execution, easy event integration. 
→ Trade-off: limited execution time, cold starts.`,
    tags:['AWS','serverless']
  },
  {
    question: 'What is Azure Functions?',
    answer: `Azure Functions is a serverless compute service to run event-driven code. 
→ Use case: process messages from Service Bus, HTTP triggers. 
→ Benefits: consumption pricing, seamless integration with Azure services. 
→ Limitation: execution timeout, cold start latency.`,
    tags:['Azure','serverless']
  },
  {
    question: 'What is AWS S3?',
    answer: `Amazon S3 (Simple Storage Service) is object storage for unstructured data. 
→ Use cases: file hosting, data lake, backups. 
→ Benefits: durability (11 9’s), scalability, versioning. 
→ Trade-off: eventual consistency in some regions.`,
    tags:['AWS','storage']
  },
  {
    question: 'What is Azure Blob Storage?',
    answer: `Azure Blob Storage is object storage for unstructured data like images, videos, logs. 
→ Benefits: lifecycle management, geo-replication, integration with Azure Data Lake. 
→ Use case: static website hosting, backup.`,
    tags:['Azure','storage']
  },
  {
    question: 'What is AWS RDS?',
    answer: `Amazon RDS is a managed relational database service (MySQL, PostgreSQL, SQL Server, Oracle). 
→ Benefits: automated backups, patching, scaling. 
→ Trade-off: less control vs self-managed DB.`,
    tags:['AWS','database']
  },
  {
    question: 'What is Azure SQL Database?',
    answer: `Azure SQL Database is a fully managed PaaS database (SQL Server engine). 
→ Benefits: auto-scaling, built-in HA, advanced security. 
→ Use case: SaaS multi-tenant backends.`,
    tags:['Azure','database']
  },
  {
    question: 'What is AWS DynamoDB?',
    answer: `DynamoDB is a fully managed NoSQL key-value and document database. 
→ Benefits: millisecond latency, autoscaling, serverless. 
→ Use case: gaming leaderboards, IoT, session storage.`,
    tags:['AWS','database']
  },
  {
    question: 'What is Azure Cosmos DB?',
    answer: `Cosmos DB is a globally distributed, multi-model NoSQL database. 
→ Features: multiple APIs (MongoDB, SQL, Cassandra, Gremlin), global replication. 
→ Benefits: <10ms latency SLA, elastic scalability. 
→ Trade-off: pricing complexity.`,
    tags:['Azure','database']
  },
  {
    question: 'What is AWS CloudFormation?',
    answer: `CloudFormation is IaC (Infrastructure as Code) to define AWS resources in templates. 
→ Benefits: consistent, repeatable environments, automation. 
→ Trade-off: verbose YAML/JSON, slower updates for large stacks.`,
    tags:['AWS','infrastructure']
  },
  {
    question: 'What is Azure Resource Manager (ARM)?',
    answer: `ARM templates provide IaC for Azure resources. 
→ Benefits: declarative deployment, role-based access, idempotency. 
→ Newer alternative: Bicep simplifies syntax.`,
    tags:['Azure','infrastructure']
  },
  {
    question: 'What is AWS IAM?',
    answer: `Identity and Access Management (IAM) controls access to AWS resources. 
→ Features: users, groups, roles, policies. 
→ Best practice: principle of least privilege, use roles instead of long-lived keys.`,
    tags:['AWS','security']
  },
  {
    question: 'What is Azure Active Directory (Azure AD)?',
    answer: `Azure AD is an identity and access management service for users, apps, and devices. 
→ Benefits: SSO, MFA, integration with Microsoft 365, B2C/B2B support. 
→ Use case: secure SaaS apps or enterprise authentication.`,
    tags:['Azure','security']
  },
  {
    question: 'What is AWS VPC?',
    answer: `A Virtual Private Cloud (VPC) is an isolated network environment in AWS. 
→ Features: subnets, routing tables, security groups, peering. 
→ Use case: host private services securely.`,
    tags:['AWS','networking']
  },
  {
    question: 'What is Azure Virtual Network (VNet)?',
    answer: `Azure VNet is the fundamental building block for private networking in Azure. 
→ Benefits: subnets, NSGs, service endpoints, peering with on-prem. 
→ Use case: secure isolation for workloads.`,
    tags:['Azure','networking']
  },
  {
    question: 'What is AWS CloudWatch?',
    answer: `CloudWatch monitors AWS resources and apps with metrics, logs, and alarms. 
→ Benefits: centralized observability, automated scaling triggers, dashboards. 
→ Trade-off: costs can grow with high log ingestion.`,
    tags:['AWS','monitoring']
  },
  {
    question: 'What is Azure Monitor?',
    answer: `Azure Monitor collects metrics, logs, and telemetry from Azure and on-premises resources. 
→ Integrates with Log Analytics and Application Insights. 
→ Benefits: full-stack observability, alerts, dashboards.`,
    tags:['Azure','monitoring']
  },
  {
    question: 'What is AWS Elastic Beanstalk?',
    answer: `Elastic Beanstalk is a PaaS to deploy apps (Java, .NET, Node.js, Python) without managing infrastructure. 
→ Benefits: managed scaling, health monitoring, simplified deployment. 
→ Trade-off: less flexibility than raw EC2 + autoscaling.`,
    tags:['AWS','PaaS']
  },
  {
    question: 'What is Azure App Service?',
    answer: `Azure App Service is a PaaS for hosting web apps and APIs. 
→ Benefits: built-in scaling, CI/CD integration, managed SSL. 
→ Use case: deploy .NET, Node.js, Python apps quickly.`,
    tags:['Azure','PaaS']
  },
  {
    question: 'What is the Singleton pattern and when should it be avoided?',
    answer: `The Singleton ensures only one instance of a class exists and provides a global access point. 
→ Scenario: Logging service, configuration manager. 
→ Pros: Controlled access, avoids multiple instances. 
→ Cons: Hidden dependencies, hard to test (tight coupling), can become global state anti-pattern. 
→ Best practice: Prefer Dependency Injection over direct Singleton use.`,
    tags:['Design Patterns','creational']
  },
  {
    question: 'Explain the Factory Method pattern with an example.',
    answer: `Factory Method defines an interface for creating objects but lets subclasses decide the instantiation. 
→ Scenario: A PaymentProcessor factory that returns PayPalProcessor or StripeProcessor. 
→ Pros: Encapsulates object creation, promotes extensibility. 
→ Cons: More classes/complexity. 
→ Best practice: Use when object creation logic varies by context.`,
    tags:['Design Patterns','creational']
  },
  {
    question: 'What is the difference between Abstract Factory and Builder?',
    answer: `Abstract Factory creates families of related objects without specifying concrete classes. 
Builder constructs complex objects step by step. 
→ Abstract Factory Scenario: UI toolkit generating Windows or Mac widgets. 
→ Builder Scenario: Constructing a complex SQL query object. 
→ Abstract Factory Pros: consistency across families. 
→ Builder Pros: stepwise construction, flexibility. 
→ Cons: both add abstraction layers.`,
    tags:['Design Patterns','creational']
  },
  {
    question: 'What problem does the Adapter pattern solve?',
    answer: `Adapter converts one interface into another clients expect. 
→ Scenario: A legacy billing API integrated into a new payment system. 
→ Pros: Reuse existing code, interoperability. 
→ Cons: Adds extra indirection, can hide bad design. 
→ Best practice: Use for third-party or legacy integration.`,
    tags:['Design Patterns','structural']
  },
  {
    question: 'Explain the difference between the Proxy and Decorator patterns.',
    answer: `Proxy controls access to an object (lazy loading, security, caching). 
Decorator adds new behavior dynamically without altering the original class. 
→ Scenario Proxy: Virtual proxy for expensive objects. 
→ Scenario Decorator: Adding compression to a stream. 
→ Pros: Both promote SRP. 
→ Cons: Proxy = adds indirection, Decorator = can create deep nesting of wrappers.`,
    tags:['Design Patterns','structural']
  },
  {
    question: 'What is the Observer pattern and where is it used in frontend frameworks?',
    answer: `Observer defines a one-to-many relationship: when subject changes, observers get notified. 
→ Scenario: In Angular, RxJS Observables implement Observer. In React, state management libraries like Redux use it. 
→ Pros: Decoupling, reactive design. 
→ Cons: Risk of memory leaks, debugging event storms. 
→ Best practice: Unsubscribe in frontend apps to prevent leaks.`,
    tags:['Design Patterns','behavioral','frontend']
  },
  {
    question: 'Describe the Strategy pattern with a real-world example.',
    answer: `Strategy defines a family of algorithms, encapsulates them, and makes them interchangeable. 
→ Scenario: PaymentService can switch between CreditCardStrategy, PayPalStrategy. 
→ Pros: Eliminates conditional logic, adds flexibility. 
→ Cons: More boilerplate, can lead to many small classes. 
→ Best practice: Combine with Dependency Injection for flexibility.`,
    tags:['Design Patterns','behavioral']
  },
  {
    question: 'What is the Template Method pattern?',
    answer: `Template Method defines the skeleton of an algorithm in a base class, letting subclasses override specific steps. 
→ Scenario: DataExporter class defines export flow, subclasses implement CSV, JSON steps. 
→ Pros: Code reuse, enforces consistent process. 
→ Cons: Tight inheritance coupling. 
→ Best practice: Prefer composition over inheritance if flexibility is key.`,
    tags:['Design Patterns','behavioral']
  },
  {
  question: 'Explain the Command pattern and its benefits.',
  answer: `The Command pattern is a behavioral design pattern that encapsulates a request or action as an object, allowing you to parameterize clients with queues, requests, and operations, and support undoable operations.  

**Key idea:** Decouple the sender of a request from its receiver, so the sender does not need to know the details of how the request is executed.  

**Scenario / Example:**  
- GUI applications: actions like Copy, Paste, Undo, Redo.  
- Task scheduling: queue commands to run asynchronously or in batch.  
- Macro recording: record and replay sequences of commands.  

**Pros:**  
- Decouples sender and receiver.  
- Supports undo/redo functionality.  
- Allows storing and sequencing of commands (queues, logs).  
- Facilitates macro commands (composite of multiple commands).  

**Cons:**  
- Increases number of classes (each command often has its own class).  
- Can add complexity for simple actions.  

**Best practices:**  
- Use when you need undo/redo, logging of operations, or queued/async execution.  
- Combine with Memento pattern to capture state for undo.  
- Good for GUI actions, task queues, and macro recording.  

**TypeScript Example:**  
\`\`\`ts
// Command interface
interface Command {
  execute(): void;
  undo?(): void;
}

// Receiver
class TextEditor {
  content = "";
  write(text: string) { this.content += text; }
  erase(length: number) { this.content = this.content.slice(0, -length); }
}

// Concrete command
class WriteCommand implements Command {
  private text: string;
  constructor(private editor: TextEditor, text: string) { this.text = text; }
  execute() { this.editor.write(this.text); }
  undo() { this.editor.erase(this.text.length); }
}

// Invoker
class CommandManager {
  private history: Command[] = [];
  executeCommand(cmd: Command) {
    cmd.execute();
    this.history.push(cmd);
  }
  undo() {
    const cmd = this.history.pop();
    cmd?.undo?.();
  }
}

// Usage
const editor = new TextEditor();
const manager = new CommandManager();
manager.executeCommand(new WriteCommand(editor, "Hello "));
manager.executeCommand(new WriteCommand(editor, "World"));
console.log(editor.content); // Hello World
manager.undo();
console.log(editor.content); // Hello
\`\`\``,
  tags:['Design Patterns','Behavioral']
},
  {
    question: 'What is Dependency Injection and why is it a good practice?',
    answer: `DI provides dependencies from the outside instead of hardcoding them. 
→ Scenario: A Controller receiving ILogger via constructor. 
→ Pros: Loose coupling, testability with mocks, clearer architecture. 
→ Cons: Requires DI container understanding, can add indirection. 
→ Best practice: Always code against abstractions, not concrete classes.`,
    tags:['Good Practices','principles']
  },
  {
    question: 'What are Code Smells and why should we care?',
    answer: `Code smells are indicators of deeper design problems (e.g., God class, duplicate code). 
→ Pros of detecting: early maintenance, prevents technical debt. 
→ Cons: False positives can distract. 
→ Best practice: Use automated tools (SonarQube, linters) and refactor regularly.`,
    tags:['Good Practices','clean code']
  },
  {
    question: 'Explain DRY vs KISS principles.',
    answer: `DRY (Don’t Repeat Yourself) reduces duplication by centralizing logic. 
KISS (Keep It Simple, Stupid) encourages simplicity over over-engineering. 
→ Scenario: Over-applying DRY can hurt readability (too abstract). 
→ Scenario: KISS helps junior devs understand. 
→ Best practice: Balance both—prefer clarity with reasonable reuse.`,
    tags:['Good Practices','principles']
  },
  {
    question: 'What is Test-Driven Development (TDD) and its pros/cons?',
    answer: `TDD is writing tests before code implementation. 
→ Benefits: better design, fewer regressions, confidence in refactoring. 
→ Cons: slower initial development, requires discipline, not suited for UI-heavy apps. 
→ Best practice: Apply TDD for business logic and APIs, less for UI layers.`,
    tags:['Good Practices','testing']
  },
  {
    question: 'Explain Separation of Concerns with an example.',
    answer: `SoC divides a system into layers/modules with distinct responsibilities. 
→ Example: MVC pattern—Model = data, View = UI, Controller = flow. 
→ Pros: Maintainability, parallel development. 
→ Cons: Over-separation can lead to unnecessary complexity. 
→ Best practice: Apply SoC pragmatically, not dogmatically.`,
    tags:['Good Practices','architecture']
  },
  {
    question: 'What is the difference between Cohesion and Coupling?',
    answer: `Cohesion = how focused a module/class is. Coupling = degree of dependency between modules. 
→ Goal: High cohesion, low coupling. 
→ Scenario: A utility class doing 10 unrelated things = low cohesion. 
→ Scenario: Module A cannot work without B = high coupling. 
→ Best practice: Refactor towards single responsibility and interfaces.`,
    tags:['Good Practices','principles']
  },
  {
    question: 'What are Anti-Patterns in software design?',
    answer: `Anti-patterns are common solutions that look good but cause harm. 
→ Examples: Big Ball of Mud (no structure), God Object, Premature Optimization. 
→ Pros: None, except short-term speed. 
→ Cons: Technical debt, brittle code. 
→ Best practice: Learn to recognize and refactor anti-patterns.`,
    tags:['Good Practices','architecture']
  },
  {
    question: 'What is the Repository Pattern and its pros/cons?',
    answer: `Repository abstracts data persistence with a collection-like interface. 
→ Scenario: Business logic retrieves Users without knowing EF Core/SQL. 
→ Pros: Testability, separation of concerns. 
→ Cons: Extra abstraction layer, sometimes redundant with ORM. 
→ Best practice: Use in DDD contexts, not always needed for simple apps.`,
    tags:['Design Patterns','.NET']
  },
  {
    question: 'Explain the difference between REST and GraphQL APIs.',
    answer: `REST exposes resources via endpoints, GraphQL lets clients query exactly what they need. 
→ REST Pros: Simpler, cache-friendly, widely supported. 
→ REST Cons: Over-fetching or under-fetching data. 
→ GraphQL Pros: Flexible queries, reduces round trips. 
→ GraphQL Cons: More complex server setup, caching harder. 
→ Best practice: REST for standard APIs, GraphQL for client-driven data needs.`,
    tags:['Good Practices','API']
  },
  {
    question: 'What is the Open/Closed Principle and how do we apply it in .NET?',
    answer: `Open for extension, closed for modification. 
→ Example: Instead of editing PaymentProcessor to support ApplePay, extend via Strategy. 
→ Pros: Safer evolution of code, fewer regressions. 
→ Cons: Requires upfront design. 
→ Best practice: Use interfaces, inheritance, and DI to achieve this.`,
    tags:['SOLID','Good Practices']
  },
  {
    question: 'Explain the difference between Synchronous and Asynchronous communication in microservices.',
    answer: `Synchronous = direct request/response (e.g., REST). 
Asynchronous = event-driven (e.g., Kafka, Service Bus). 
→ Sync Pros: Simpler, immediate response. 
→ Sync Cons: Tight coupling, failure propagation. 
→ Async Pros: Loose coupling, resilience, scalability. 
→ Async Cons: Complex debugging, eventual consistency. 
→ Best practice: Mix both depending on business needs.`,
    tags:['Good Practices','architecture']
  },
  {
    question: 'What is the time complexity of binary search on a sorted array?',
    answer: 'O(log n), since the array is divided in half at each step.',
    tags: ['algorithms', 'complexity']
  },
  {
    question: 'Explain the difference between breadth-first search (BFS) and depth-first search (DFS).',
    answer: 'BFS explores nodes level by level using a queue, while DFS explores as deep as possible using a stack or recursion.',
    tags: ['algorithms', 'graphs']
  },
  {
    question: 'How can you detect a cycle in a linked list?',
    answer: 'Using Floyd’s cycle-finding algorithm (fast and slow pointers).',
    tags: ['algorithms', 'linked list']
  },
  {
    question: 'What is dynamic programming (DP)?',
    answer: 'A method to solve problems by breaking them down into overlapping subproblems, storing intermediate results to avoid recomputation.',
    tags: ['algorithms', 'dp']
  },
  {
    question: 'Give an example of a divide-and-conquer algorithm.',
    answer: 'Merge Sort, Quick Sort, and Binary Search are common examples.',
    tags: ['algorithms', 'sorting']
  },
  {
    question: 'What is the difference between stable and unstable sorting algorithms?',
    answer: 'Stable sorts preserve the relative order of equal elements (e.g., Merge Sort), while unstable sorts do not (e.g., Quick Sort).',
    tags: ['algorithms', 'sorting']
  },
  {
    question: 'What is the time complexity of hash table average lookup?',
    answer: 'O(1) average case, O(n) worst case if many collisions occur.',
    tags: ['algorithms', 'hashing']
  },
  {
    question: 'How do you find the kth largest element in an unsorted array?',
    answer: 'Using a min-heap of size k, or Quickselect algorithm with average O(n).',
    tags: ['algorithms', 'heap']
  },
  {
    question: 'What is a greedy algorithm? Give an example.',
    answer: 'Greedy algorithms make locally optimal choices at each step (e.g., Dijkstra’s algorithm, activity selection).',
    tags: ['algorithms', 'greedy']
  },
  {
    question: 'Explain Big-O, Big-Theta, and Big-Omega notation.',
    answer: 'Big-O: upper bound (worst case). Big-Theta: tight bound. Big-Omega: lower bound (best case).',
    tags: ['algorithms', 'complexity']
  },
  {
    question: 'What is memoization and how does it differ from tabulation?',
    answer: 'Memoization: top-down DP using recursion + caching. Tabulation: bottom-up DP filling a table iteratively.',
    tags: ['algorithms', 'dp']
  },
  {
    question: 'How can you reverse a linked list?',
    answer: 'Iteratively by reassigning next pointers, or recursively.',
    tags: ['algorithms', 'linked list']
  },
  {
    question: 'What is the sliding window technique? Give a use case.',
    answer: 'A technique for problems involving subarrays or substrings (e.g., longest substring without repeating characters).',
    tags: ['algorithms', 'arrays']
  },
  {
    question: 'How do you implement a stack using queues?',
    answer: 'Use two queues and adjust push/pop operations to simulate stack LIFO behavior.',
    tags: ['algorithms', 'stack']
  },
  {
    question: 'What is topological sorting? When is it used?',
    answer: 'An ordering of vertices in a DAG where each directed edge goes from earlier to later. Used in scheduling tasks.',
    tags: ['algorithms', 'graphs']
  },
  {
    question: 'What is the Master Theorem in algorithm analysis?',
    answer: 'It provides asymptotic bounds for divide-and-conquer recurrences like T(n)=aT(n/b)+f(n).',
    tags: ['algorithms', 'complexity']
  },
  {
    question: 'How do you find the longest common subsequence (LCS) of two strings?',
    answer: 'Using dynamic programming with a 2D table of size m×n.',
    tags: ['algorithms', 'dp']
  },
  {
    question: 'Explain union-find (disjoint set) and one of its applications.',
    answer: 'A structure to manage partitioned sets, often used in Kruskal’s MST algorithm and cycle detection in graphs.',
    tags: ['algorithms', 'graphs']
  },
  {
    question: 'What is the two-pointer technique? Give an example.',
    answer: 'Using two indices moving at different speeds/directions, e.g., solving the “two-sum” in a sorted array.',
    tags: ['algorithms', 'arrays']
  },
  {
    question: 'What is the difference between NP, NP-Complete, and NP-Hard problems?',
    answer: 'NP: verifiable in polynomial time. NP-Complete: in NP and as hard as any NP problem. NP-Hard: at least as hard as NP-Complete but not necessarily in NP.',
    tags: ['algorithms', 'complexity']
  },
  {
    question: 'How do you create a functional component in React?',
    answer: `By writing a JavaScript function that returns JSX.
Example:
function Hello() {
  return <h1>Hello World</h1>;
}`,
    tags: ['react', 'syntax']
  },
  {
    question: 'What is JSX in React?',
    answer: 'JSX is a syntax extension that allows writing HTML-like code inside JavaScript, which is transpiled to React.createElement().',
    tags: ['react', 'syntax']
  },
  {
    question: 'How do you declare state in a functional component?',
    answer: `Using the useState hook.
Example:
const [count, setCount] = useState(0);`,
    tags: ['react', 'hooks']
  },
  {
    question: 'What is the correct way to pass props to a component?',
    answer: `<Child name="Jorge" age={34} />`,
    tags: ['react', 'props']
  },
  {
    question: 'How do you access props inside a functional component?',
    answer: `Props are received as a parameter:
function Child(props) {
  return <p>{props.name}</p>;
}`,
    tags: ['react', 'props']
  },
  {
    question: 'What is the difference between default export and named export in React?',
    answer: `Default export: export default Component;
Named export: export function Component() {} 
Importing differs: import Comp from './file' vs import { Component } from './file'.`,
    tags: ['react', 'syntax']
  },
  {
    question: 'How do you render a list of items in React?',
    answer: `Using map():
{items.map(item => <li key={item.id}>{item.name}</li>)}`,
    tags: ['react', 'syntax']
  },
  {
    question: 'What is the purpose of the "key" prop when rendering lists?',
    answer: 'It helps React identify which items changed, were added, or removed, optimizing re-rendering.',
    tags: ['react', 'props']
  },
  {
    question: 'How do you conditionally render in React?',
    answer: `Using logical && or ternary:
{isLoggedIn ? <Dashboard /> : <Login />}
{isAdmin && <AdminPanel />}`,
    tags: ['react', 'syntax']
  },
  {
    question: 'What hook replaces componentDidMount in functional components?',
    answer: 'The useEffect hook with an empty dependency array: useEffect(() => { ... }, []);',
    tags: ['react', 'hooks']
  },
  {
    question: 'How do you handle events in React?',
    answer: `By attaching event handlers as props:
<button onClick={handleClick}>Click</button>`,
    tags: ['react', 'events']
  },
  {
    question: 'How do you prevent default behavior in React event handlers?',
    answer: `function handleSubmit(e) {
  e.preventDefault();
}`,
    tags: ['react', 'events']
  },
  {
    question: 'What is the difference between controlled and uncontrolled components?',
    answer: 'Controlled components use React state as the single source of truth, while uncontrolled components rely on DOM refs.',
    tags: ['react', 'forms']
  },
  {
    question: 'How do you create a ref in React?',
    answer: `Using useRef:
const inputRef = useRef(null);
<input ref={inputRef} />`,
    tags: ['react', 'refs']
  },
  {
    question: 'How do you update state based on the previous state?',
    answer: `setCount(prev => prev + 1);`,
    tags: ['react', 'hooks']
  },
  {
    question: 'What is the difference between useEffect and useLayoutEffect?',
    answer: 'useEffect runs asynchronously after paint, useLayoutEffect runs synchronously before paint (useful for DOM measurements).',
    tags: ['react', 'hooks']
  },
  {
    question: 'How do you lazy load a React component?',
    answer: `Using React.lazy and Suspense:
const MyComp = React.lazy(() => import('./MyComp'));
<Suspense fallback={<div>Loading...</div>}>
  <MyComp />
</Suspense>`,
    tags: ['react', 'lazy']
  },
  {
    question: 'What is the correct syntax for Context API in React?',
    answer: `const MyContext = React.createContext();
<MyContext.Provider value={data}>
  <Child />
</MyContext.Provider>`,
    tags: ['react', 'context']
  },
  {
    question: 'How do you memoize a value in React?',
    answer: `Using useMemo:
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`,
    tags: ['react', 'hooks']
  },
  {
    question: 'How do you memoize a callback function in React?',
    answer: `Using useCallback:
const handleClick = useCallback(() => { doSomething(); }, [deps]);`,
    tags: ['react', 'hooks']
  },
  {
    question: 'How do you create a new Angular component?',
    answer: `Using Angular CLI:
ng generate component my-component
// or shorthand
ng g c my-component`,
    tags: ['angular', 'component', 'syntax']
  },
  {
    question: 'What is the correct way to declare a component in Angular?',
    answer: `@Component({
  selector: 'app-hello',
  template: '<h1>Hello {{name}}</h1>'
})
export class HelloComponent {
  name = 'Jorge';
}`,
    tags: ['angular', 'component']
  },
  {
    question: 'How do you use string interpolation in Angular templates?',
    answer: `<p>Hello {{ user.name }}</p>`,
    tags: ['angular', 'template']
  },
  {
    question: 'How do you bind a property in Angular?',
    answer: `<img [src]="imageUrl" />`,
    tags: ['angular', 'binding']
  },
  {
    question: 'How do you handle events in Angular templates?',
    answer: `<button (click)="onClick()">Click me</button>`,
    tags: ['angular', 'events']
  },
  {
    question: 'What is two-way data binding syntax in Angular?',
    answer: `<input [(ngModel)]="username" />`,
    tags: ['angular', 'forms']
  },
  {
    question: 'How do you conditionally render elements in Angular?',
    answer: `<p *ngIf="isLoggedIn">Welcome back!</p>`,
    tags: ['angular', 'directives']
  },
  {
    question: 'How do you loop over a list in Angular templates?',
    answer: `<li *ngFor="let item of items">{{ item }}</li>`,
    tags: ['angular', 'directives']
  },
  {
    question: 'What is the syntax to create an Angular service?',
    answer: `@Injectable({
  providedIn: 'root'
})
export class MyService {
  getData() { return [1,2,3]; }
}`,
    tags: ['angular', 'service']
  },
  {
    question: 'How do you inject a service into a component?',
    answer: `constructor(private myService: MyService) {}`,
    tags: ['angular', 'di']
  },
  {
    question: 'How do you make an HTTP GET request in Angular?',
    answer: `this.http.get('/api/users').subscribe(data => {
  console.log(data);
});`,
    tags: ['angular', 'http']
  },
  {
    question: 'How do you create a custom pipe in Angular?',
    answer: `@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}`,
    tags: ['angular', 'pipes']
  },
  {
    question: 'How do you use a custom pipe in a template?',
    answer: `<p>{{ 'jorge' | capitalize }}</p>`,
    tags: ['angular', 'pipes']
  },
  {
    question: 'What is the syntax for reactive form controls in Angular?',
    answer: `form = new FormGroup({
  name: new FormControl(''),
  email: new FormControl('')
});`,
    tags: ['angular', 'forms']
  },
  {
  question: 'How do you bind a FormGroup to a template in Angular, and what is the TypeScript setup?',
  answer: `In Angular, a FormGroup is a collection of FormControls (like input fields) that allows reactive form handling.  
Binding a FormGroup to a template is done using the [formGroup] directive on a <form> element, and each input is linked with formControlName.  

**Template Example:**
<form [formGroup]="form">
  <label>Name:</label>
  <input formControlName="name" />
  <label>Email:</label>
  <input formControlName="email" />
  <button [disabled]="form.invalid">Submit</button>
</form>

**TypeScript Example:**
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  form: FormGroup;

  constructor() {
    // Initialize FormGroup with controls and validators
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    }
  }
}

**Theory Notes:**
- FormGroup tracks the value and validity of its child controls.
- Reactive forms provide more programmatic control compared to template-driven forms.
- Validators can be synchronous (Validators.required) or asynchronous (custom API validation).
- FormGroup can be nested for complex forms (e.g., an address FormGroup inside a user FormGroup).

**Key Points:**
1. [formGroup] binds the FormGroup instance from TypeScript to the template.
2. formControlName links each FormControl to the input element.
3. Reactive forms allow valueChanges subscriptions for dynamic logic.
4. You can disable/enable controls programmatically via form.get('name').disable().
5. Provides better testability than template-driven forms.`, 
  tags: ['Angular','ReactiveForms','TypeScript']
}
,
  {
    question: 'How do you create a route in Angular?',
    answer: `const routes: Routes = [
  { path: 'home', component: HomeComponent }
];`,
    tags: ['angular', 'routing']
  },
  {
    question: 'How do you navigate programmatically in Angular?',
    answer: `constructor(private router: Router) {}
goHome() {
  this.router.navigate(['/home']);
}`,
    tags: ['angular', 'routing']
  },
  {
    question: 'How do you use RxJS Subject in Angular?',
    answer: `const subject = new Subject<number>();
subject.subscribe(x => console.log(x));
subject.next(42);`,
    tags: ['angular', 'rxjs']
  },
  {
    question: 'How do you unsubscribe from an observable in Angular?',
    answer: `subscription: Subscription;
ngOnInit() {
  this.subscription = this.myService.data$.subscribe();
}
ngOnDestroy() {
  this.subscription.unsubscribe();
}`,
    tags: ['angular', 'rxjs']
  },
  {
    question: 'What is the syntax for using async pipe in Angular?',
    answer: `<p>{{ data$ | async }}</p>`,
    tags: ['angular', 'rxjs', 'pipes']
  },
  {
    question: 'What is .NET Core and how does it differ from .NET Framework?',
    answer: `.NET Core is a cross-platform, open-source framework for building apps on Windows, Linux, and macOS. 
Key differences:
- Cross-platform vs Windows-only (.NET Framework).
- Modular via NuGet packages.
- Better performance and lightweight runtime.
- Long-term direction for .NET (unified under .NET 5+).`,
    tags: ['.NET Core','basics']
  },
  {
    question: 'What is the Startup.cs file used for in ASP.NET Core?',
    answer: `Startup.cs defines the app’s request pipeline and services.
- ConfigureServices(): register dependencies, DB contexts, authentication, etc.
- Configure(): define middleware pipeline (routing, logging, endpoints).`,
    tags: ['.NET Core','startup']
  },
  {
    question: 'How do you configure dependency injection in .NET Core?',
    answer: `By default .NET Core has built-in DI.
Example:
services.AddScoped<IRepository, Repository>(); 
Injected via constructor:
public MyController(IRepository repo) { ... }`,
    tags: ['.NET Core','DI']
  },
  {
    question: 'What are middleware components in ASP.NET Core?',
    answer: `Middleware are components that handle requests/responses in a pipeline.
Examples: Authentication, Routing, Static Files.
They are registered in Configure() using app.UseXYZ().`,
    tags: ['.NET Core','middleware']
  },
  {
    question: 'Explain Kestrel in .NET Core.',
    answer: `Kestrel is the cross-platform, high-performance web server included in ASP.NET Core.
It can be used standalone or behind a reverse proxy like IIS, Nginx, or Apache.`,
    tags: ['.NET Core','server']
  },
  {
    question: 'What is the difference between AddTransient, AddScoped, and AddSingleton?',
    answer: `- Transient: new instance every request.
- Scoped: one instance per HTTP request.
- Singleton: one instance for the app’s lifetime.`,
    tags: ['.NET Core','DI']
  },
  {
    question: 'What is Entity Framework Core?',
    answer: `EF Core is an ORM that maps C# objects to database tables.
Supports LINQ, migrations, change tracking, async queries, and multiple providers (SQL Server, PostgreSQL, SQLite, etc.).`,
    tags: ['.NET Core','EF Core']
  },
  {
    question: 'How do you run EF Core migrations?',
    answer: `Using CLI:
dotnet ef migrations add InitialCreate
dotnet ef database update`,
    tags: ['.NET Core','EF Core']
  },
  {
    question: 'How do you use configuration in ASP.NET Core?',
    answer: `Configuration comes from appsettings.json, environment variables, command-line.
Injected via IOptions<T> or IConfiguration.`,
    tags: ['.NET Core','config']
  },
  {
    question: 'What is appsettings.json and appsettings.Development.json?',
    answer: `appsettings.json: default configuration file.
appsettings.Development.json: overrides values when in Development environment (based on ASPNETCORE_ENVIRONMENT).`,
    tags: ['.NET Core','config']
  },
  {
    question: 'How does logging work in .NET Core?',
    answer: `Uses Microsoft.Extensions.Logging.
Supports console, debug, third-party providers (Serilog, NLog).
Configured in Program.cs / appsettings.json.`,
    tags: ['.NET Core','logging']
  },
  {
    question: 'What is the difference between synchronous and asynchronous actions in controllers?',
    answer: `Synchronous: blocks thread until operation completes.
Async (using async/await): frees thread while waiting, improves scalability for I/O-bound work.`,
    tags: ['.NET Core','async']
  },
  {
    question: 'How do you create a Web API controller in ASP.NET Core?',
    answer: `Use [ApiController] attribute and inherit from ControllerBase:
[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase { ... }`,
    tags: ['.NET Core','Web API']
  },
  {
    question: 'What is the difference between IActionResult and ActionResult<T>?',
    answer: `IActionResult: general return type (Ok(), NotFound(), BadRequest()).
ActionResult<T>: allows returning either IActionResult or a strongly typed value.`,
    tags: ['.NET Core','Web API']
  },
  {
    question: 'How do you enable CORS in ASP.NET Core?',
    answer: `In ConfigureServices:
services.AddCors();
In Configure:
app.UseCors(builder => builder.WithOrigins("https://example.com").AllowAnyHeader().AllowAnyMethod());`,
    tags: ['.NET Core','CORS']
  },
  {
    question: 'What is a DTO and why use it?',
    answer: `Data Transfer Object: a simplified object for API responses/requests.
Reasons:
- Avoid exposing domain entities directly.
- Control serialization.
- Reduce over-fetching.`,
    tags: ['.NET Core','DTO']
  },
  {
    question: 'Explain the Repository pattern in .NET Core.',
    answer: `Repository abstracts data access.
Example: IRepository<T> with methods Add, Get, Remove.
Decouples EF Core from business logic, improves testability.`,
    tags: ['.NET Core','patterns']
  },
  {
    question: 'What is Unit of Work pattern in EF Core?',
    answer: `Coordinates multiple repositories with a single DbContext transaction.
Ensures either all changes are committed or none are.`,
    tags: ['.NET Core','patterns']
  },
  {
  question: 'What is the difference between .NET 5/6/7 and .NET Core?',
  answer: `**.NET Core** was an open-source, cross-platform framework introduced by Microsoft to modernize .NET, enabling apps to run on Windows, Linux, and macOS. It supported modular development, performance improvements, and cloud-native scenarios, but existed in parallel with the older .NET Framework.  

**.NET 5 and later (6, 7, 8...)** are the continuation and unification of the .NET platform:  
- They merge .NET Core, .NET Framework (parts), Xamarin/Mono into a single product simply called **.NET**.  
- Starting with **.NET 5 (released Nov 2020)**, Microsoft dropped the "Core" branding.  
- **.NET 6** became the first **Long-Term Support (LTS)** release in this new unified line.  
- Each subsequent version (.NET 7, .NET 8...) builds on the unified platform with performance gains, language updates (C#), and better tooling.  

**Key differences:**  
1. **Branding:** .NET Core (3.1 and earlier) vs. unified ".NET" (5+).  
2. **Compatibility:** .NET 5+ provides a single base class library (BCL) that works across app models (desktop, cloud, mobile).  
3. **Ecosystem:** .NET 5/6/7 integrate Xamarin for mobile, Blazor for web UI, and ASP.NET Core, all under one umbrella.  
4. **Support model:** .NET Core had separate LTS and Current channels; .NET 5+ continues this but aligned under one schedule.  
5. **Future direction:** Microsoft will not release new versions of the old .NET Framework; all innovation is happening in .NET 5+.  

**Analogy:** Think of **.NET Core** as the bridge, and **.NET 5+** as the new unified highway — faster, modern, and the only path forward.  

**Best practice for devs:**  
- New projects should target the latest LTS (.NET 6, .NET 8, etc.).  
- Legacy projects on .NET Framework may require migration to benefit from cross-platform, performance, and cloud support.`,
  tags: ['.NET','Architecture','Platforms']
},
  {
    question: 'How do you use Dependency Injection for configuration options?',
    answer: `services.Configure<MyOptions>(Configuration.GetSection("MySection"));
Injected via IOptions<MyOptions>.`,
    tags: ['.NET Core','DI']
  },
  {
    question: 'How do you handle global exception handling in .NET Core?',
    answer: `Use middleware:
app.UseExceptionHandler("/error");
Or write custom middleware with try/catch around next().`,
    tags: ['.NET Core','middleware']
  },
  {
    question: 'What is the difference between IHostedService and BackgroundService?',
    answer: `IHostedService: interface for background tasks.
BackgroundService: base class with ExecuteAsync() loop for long-running services.`,
    tags: ['.NET Core','background']
  },
  {
    question: 'How do you secure an ASP.NET Core API?',
    answer: `Options:
- JWT authentication.
- OAuth2 / OpenID Connect.
- API keys.
Use AddAuthentication() + middleware for enforcement.`,
    tags: ['.NET Core','security']
  },
  {
    question: 'What is Identity in ASP.NET Core?',
    answer: `ASP.NET Core Identity provides membership, login, roles, claims.
Can be stored in EF Core DbContext or external providers (Google, Facebook).`,
    tags: ['.NET Core','security']
  },
  {
    question: 'What is the difference between Claims and Roles in ASP.NET Core?',
    answer: `Claims: key-value attributes about a user (email, country).
Roles: group of permissions (Admin, User). Claims are more flexible.`,
    tags: ['.NET Core','security']
  },
  {
    question: 'What is middleware ordering and why does it matter?',
    answer: `Middleware executes in the order registered.
Example: Authentication must come before Authorization.`,
    tags: ['.NET Core','middleware']
  },
  {
    question: 'How do you test controllers in ASP.NET Core?',
    answer: `Options:
- Unit test with mocks (Moq, NSubstitute).
- Integration test using TestServer/WebApplicationFactory.`,
    tags: ['.NET Core','testing']
  },
  {
    question: 'What is Health Checks middleware?',
    answer: `Provides endpoints for monitoring app health.
services.AddHealthChecks();
app.UseHealthChecks("/health");`,
    tags: ['.NET Core','health']
  },
  {
    question: 'What are minimal APIs in .NET 6?',
    answer: `Lightweight API endpoints without controllers.
Example:
app.MapGet("/hello", () => "Hello World");`,
    tags: ['.NET Core','minimal APIs']
  },
  {
    question: 'What is the difference between InMemory, SQLite, and SQL Server providers in EF Core?',
    answer: `- InMemory: for testing, not persistent.
- SQLite: lightweight file DB, good for dev/small apps.
- SQL Server: enterprise-level, production ready.`,
    tags: ['.NET Core','EF Core']
  },
  {
    question: 'How do you configure authentication with JWT in .NET Core?',
    answer: `services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
.AddJwtBearer(options => { options.TokenValidationParameters = ... });`,
    tags: ['.NET Core','security']
  },
  {
    question: 'What is SignalR in ASP.NET Core?',
    answer: `SignalR enables real-time web functionality.
Supports WebSockets, fallback to other transports.
Used for chats, dashboards, notifications.`,
    tags: ['.NET Core','SignalR']
  },
  {
    question: 'What is gRPC and how does it compare with REST?',
    answer: `gRPC: high-performance RPC protocol using Protobuf.
Pros: faster, strongly typed, bidirectional streaming.
Cons: harder to debug, not human-readable vs REST JSON.`,
    tags: ['.NET Core','gRPC']
  },
  {
    question: 'What are filters in ASP.NET Core?',
    answer: `Filters run before/after controller actions.
Types: Authorization, Action, Result, Exception filters.
Example: global logging or validation.`,
    tags: ['.NET Core','filters']
  },
  {
    question: 'What is the difference between synchronous and asynchronous EF Core queries?',
    answer: `Sync: context.Users.ToList().
Async: await context.Users.ToListAsync().
Async is non-blocking and improves scalability.`,
    tags: ['.NET Core','EF Core']
  },
  {
    question: 'How do you enable HTTPS redirection in ASP.NET Core?',
    answer: `app.UseHttpsRedirection();
Configured in Program.cs.`,
    tags: ['.NET Core','security']
  },
  {
    question: 'What is the difference between IWebHostBuilder and IHostBuilder?',
    answer: `IWebHostBuilder: used for web apps in .NET Core 2.x.
IHostBuilder: generic host introduced in 3.x, supports web + background services.`,
    tags: ['.NET Core','hosting']
  },
  {
    question: 'How do you containerize a .NET Core application?',
    answer: `Use a Dockerfile:
FROM mcr.microsoft.com/dotnet/aspnet:6.0
COPY . /app
WORKDIR /app
ENTRYPOINT ["dotnet", "MyApp.dll"]`,
    tags: ['.NET Core','docker']
  },
  {
    question: 'How do you improve performance in .NET Core apps?',
    answer: `- Use async/await for I/O.
- Enable response caching.
- Minimize allocations (Span<T>, pooling).
- Optimize EF Core queries.`,
    tags: ['.NET Core','performance']
  },
  {
    question: 'What is Redis and when would you use it?',
    answer: 'Redis is an in-memory key-value store used for caching, session storage, pub/sub, or real-time analytics. It is extremely fast due to memory-based storage.',
    tags: ['Redis','cache']
  },
  {
  question: 'What are Redis data types and their use cases?',
  answer: `Redis supports several versatile data types, each optimized for specific scenarios:

1. **Strings**  
   - The simplest type: a key-value pair where the value is a string (can also store numbers or binary data).  
   - Use cases: caching HTML fragments, session tokens, counters.  
   - Example: SET user:123:name "Jorge"

2. **Lists**  
   - Ordered collection of strings. Supports push/pop operations from both ends (LPUSH, RPUSH, LPOP, RPOP).  
   - Use cases: message queues, recent activity logs.  
   - Example: LPUSH notifications "New message received"

3. **Sets**  
   - Unordered collection of unique strings. Supports membership testing and set operations (union, intersection).  
   - Use cases: unique visitor tracking, tags, social network connections.  
   - Example: SADD online_users 123 456

4. **Sorted Sets (ZSets)**  
   - Like Sets but with a score for ordering. Automatically sorted by score.  
   - Use cases: leaderboards, ranking systems, priority queues.  
   - Example: ZADD leaderboard 100 "player1"

5. **Hashes**  
   - Maps of field-value pairs. Efficient for storing objects.  
   - Use cases: user profiles, shopping carts.  
   - Example: HSET user:123 name "Jorge" email "jorge@example.com"

6. **Bitmaps**  
   - Allows setting individual bits in a string value.  
   - Use cases: tracking boolean flags, user activity (e.g., daily login).  
   - Example: SETBIT user:activity:2025-09-18 5 1

7. **HyperLogLogs**  
   - Probabilistic data structure to estimate cardinality (unique elements) using minimal memory.  
   - Use cases: counting unique visitors or events without storing every value.  
   - Example: PFADD unique_visitors 123 456 789

8. **Streams**  
   - Append-only log of messages, supports consumer groups and range queries.  
   - Use cases: real-time event processing, message queues, analytics pipelines.  
   - Example: XADD orders * customerId 123 amount 250

**Summary Notes:**  
- Strings = basic values  
- Lists = ordered sequences  
- Sets = unique unordered values  
- Sorted Sets = ordered by score  
- Hashes = structured objects  
- Bitmaps = efficient boolean arrays  
- HyperLogLogs = approximate counting  
- Streams = event logs / message queues  

Choosing the right data type is critical for Redis performance and memory efficiency.`, 
  tags: ['Redis','DataTypes','Caching','NoSQL']
},
  {
    question: 'Explain Redis persistence options.',
    answer: 'RDB (snapshotting) for point-in-time backups. AOF (Append Only File) for logging every write operation. Combination possible for durability vs performance trade-offs.',
    tags: ['Redis','persistence']
  },

  // Docker
  {
    question: 'What is Docker and why is it useful?',
    answer: 'Docker allows packaging applications with all dependencies into containers, ensuring consistent behavior across environments and simplifying deployment.',
    tags: ['Docker','containers']
  },
  {
    question: 'Difference between Docker Image and Container?',
    answer: 'Image: static snapshot of an app and its dependencies. Container: a running instance of an image with its own runtime environment.',
    tags: ['Docker','containers']
  },
  {
    question: 'How do you share data between Docker containers?',
    answer: 'Using Volumes or Bind mounts. Volumes are managed by Docker, bind mounts map host directories into containers.',
    tags: ['Docker','volumes']
  },

  // OData
  {
    question: 'What is OData?',
    answer: 'OData is a standardized protocol for building and consuming RESTful APIs with rich querying capabilities (filtering, sorting, paging).',
    tags: ['OData','API']
  },
  {
    question: 'How does OData compare with a normal REST API?',
    answer: 'OData adds query options like $filter, $expand, $select, $orderby. REST APIs require custom query params and endpoint logic.',
    tags: ['OData','comparison']
  },

  // GraphQL
  {
    question: 'What is GraphQL?',
    answer: 'GraphQL is a query language for APIs that allows clients to request exactly the data they need and get it in a single request.',
    tags: ['GraphQL','API']
  },
  {
    question: 'GraphQL vs REST: pros and cons',
    answer: `GraphQL:
- Pros: single endpoint, precise queries, reduces over/under-fetching.
- Cons: caching harder, query complexity, learning curve.
REST:
- Pros: simple, mature, cacheable.
- Cons: multiple endpoints, over-fetching, under-fetching.`,
    tags: ['GraphQL','REST','comparison']
  },

  // MediatR
  {
    question: 'What is MediatR in .NET?',
    answer: 'MediatR is a library implementing the Mediator pattern, decoupling requests (commands/queries) from handlers, useful for clean architecture.',
    tags: ['MediatR','patterns']
  },
  {
    question: 'When would you use a command vs a query in MediatR?',
    answer: 'Commands: change state, return void or result. Queries: read-only operations, return data. This separation aligns with CQRS.',
    tags: ['MediatR','CQRS']
  },

  // IEnumerable vs Collection
  {
    question: 'What is the difference between IEnumerable and ICollection in C#?',
    answer: `IEnumerable: supports iteration (foreach), read-only, lazy evaluation.
ICollection: extends IEnumerable, supports Count, Add, Remove, CopyTo; allows modifying the collection.`,
    tags: ['C#','collections']
  },
  {
    question: 'When should you use IEnumerable over ICollection?',
    answer: 'Use IEnumerable for read-only iteration and deferred execution (LINQ). Use ICollection when you need to modify, count, or check containment efficiently.',
    tags: ['C#','collections']
  },

  // Access Modifiers
  {
    question: 'Explain C# access modifiers: public, private, protected, internal, protected internal.',
    answer: `public: accessible everywhere
private: accessible only in class
protected: accessible in class and derived classes
internal: accessible within assembly
protected internal: accessible in derived classes or within assembly`,
    tags: ['C#','modifiers']
  },

  // HTTP
  {
    question: 'What is the difference between HTTP GET and POST?',
    answer: `GET: retrieve data, idempotent, can be cached, query parameters in URL.
POST: send data to server, creates/updates resources, body contains data, not idempotent.`,
    tags: ['HTTP','methods']
  },
  {
    question: 'What is the purpose of HTTP status codes?',
    answer: 'Status codes indicate the result of a request: 2xx success, 3xx redirection, 4xx client errors, 5xx server errors.',
    tags: ['HTTP','status']
  },
  {
    question: 'Difference between PUT and PATCH?',
    answer: `PUT: replace entire resource.
PATCH: update partial resource.
Use PATCH for efficiency when updating only a few fields.`,
    tags: ['HTTP','methods']
  },
  {
    question: 'What are HTTP headers?',
    answer: 'Metadata sent with requests or responses. Examples: Content-Type, Authorization, Cache-Control.',
    tags: ['HTTP','headers']
  },
  {
    question: 'What is the difference between HTTP and HTTPS?',
    answer: 'HTTPS is HTTP over TLS/SSL, encrypting communication for security and data integrity.',
    tags: ['HTTP','security']
  },

  // CSS
  {
    question: 'What is the difference between relative, absolute, fixed, and sticky positioning?',
    answer: `relative: offset relative to normal position
absolute: positioned relative to nearest positioned ancestor
fixed: positioned relative to viewport
sticky: switches between relative and fixed depending on scroll`,
    tags: ['CSS','position']
  },
  {
    question: 'Explain the difference between inline, block, and inline-block elements.',
    answer: `inline: flows with text, width/height ignored
block: starts on new line, takes full width
inline-block: like inline but allows width/height`,
    tags: ['CSS','display']
  },
  {
    question: 'What is the difference between relative units (em, rem, %) and absolute units (px) in CSS?',
    answer: 'Relative units scale based on parent (em) or root (rem). px is fixed, absolute, does not scale with font size.',
    tags: ['CSS','units']
  },
  {
    question: 'What is the difference between CSS Grid and Flexbox?',
    answer: `Flexbox: one-dimensional layout (row or column)
Grid: two-dimensional layout (rows and columns)
Use Flexbox for alignment and spacing, Grid for complex layouts.`,
    tags: ['CSS','layout']
  },
  {
    question: 'What is the difference between visibility:hidden and display:none?',
    answer: 'visibility:hidden: element is invisible but occupies space.display:none: element is removed from layout entirely.',
    tags: ['CSS','display']
  },
  {
    question: 'Explain z-index in CSS.',
    answer: 'z-index controls stack order of positioned elements. Higher value appears on top. Only works on positioned elements (relative, absolute, fixed, sticky).',
    tags: ['CSS','position']
  },
  {
    question: 'What is the difference between relative, sticky, and fixed scroll behavior in CSS?',
    answer: 'relative: moves relative to normal position. sticky: acts relative until scroll threshold, then fixed. fixed: always fixed to viewport.',
    tags: ['CSS','position']
  },
  {
    question: 'Explain CSS specificity and how it affects which styles are applied.',
    answer: 'Specificity determines which rule wins when multiple rules match. Inline styles > IDs > Classes/attributes > elements.',
    tags: ['CSS','specificity']
  },
  {
    question: 'How does the box-sizing property affect element sizing?',
    answer: 'content-box (default): width/height exclude padding/border. border-box: width/height include padding and border, easier for layouts.',
    tags: ['CSS','box-sizing']
  },
  {
    question: 'What is a pseudo-class in CSS? Give examples.',
    answer: 'Pseudo-classes define element states: :hover, :focus, :nth-child(n), :first-child.',
    tags: ['CSS','pseudo-class']
  },
  {
    question: 'What is Supply Chain Management (SCM)?',
    answer: `SCM is the coordination of all activities involved in producing, transporting, and delivering products to customers. It includes procurement, manufacturing, inventory management, logistics, and demand planning.  
Example: A smartphone manufacturer managing suppliers, assembly, warehouses, and shipping to retailers.`,
    tags: ['Supply Chain','Management']
  },
  {
    question: 'Explain the difference between upstream and downstream in a supply chain.',
    answer: `Upstream: activities toward suppliers (procurement, raw materials).  
Downstream: activities toward customers (distribution, retail, delivery).  
Example: Sourcing microchips is upstream; shipping the finished phone to stores is downstream.`,
    tags: ['Supply Chain','Logistics']
  },
  {
    question: 'What are key KPIs in Supply Chain?',
    answer: `- Inventory Turnover: how fast stock moves.  
- Order Fulfillment Rate: percentage of orders delivered on time.  
- Lead Time: time from order to delivery.  
- Cost per Unit: production + logistics cost.`,
    tags: ['Supply Chain','Metrics']
  },
  {
    question: 'What is Retail Management?',
    answer: `Retail management involves the process of selling goods directly to consumers, including inventory, store operations, customer service, and merchandising.  
Example: A clothing store managing stock levels, employee scheduling, and promotions.`,
    tags: ['Retail','Management']
  },
  {
    question: 'Explain Omni-channel retailing.',
    answer: `Omni-channel retailing integrates physical stores, e-commerce, mobile apps, and social commerce to provide a seamless customer experience.  
Example: Customers can order online and pick up in-store, or check store stock via app.`,
    tags: ['Retail','Omni-channel']
  },
  {
    question: 'What is Salesforce CRM?',
    answer: `Salesforce is a cloud-based Customer Relationship Management platform that helps businesses track leads, manage contacts, automate sales processes, and provide customer support.  
Example: A company using Salesforce to track opportunities, follow up with leads, and manage support tickets.`,
    tags: ['Salesforce','CRM']
  },
  {
    question: 'Explain the concept of Lead vs Opportunity in Salesforce.',
    answer: `Lead: a potential customer not yet qualified.  
Opportunity: a qualified prospect with potential for revenue.  
Example: A website signup is a Lead; after qualifying, the sales team converts it to an Opportunity to track sales progress.`,
    tags: ['Salesforce','Sales']
  },
  {
    question: 'What is Order-to-Cash (O2C) process?',
    answer: `O2C covers the complete sales process from order placement to payment collection, including order management, invoicing, delivery, and cash receipt.  
Example: A retailer receiving an online order, shipping the product, and receiving payment.`,
    tags: ['Business Process','Sales']
  },
  {
    question: 'Explain Inventory Management and its importance.',
    answer: `Inventory Management tracks stock levels, orders, and storage to ensure availability without overstocking.  
Example: Using automated alerts to reorder items before they run out in a warehouse.`,
    tags: ['Supply Chain','Inventory']
  },
  {
    question: 'What is Customer Lifecycle in business?',
    answer: `Stages a customer goes through: Awareness → Acquisition → Engagement → Retention → Advocacy.  
Example: Marketing campaigns create awareness; loyalty programs encourage retention.`,
    tags: ['Customer','Marketing']
  },
  {
    question: 'Explain Demand Forecasting.',
    answer: `Predicting future customer demand using historical data, trends, and analytics to optimize inventory and production.  
Example: A retailer using seasonal sales data to stock winter jackets before the season starts.`,
    tags: ['Supply Chain','Analytics']
  },
  {
    question: 'What is a Business Process Management (BPM) system?',
    answer: `BPM software models, automates, and monitors business processes to improve efficiency and compliance.  
Example: Automating invoice approval workflows in an enterprise system.`,
    tags: ['Business','Process']
  },
  {
    question: 'Explain the difference between B2B and B2C business models.',
    answer: `B2B (Business-to-Business): sells products/services to other businesses.  
B2C (Business-to-Consumer): sells directly to end customers.  
Example: Salesforce provides B2B CRM; Amazon.com sells B2C to shoppers.`,
    tags: ['Business','Models']
  },
  {
    question: 'What is ERP and its role in business?',
    answer: `ERP (Enterprise Resource Planning) integrates business processes across finance, HR, supply chain, and operations into a single system to improve efficiency and data accuracy.  
Example: A manufacturer using SAP or Oracle ERP to coordinate procurement, production, and sales.`,
    tags: ['ERP','Business']
  },
  {
    question: 'What is a SKU and why is it important in retail?',
    answer: `SKU (Stock Keeping Unit) uniquely identifies a product variant in inventory. Helps track stock levels, sales, and reorder points.  
Example: A T-shirt in size M and color blue has its own SKU separate from size L or color red.`,
    tags: ['Retail','Inventory']
  },
  {
    question: 'Explain the concept of CRM and its benefits.',
    answer: `CRM (Customer Relationship Management) helps manage customer interactions, improve retention, automate tasks, and analyze sales data.  
Example: Tracking customer support tickets and follow-ups in Salesforce or HubSpot.`,
    tags: ['CRM','Sales']
  },
  {
    question: 'What is a supply chain bottleneck?',
    answer: `A bottleneck is any stage that limits the overall throughput of the supply chain.  
Example: A single factory unable to produce enough parts delays the entire production line.`,
    tags: ['Supply Chain','Optimization']
  },
  {
    question: 'Explain Lead Scoring in Salesforce.',
    answer: `Lead Scoring assigns points to leads based on engagement, profile fit, or behavior to prioritize sales follow-ups.  
Example: A lead visiting pricing pages and opening emails gets a higher score than a passive lead.`,
    tags: ['Salesforce','Sales']
  },
  {
    question: 'What is retail merchandising?',
    answer: `Merchandising is planning, displaying, and promoting products to maximize sales. Includes product placement, pricing, and promotions.  
Example: Highlighting new arrivals at store entrances or using end-cap displays.`,
    tags: ['Retail','Marketing']
  },
  {
    question: 'What is the CPU and what is its main function?',
    answer: `The CPU (Central Processing Unit) is the “brain” of the computer.  
It executes instructions from programs, performs calculations, and manages data flow between memory and peripherals.  
Key components: ALU (Arithmetic Logic Unit), CU (Control Unit), registers.`,
    tags: ['Hardware','CPU','Computer Architecture']
  },
  {
    question: 'What is the role of the BIOS in a computer?',
    answer: `BIOS (Basic Input/Output System) is firmware stored on a motherboard chip.  
It initializes hardware during boot (POST), loads the bootloader from storage, and provides low-level I/O routines for the OS.`,
    tags: ['Hardware','BIOS','Firmware']
  },
  {
    question: 'What is an operating system kernel?',
    answer: `The kernel is the core part of the OS responsible for managing hardware, memory, processes, and system calls.  
Types include: monolithic (Linux), microkernel (Minix), hybrid (Windows).  
It ensures secure and efficient communication between software and hardware.`,
    tags: ['OS','Kernel']
  },
  {
    question: 'Explain the difference between RAM and ROM.',
    answer: `RAM (Random Access Memory): volatile memory used for temporary storage of data and instructions while programs run.  
ROM (Read-Only Memory): non-volatile memory storing firmware like BIOS, cannot be easily modified.`,
    tags: ['Memory','Hardware']
  },
  {
    question: 'What is a process vs a thread?',
    answer: `Process: an independent program in execution with its own memory space.  
Thread: a lightweight unit of execution within a process sharing memory.  
Example: A web browser is a process; each tab can be a thread.`,
    tags: ['OS','Process','Thread']
  },
  {
    question: 'What is cache memory and why is it important?',
    answer: `Cache is a small, fast memory located close to the CPU.  
It stores frequently accessed data to reduce latency and improve performance.  
Levels: L1 (fastest, smallest), L2, L3 (larger, slower).`,
    tags: ['Hardware','CPU','Memory']
  },
  {
    question: 'What is a motherboard?',
    answer: `The motherboard is the main PCB connecting CPU, RAM, storage, GPU, and peripherals.  
It contains the chipset, buses, power connectors, and interfaces for communication between components.`,
    tags: ['Hardware','Motherboard']
  },
  {
    question: 'What is virtual memory?',
    answer: `Virtual memory extends physical RAM by using disk storage (page file or swap).  
It allows processes to use more memory than physically available and isolates process address spaces.`,
    tags: ['OS','Memory']
  },
  {
    question: 'What is an instruction set architecture (ISA)?',
    answer: `ISA defines the set of instructions a CPU can execute, including opcodes, registers, addressing modes.  
Examples: x86, ARM, RISC-V.`,
    tags: ['CPU','Architecture']
  },
  {
    question: 'What is the difference between BIOS and UEFI?',
    answer: `BIOS: legacy firmware interface, 16-bit, limited features.  
UEFI: modern replacement, 64-bit, supports secure boot, larger drives, graphical interface.  
Both initialize hardware and load the OS bootloader.`,
    tags: ['Firmware','BIOS','UEFI']
  },
  {
    question: 'What is a system bus?',
    answer: `A system bus is a communication pathway connecting CPU, memory, and peripherals.  
Types: data bus (transfers data), address bus (specifies memory locations), control bus (signals read/write).`,
    tags: ['Hardware','Bus']
  },
  {
    question: 'What is an interrupt in a computer system?',
    answer: `An interrupt is a signal to the CPU that an event needs immediate attention.  
Examples: I/O completion, timer events. Interrupts allow asynchronous processing and multitasking.`,
    tags: ['OS','CPU','Interrupts']
  },
  {
    question: 'What is a peripheral device?',
    answer: `Hardware that connects to a computer to provide input, output, or storage.  
Examples: keyboard, mouse, printer, external hard drives, network cards.`,
    tags: ['Hardware','Peripherals']
  },
  {
    question: 'What is a register in a CPU?',
    answer: `A register is a small, very fast storage location inside the CPU used to hold data, instructions, or memory addresses temporarily during execution.`,
    tags: ['CPU','Registers']
  },
  {
    question: 'What is the difference between volatile and non-volatile memory?',
    answer: `Volatile memory loses data when power is off (e.g., RAM).  
Non-volatile memory retains data without power (e.g., ROM, SSD, flash).`,
    tags: ['Memory','Hardware']
  },
   {
    question: 'What is a distributed system?',
    answer: `A distributed system is a collection of independent computers that appear to the user as a single coherent system.  
Characteristics: concurrency, no shared memory, fault tolerance, scalability.  
Example: Google Search, Netflix backend, cloud storage systems.`,
    tags: ['Distributed Systems','Core Concepts']
  },
  {
    question: 'What is the CAP theorem?',
    answer: `CAP theorem states that a distributed system can guarantee only two of the three:  
C - Consistency (all nodes see the same data at the same time)  
A - Availability (every request receives a response)  
P - Partition tolerance (system continues to operate despite network partitions)  
Example: In a network partition, you may choose CA (not tolerant), CP (may reject requests), or AP (may serve stale data).`,
    tags: ['Distributed Systems','Core Concepts']
  },
  {
    question: 'What is eventual consistency?',
    answer: `Eventual consistency is a consistency model where updates propagate asynchronously and all nodes converge to the same value eventually.  
Use case: highly scalable systems like Amazon DynamoDB or caching layers where immediate consistency is not required.`,
    tags: ['Distributed Systems','Consistency']
  },
  {
    question: 'What is a message queue and why is it used?',
    answer: `A message queue allows asynchronous communication between services by storing messages until consumers can process them.  
Benefits: decoupling, load leveling, reliability, retry mechanisms.  
Examples: RabbitMQ, Kafka, AWS SQS.`,
    tags: ['Distributed Systems','Message Queue','Architecture']
  },
  {
    question: 'Explain the N+1 query problem.',
    answer: `Occurs when a system performs 1 query to fetch a list of objects, then N additional queries to fetch related data for each object.  
Impact: severe performance degradation.  
Solution: use eager loading, JOINs, or batch queries.`,
    tags: ['Distributed Systems','Database','Performance']
  },
  {
    question: 'What is sharding and why is it used?',
    answer: `Sharding splits a database into multiple smaller, faster, and more manageable parts called shards.  
Use case: horizontal scaling of large datasets.  
Example: A user table split by user ID ranges across different servers.`,
    tags: ['Distributed Systems','Database','Sharding']
  },
  {
    question: 'What are common redundancy techniques in distributed systems?',
    answer: `Redundancy ensures availability and fault tolerance:  
- Data replication (copy data across nodes)  
- Active-active clusters (all nodes serve traffic)  
- Failover (standby nodes replace failed ones)  
- RAID for storage-level redundancy`,
    tags: ['Distributed Systems','Redundancy','High Availability']
  },
  {
    question: 'What are hashing algorithms used for in distributed systems?',
    answer: `Hashing algorithms map data to keys or nodes in a deterministic way.  
Use cases: sharding, consistent hashing for load distribution, cache keys.  
Examples: MD5, SHA-1 (for keys), MurmurHash (for consistent hashing).`,
    tags: ['Distributed Systems','Hashing','Algorithms']
  },
  {
    question: 'What is a consensus algorithm?',
    answer: `A consensus algorithm ensures agreement on a single data value among distributed nodes despite failures.  
Examples: Raft, Paxos, and Byzantine Fault Tolerance (BFT).  
Use case: leader election, replicated state machines, blockchain.`,
    tags: ['Distributed Systems','Consensus']
  },
  {
    question: 'What is a distributed transaction and its challenges?',
    answer: `A distributed transaction spans multiple nodes/services and must maintain atomicity, consistency, isolation, and durability (ACID).  
Challenges: network failures, partial commits, two-phase commit latency.`,
    tags: ['Distributed Systems','Transactions']
  },
  {
    question: 'What is a distributed cache and why use it?',
    answer: `A distributed cache stores frequently accessed data across multiple nodes to reduce database load and latency.  
Examples: Redis Cluster, Memcached.  
Use cases: session storage, caching API responses, leaderboards.`,
    tags: ['Distributed Systems','Caching']
  },
  {
    question: 'Explain eventual vs strong consistency.',
    answer: `Strong consistency: all nodes see the same data immediately after a write.  
Eventual consistency: nodes may temporarily have different data but converge eventually.  
Trade-off: strong consistency reduces availability in partitions, eventual consistency improves scalability.`,
    tags: ['Distributed Systems','Consistency']
  },
  {
    question: 'What are common failure types in distributed systems?',
    answer: `- Crash failures: node stops responding  
- Network failures: partitions or latency  
- Byzantine failures: arbitrary/malicious behavior  
- Resource exhaustion: CPU, memory, disk limits  
Design must handle retries, replication, monitoring.`,
    tags: ['Distributed Systems','Fault Tolerance']
  },
  {
    question: 'What is load balancing in distributed systems?',
    answer: `Load balancing distributes requests across multiple nodes to optimize resource use, minimize latency, and avoid overload.  
Methods: round-robin, least connections, IP hash, weighted balancing.  
Examples: AWS ELB, Nginx, HAProxy.`,
    tags: ['Distributed Systems','Scalability','Load Balancing']
  },
  {
    question: 'What is the difference between synchronous and asynchronous messaging?',
    answer: `Synchronous: sender waits for a response (e.g., HTTP request).  
Asynchronous: sender continues immediately, response handled later (e.g., message queue).  
Async improves decoupling, throughput, and resilience.`,
    tags: ['Distributed Systems','Messaging']
  },
  {
    question: 'Explain what a service mesh is.',
    answer: `A service mesh manages communication between microservices, providing routing, load balancing, encryption, and observability.  
Example: Istio, Linkerd.  
It allows policies and telemetry without modifying application code.`,
    tags: ['Distributed Systems','Microservices','Service Mesh']
  },
  {
    question: 'What is eventual quorum in distributed databases?',
    answer: `A quorum is the minimum number of nodes required to agree on a read or write operation.  
Eventual quorum systems allow some nodes to lag temporarily but ensure consistency eventually.  
Used in Dynamo-style databases.`,
    tags: ['Distributed Systems','Database','Consistency']
  },
  {
    question: 'What is the role of a broker in messaging systems?',
    answer: `A broker intermediates between producers and consumers.  
Responsibilities: queue management, message persistence, delivery guarantees, routing.  
Examples: RabbitMQ, Kafka (topic partitions).`,
    tags: ['Distributed Systems','Messaging','Broker']
  },
  {
    question: 'What are common OWASP top vulnerabilities for web apps?',
    answer: `- Injection (SQL, NoSQL, Command)  
- Broken Authentication & Session Management  
- Cross-Site Scripting (XSS)  
- Insecure Deserialization  
- Security Misconfiguration  
- Sensitive Data Exposure  
- Using Components with Known Vulnerabilities  
- Insufficient Logging & Monitoring`,
    tags: ['Security','OWASP','Web']
  },
  {
    question: 'Explain consistent hashing and its advantage in distributed systems.',
    answer: `Consistent hashing maps keys to nodes in a way that minimizes remapping when nodes are added/removed.  
Use case: distributed caches, sharded databases.  
Advantage: avoids rehashing all keys and reduces cache misses during scaling.`,
    tags: ['Distributed Systems','Hashing','Scaling']
  },
  {
    question: 'What are the 4 core principles of OOP?',
    answer: `1. **Encapsulation**: Hide internal state and require all interaction through methods.  
2. **Abstraction**: Expose only essential features, hide complexity.  
3. **Inheritance**: Enable new classes to reuse behavior from existing classes.  
4. **Polymorphism**: Allow objects to be treated as instances of their parent class or interface, supporting method overriding and overloading.`,
    tags: ['OOP','Principles']
  },
 
  {
    question: 'What are common access modifiers in C#?',
    answer: `- **public**: accessible from anywhere  
- **private**: accessible only within the containing class  
- **protected**: accessible within the class and its subclasses  
- **internal**: accessible within the same assembly  
- **protected internal**: accessible in the same assembly or derived classes  
- **private protected**: accessible in the same class or derived classes in the same assembly`,
    tags: ['C#','Access Modifiers']
  },
  {
    question: 'What is middleware in .NET Core? Give an example.',
    answer: `Middleware are components that handle HTTP requests and responses in a pipeline.  
They can perform logging, authentication, routing, or error handling.  
Example: custom logging middleware:  
\`\`\`csharp
app.Use(async (context, next) => {
  Console.WriteLine("Request: " + context.Request.Path);
  await next(); // call next middleware
  Console.WriteLine("Response: " + context.Response.StatusCode);
});
\`\`\``,
    tags: ['.NET Core','Middleware']
  },
  {
    question: 'What are the 3 main generic Collection interfaces in .NET?',
    answer: `- **IEnumerable<T>**: Read-only, supports iteration.  
- **ICollection<T>**: Adds Count, Add, Remove, Contains.  
- **IList<T>**: Adds indexed access, Insert, RemoveAt.  
They define the hierarchy of collection capabilities in .NET.`,
    tags: ['.NET','Collections','Interfaces']
  },
  {
    question: 'What is the difference between IEnumerable and ICollection?',
    answer: `- **IEnumerable**: Provides forward-only iteration over a sequence, read-only.  
- **ICollection**: Extends IEnumerable; supports Count, Add, Remove, and checking if item exists.  
Use IEnumerable for streaming or read-only operations, ICollection when you need modification or size info.`,
    tags: ['.NET','Collections','IEnumerable vs ICollection']
  },
  {
    question: 'Given a collection of 100,000 Product records in SQL, write a LINQ query to filter by name, order, and paginate.',
    answer: `int pageSize = 20; int pageNo = 2;  
var query = products
  .Where(p => p.Name.Contains("keyword"))
  .OrderBy(p => p.Name)
  .Skip((pageNo - 1) * pageSize)
  .Take(pageSize)
  .ToList();  
// Efficient filtering, ordering, and paging.`,
    tags: ['.NET','LINQ','Pagination']
  },
  {
    question: 'Have you ever used Domain Driven Design (DDD)? Explain briefly.',
    answer: `DDD is a methodology for designing complex software by modeling based on business domains.  
Key concepts:  
- Entities, Value Objects, Aggregates  
- Repositories for persistence  
- Services for domain logic  
- Bounded Contexts for dividing large domains  
DDD improves maintainability, clarity, and communication with stakeholders.`,
    tags: ['Architecture','DDD','Design']
  },
  {
    question: 'What is backlog grooming in Agile?',
    answer: `Backlog grooming (refinement) is the process of reviewing, updating, and prioritizing the product backlog.  
Tasks:  
- Clarify requirements  
- Estimate effort  
- Remove outdated items  
Helps ensure the backlog is ready for upcoming sprints.`,
    tags: ['Agile','Scrum','Backlog']
  },
  {
    question: 'What is sprint execution in Agile?',
    answer: `Sprint execution is the period where the development team implements backlog items.  
Activities:  
- Daily standups  
- Coding & testing  
- Continuous integration & review  
Goal: deliver a potentially shippable increment at the end of the sprint.`,
    tags: ['Agile','Scrum','Sprint']
  },
  {
    question: 'What is sprint review in Agile?',
    answer: `Sprint review is a meeting at the end of a sprint to demonstrate completed work to stakeholders.  
Purpose:  
- Inspect the product increment  
- Gather feedback  
- Adjust backlog priorities  
Promotes collaboration and transparency.`,
    tags: ['Agile','Scrum','Sprint']
  },
  {
    question: 'What are the key responsibilities of a tech team leader?',
    answer: `A tech team leader guides and supports the development team to achieve project goals.  
→ Scenario: Managing a team building a web application, balancing deadlines and quality.  
→ Pros: Provides direction, mentorship, and resource coordination.  
→ Cons: Can become bottleneck if micromanaging.  
→ Best practice: Delegate tasks, encourage autonomy, and maintain clear communication.`,
    tags: ['Leadership','Team Management']
  },
  {
    question: 'How do you handle conflict within a development team?',
    answer: `Conflict management involves understanding perspectives, facilitating dialogue, and finding win-win solutions.  
→ Scenario: Two developers disagree on architecture choice.  
→ Pros: Resolves tension, improves collaboration.  
→ Cons: Time-consuming if not addressed early.  
→ Best practice: Encourage open communication, focus on facts, and mediate impartially.`,
    tags: ['Leadership','Conflict Resolution']
  },
  {
    question: 'What is the role of a product vision in leadership?',
    answer: `A clear product vision aligns the team and stakeholders on long-term goals.  
→ Scenario: Leading a team transitioning to microservices.  
→ Pros: Provides focus, motivates team, aids decision-making.  
→ Cons: Vision can become outdated if not revisited.  
→ Best practice: Communicate vision frequently, adjust as market needs evolve.`,
    tags: ['Leadership','Product Management']
  },
  {
    question: 'How do you prioritize tasks in a software project?',
    answer: `Prioritization balances business value, effort, and risk.  
→ Scenario: Managing sprint backlog with multiple features and bugs.  
→ Pros: Ensures critical work is done first, improves delivery predictability.  
→ Cons: Over-prioritization can delay less visible but important tasks.  
→ Best practice: Use frameworks like MoSCoW, RICE, or Value vs Effort matrices.`,
    tags: ['Leadership','Project Management']
  },
  {
    question: 'What is servant leadership and why is it important in tech teams?',
    answer: `Servant leadership focuses on supporting and empowering team members rather than commanding.  
→ Scenario: Leader removes blockers and provides resources for developers.  
→ Pros: Improves morale, encourages innovation, strengthens team culture.  
→ Cons: Can be perceived as lack of authority if misapplied.  
→ Best practice: Balance support with accountability and clear expectations.`,
    tags: ['Leadership','Management Style']
  },
  {
    question: 'How do you measure team performance effectively?',
    answer: `Team performance is measured via outcomes, collaboration, and growth, not just individual output.  
→ Scenario: Using sprint velocity, quality metrics, and peer feedback.  
→ Pros: Identifies strengths and areas for improvement.  
→ Cons: Over-reliance on metrics can ignore qualitative factors.  
→ Best practice: Combine quantitative KPIs with qualitative observations.`,
    tags: ['Leadership','Performance Management']
  },
  {
    question: 'How do you handle technical debt in a project?',
    answer: `Technical debt is managed by balancing short-term delivery with long-term maintainability.  
→ Scenario: Legacy code slowing down new feature development.  
→ Pros: Prevents future bottlenecks, improves system stability.  
→ Cons: Requires time investment that can conflict with delivery deadlines.  
→ Best practice: Allocate time for refactoring, track debt, and include in planning.`,
    tags: ['Leadership','Technical Strategy']
  },
  {
    question: 'What is your approach to mentoring junior developers?',
    answer: `Mentoring involves guidance, knowledge sharing, and skill development.  
→ Scenario: Pair programming sessions, code reviews, career coaching.  
→ Pros: Increases team competence, retention, and morale.  
→ Cons: Time-intensive for senior developers.  
→ Best practice: Set clear learning goals, provide feedback, and encourage independence.`,
    tags: ['Leadership','Mentorship']
  },
  {
    question: 'How do you manage stakeholder expectations in a software project?',
    answer: `Managing expectations requires clear communication, transparency, and setting realistic goals.  
→ Scenario: Stakeholders want features faster than possible.  
→ Pros: Builds trust, reduces conflict, ensures alignment.  
→ Cons: Miscommunication can damage credibility.  
→ Best practice: Regular updates, realistic timelines, and explaining trade-offs.`,
    tags: ['Leadership','Stakeholder Management']
  },
  {
    question: 'What is the importance of fostering a culture of innovation?',
    answer: `Encouraging innovation allows teams to experiment and improve processes or products.  
→ Scenario: Team proposes a new microservice approach to improve scalability.  
→ Pros: Drives business value, engagement, and adaptability.  
→ Cons: Risk of wasted effort if not aligned with strategy.  
→ Best practice: Encourage safe experimentation, celebrate learning from failures.`,
    tags: ['Leadership','Team Culture']
  },{
    question: 'What is a database index and why is it important?',
    answer: `An **index** is a data structure (commonly a B-tree) that improves the speed of data retrieval on a database table.  
- **Purpose:** Speeds up SELECT queries by reducing the number of rows the DBMS needs to scan.  
- **Tradeoff:** Indexes consume storage and can slow down INSERT, UPDATE, and DELETE operations because the index itself must also be updated.  
- **Best practice:** Create indexes on columns often used in WHERE, JOIN, ORDER BY, and GROUP BY.`,
    tags: ['SQL','Indexes']
  },
  {
    question: 'What is the difference between Clustered and Non-Clustered indexes?',
    answer: `**Clustered Index:**  
- Determines the physical order of data in a table.  
- Only one clustered index per table (usually on the primary key).  
- Data is stored in the same B-tree structure.  

**Non-Clustered Index:**  
- Separate structure that contains pointers (row locators) to the data.  
- A table can have multiple non-clustered indexes.  
- Useful for queries that don’t align with the clustered index.  

**Rule of thumb:**  
- Use clustered index for the most frequently queried column (often primary key).  
- Use non-clustered indexes for secondary lookup queries.`,
    tags: ['SQL','Indexes']
  },
  {
    question: 'When should you use a relational database vs a non-relational (NoSQL) database?',
    answer: `**Relational Database (SQL):**  
- Structured schema, ACID transactions.  
- Great for financial systems, inventory, ERP — where consistency is critical.  
- Supports JOINs and complex queries.  

**Non-Relational Database (NoSQL):**  
- Flexible schema, horizontal scalability.  
- Great for logging, IoT data, real-time analytics, social networks.  
- Types include document (MongoDB), key-value (Redis), wide-column (Cassandra), graph (Neo4j).  

**Key choice factor:** Use relational DBs when you need **strong consistency and complex relations**; use NoSQL when you need **scalability, flexibility, or high write throughput**.`,
    tags: ['SQL','NoSQL','Architecture']
  },
  {
    question: 'What is a CTE (Common Table Expression) in SQL and when is it used?',
    answer: `A **CTE** is a temporary, named result set defined within the execution scope of a single query.  

**Syntax:**
\`\`\`sql
WITH cte_name AS (
  SELECT column1, column2
  FROM table
  WHERE condition
)
SELECT * FROM cte_name WHERE column1 > 100;
\`\`\`

**Use cases:**  
- Simplifies complex queries by breaking them into readable parts.  
- Can be recursive (e.g., working with hierarchical data like org charts).  
- Useful for reusing the same subquery multiple times.`,
    tags: ['SQL','CTE']
  },
  {
    question: 'What are the normal forms in database normalization theory?',
    answer: `**Normalization** is the process of structuring a relational database to reduce redundancy and improve data integrity.  

- **1NF (First Normal Form):** Eliminate repeating groups; ensure atomic column values.  
- **2NF (Second Normal Form):** Must be in 1NF; remove partial dependency on composite keys.  
- **3NF (Third Normal Form):** Must be in 2NF; remove transitive dependencies (non-key attributes must depend only on keys).  
- **BCNF (Boyce–Codd Normal Form):** A stricter version of 3NF handling certain anomalies.  

**Tradeoff:** Higher normalization reduces redundancy but may require more JOINs (affecting performance). In practice, many systems normalize up to 3NF and then denormalize selectively for performance.`,
    tags: ['SQL','Normalization']
  },
  {
    question: "How would you design a system architecture diagram given specific requirements?",
    answer: "Start by identifying the business requirements (scalability, security, performance, availability). Then map components such as frontend, backend, APIs, databases, caching, authentication, and cloud resources. Justify each decision: e.g., use Azure App Service for hosting, Azure SQL for relational data, Redis for caching. Emphasize tradeoffs and why the design meets the requirements.",
    tags: ["Architecture", "System Design", "Azure"]
  },
  {
    question: "Why did you choose those specific Azure services for your architecture?",
    answer: "Explain the service fit: Azure App Service (PaaS hosting, auto-scaling, cost-effective), Azure SQL (managed relational DB with high availability), Azure Key Vault (secure secrets), Azure AD (authentication/authorization). Highlight benefits like reduced management overhead, built-in security, and integration with the Azure ecosystem.",
    tags: ["Azure", "Cloud Services", "Architecture"]
  },
  {
    question: "What other cloud services would you consider and why?",
    answer: "Possible additions: Azure Functions (serverless for event-driven tasks), Azure Cosmos DB (global NoSQL database for scale and low latency), Azure Service Bus (messaging/queueing for decoupling systems), Application Insights (monitoring/telemetry). Justify based on scenarios such as event-driven workloads, global distribution, or system integration.",
    tags: ["Azure", "Cloud Services", "Architecture"]
  },
  {
    question: "Explain the architecture you are currently using and which others you know or have used.",
    answer: "Describe current: e.g., a layered architecture with frontend (Angular), backend (.NET Web API), database (SQL Server), authentication (Azure AD). Then mention others: microservices (small independent services with APIs), event-driven (using queues/pub-sub), serverless (Azure Functions), monolithic (single deployable unit). Compare pros/cons of each.",
    tags: ["Architecture", "System Design", "Azure", "Patterns"]
  },
  {
    question: "What is the difference between SQL and NoSQL databases, and when would you use each?",
    answer: "SQL: Structured, relational, ACID transactions, great for financial/transactional systems. NoSQL: Flexible schema, horizontal scalability, great for IoT, analytics, or high-volume unstructured data. Choose SQL for strong consistency and relationships; choose NoSQL for scalability and flexibility.",
    tags: ["Databases", "SQL", "NoSQL", "Architecture"]
  },
  {
    question: "Have you worked with NoSQL? How did you use it and why?",
    answer: "Yes: For example, using MongoDB for document storage or Cosmos DB for globally distributed apps. Reason: schema flexibility, fast writes, and ability to handle unstructured data where relational models would be too rigid.",
    tags: ["Databases", "NoSQL", "Azure"]
  },
  {
    question: "What are the building blocks of Angular?",
    answer: "Key building blocks:  \n- **Modules**: group components, directives, and services.  \n- **Components**: control views (HTML + logic).  \n- **Templates**: HTML with Angular syntax (bindings, directives).  \n- **Directives**: add behavior to DOM elements.  \n- **Services & Dependency Injection**: share logic/data across components.  \n- **Routing**: navigate between views.  \nTogether, they provide a modular and maintainable structure for Angular apps.",
    tags: ["Angular", "Frontend", "Frameworks"]
  }
];


    