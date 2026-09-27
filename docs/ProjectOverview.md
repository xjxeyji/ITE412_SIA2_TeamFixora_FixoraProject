# FIXORA: Project Overview

## 1. System Objectives

Fixora is an integrated service platform designed to connect motorists with mechanic shops for vehicle repair and maintenance services. The system efficiently organizes service requests, bookings, shop information, and administrative monitoring in a single platform.

The system aims to:

1. Allow customers to register, log in, and manage their accounts.
2. Allow customers to manage their vehicle information.
3. Enable customers to search for and locate available mechanic shops.
4. Allow customers to view mechanic shop locations through an interactive map.
5. Enable customers to submit vehicle repair or maintenance requests and booking information.
6. Allow customers to monitor the status of their service requests.
7. Allow mechanic shops to receive, review, and manage customer booking requests.
8. Allow mechanic shops to manage their shop information, services, availability, and location.
9. Allow administrators to monitor and manage users, mechanic shops, bookings, ratings, and system activities.
10. Improve the organization, accessibility, and convenience of vehicle repair service transactions.
11. Demonstrate the integration of databases, authentication services, map services, APIs, and version control in a web/mobile application.

---

# 2. Proposed Scope

Fixora will consist of three primary modules: the **Customer/Motorist Module, Mechanic Shop Module, and Administrator Module**.

## 2.1 Customer/Motorist Module

The Customer/Motorist Module will allow users to:

* Register and log in to their accounts.
* Manage their personal profile.
* Add, edit, and manage vehicle information.
* Browse available mechanic shops.
* View mechanic shop information, available services, and location.
* View mechanic shop locations using an interactive map.
* Select a mechanic shop based on their service needs.
* Select an available vehicle repair or maintenance service.
* Submit a booking or service request.
* Provide details about their vehicle problem.
* Upload an image of the vehicle problem when necessary.
* View and monitor the status of their booking.
* View completed service transactions and service history.
* Submit a rating and review after a completed service.

## 2.2 Mechanic Shop Module

The Mechanic Shop Module will allow registered mechanic shops to:

* Register and log in to their accounts.
* Manage their shop profile and business information.
* Add and update their shop location.
* Manage their available repair and maintenance services.
* Manage their shop availability.
* View incoming customer booking requests.
* View relevant customer and vehicle information.
* Accept or reject booking requests.
* Update the status of customer bookings.
* View completed service transactions.
* Monitor their service history.

## 2.3 Administrator Module

The Administrator Module will allow administrators to:

* Manage registered customer accounts.
* Manage registered mechanic shops.
* Monitor customer bookings and service transactions.
* Review submitted user and shop information.
* Monitor mechanic shop locations.
* Monitor ratings and reviews.
* View relevant service records.
* Monitor system activities and user interactions.

---

# 3. Integration Scope

Fixora will integrate different services and components to support the system's major functions.

The integration will include:

* **User Authentication** – Provides secure registration and login functionality.
* **Role-Based Access** – Separates access and functions for customers, mechanic shops, and administrators.
* **Database Services** – Stores user, vehicle, shop, booking, service, rating, and other system information.
* **Booking Management** – Handles the creation, processing, and monitoring of service requests.
* **Map and Location Services** – Displays mechanic shop locations and supports location-based searching.
* **Mechanic Shop Management** – Handles shop information, services, availability, and location.
* **Customer and Vehicle Management** – Stores and manages customer and vehicle information.
* **Rating and Review System** – Allows customers to provide feedback after completed services.
* **Version Control** – Supports collaborative development and source-code management through Git and GitHub.

---

# 4. In-Scope Features

The initial implementation of Fixora will focus on the following core features:

* User registration and authentication
* Role-based access control
* Customer profile management
* Vehicle information management
* Mechanic shop registration and management
* Mechanic shop location management
* Map integration
* Service management
* Customer booking and service requests
* Mechanic booking management
* Booking status updates
* Database integration
* Rating and review functionality
* Basic system and integration testing
* Git and GitHub-based team collaboration

---

# 5. Out-of-Scope Features

The following features are excluded from the initial implementation of Fixora:

* Online banking integration
* Advanced online payment processing
* AI-based vehicle diagnosis
* Automated vehicle repair diagnosis
* Advanced traffic prediction
* Real-time traffic monitoring
* Large-scale commercial payment processing

These features may be considered for future versions of the system.

---

# 6. Stakeholders

## 6.1 Customer/Motorist

Customers or motorists are individuals who require vehicle repair and maintenance services. They use Fixora to find mechanic shops, view available services, submit service requests, monitor bookings, and provide feedback.

## 6.2 Mechanic Shop

Mechanic shops are service providers that use Fixora to promote their available services, manage their shop information and location, receive customer requests, and process service bookings.

## 6.3 Administrator

The administrator is responsible for managing and monitoring the overall system. This includes managing users and mechanic shops, monitoring bookings and service records, reviewing submitted information, and monitoring system activities.

## 6.4 Development Team

The development team is responsible for the planning, design, development, integration, testing, documentation, deployment, and maintenance of the Fixora system.

---

# 7. Tools and Technologies

## 7.1 Programming Languages

* TypeScript
* HTML
* SCSS

## 7.2 Frameworks

* Ionic
* Angular

## 7.3 Database and Backend Services

* Firebase Authentication
* Firebase Firestore

Firebase Authentication will be used for user authentication and account management, while Firebase Firestore will be used to store and manage system data.

## 7.4 Map and Location Services

* Leaflet
* OpenStreetMap

Leaflet will be used to create the interactive map interface, while OpenStreetMap will provide the underlying map data.

## 7.5 Development Tools

* Visual Studio Code
* Git
* GitHub

---

# 8. System Integration Approach

Fixora will use a service-based integration approach to connect the major components of the system.

**Firebase Authentication** will handle user registration, login, and authentication. **Firebase Firestore** will manage system data such as customer profiles, vehicle information, mechanic shops, services, bookings, and ratings.

For location-based functionality, **Leaflet** will provide the interactive map interface, while **OpenStreetMap** will provide map data. The application will integrate these services to display mechanic shop locations and help customers identify available service providers.

The system will also implement role-based access to ensure that customers, mechanic shops, and administrators can access only the features relevant to their respective roles.

---

# 9. Repository and Collaboration

GitHub will serve as the central repository for the Fixora development project. The development team will use Git for version control and collaborative development.

The team will follow a branch-based workflow in which developers create separate branches for their assigned features or tasks. Completed changes will be pushed to GitHub and submitted through **Pull Requests** for review and integration into the main development branch.

This approach will help the team:

* Track changes to the source code.
* Prevent conflicts between team members.
* Review code before integration.
* Maintain different versions of the project.
* Identify and resolve development issues.
* Collaborate efficiently on the Fixora system.

---

# 10. Testing Tools and Methods

Testing will be performed to verify that the major features of Fixora function correctly and work properly together.

The testing activities will include:

### Functional Testing

Verifies whether individual system features perform according to their intended functions.

### Integration Testing

Verifies whether different components, such as authentication, Firestore, booking functions, and map services, work correctly together.

### User Interface Testing

Checks the layout, navigation, responsiveness, buttons, forms, and overall usability of the application.

### Authentication Testing

Verifies registration, login, logout, authentication errors, and role-based access.

### Booking Workflow Testing

Tests the complete booking process from customer request submission to mechanic acceptance or rejection and status updates.

### Database Testing

Verifies that system information is correctly stored, retrieved, updated, and deleted from Firebase Firestore.

### Map and Location Testing

Verifies that mechanic shop locations are correctly displayed on the map and that location-related features function properly.

### User Acceptance Testing

Evaluates whether the system meets the expected requirements and can be used effectively by its intended users.

---

# 11. Expected System Outcome

Upon completion, Fixora is expected to provide an integrated platform where motorists can conveniently search for mechanic shops, view available services and locations, submit service requests, and monitor their bookings.

Mechanic shops will be able to manage their shop information, services, availability, locations, and customer requests, while administrators will be able to monitor the overall system.

Through the integration of authentication, database services, mapping technology, role-based access, and version control, Fixora will demonstrate the practical application of modern software development and system integration technologies.
