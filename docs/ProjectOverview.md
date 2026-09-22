# Project Overview

## 1. System Objectives

Fixora aims to provide an integrated platform that connects customers with mechanic shops for vehicle repair and maintenance services. The system is designed to organize service requests, bookings, shop information, and administrative monitoring in one platform.

The main objectives of the system are:

- To allow customers to submit vehicle repair and maintenance service requests.
- To provide customers with information about available mechanic shops and their services.
- To allow customers to provide details about their vehicle problems and booking requirements.
- To allow mechanic shops to receive, manage, and update customer service requests.
- To allow mechanic shops to manage their shop information, services, availability, and location.
- To provide administrators with a centralized way to monitor users, mechanic shops, bookings, and system activities.
- To improve the organization, accessibility, and monitoring of vehicle repair service transactions.
- To demonstrate the integration of databases, APIs, system modules, and version control in a collaborative software project.

## 2. Proposed Scope

### Customer/Motorist Module

The customer module will allow users to:

* Register and log in.
* Manage their profile.
* Add and manage vehicle information.
* Browse available mechanic shops.
* View mechanic shop locations on a map.
* Select a mechanic shop.
* Select a vehicle repair or maintenance service.
* Submit a booking request.
* Upload an image of a vehicle problem when necessary.
* Monitor the status of their booking.
* View completed service records.
* Provide a rating after a completed service.

### Mechanic Shop Module

The mechanic shop module will allow shops to:

* Register and log in.
* Manage shop information.
* Update shop location.
* Manage available services.
* View customer booking requests.
* View relevant customer information.
* Accept or reject booking requests.
* Update booking status.
* Manage shop availability.
* View completed service transactions.

### Administrator Module

The administrator module will allow administrators to:

* Manage registered users.
* Manage mechanic shops.
* Monitor customer bookings.
* Monitor system activities.
* View mechanic shop locations.
* Review submitted information.
* Monitor ratings and service records.

### Integration Scope

The project will integrate the following components:

* User authentication
* Database services
* User management
* Booking management
* Map and location services
* Mechanic shop information
* Customer and mechanic information
* Rating and review functionality
* Version control and team collaboration

### In-Scope Features

The initial implementation will focus on:

* User authentication
* Role-based access
* Customer booking
* Mechanic booking management
* Shop location management
* Map integration
* Database integration
* Basic testing
* Git-based collaboration

### Out-of-Scope Features

The following features will not be included in the initial implementation:

* Online banking integration
* Advanced AI vehicle diagnosis
* Automated vehicle repair diagnosis
* Advanced traffic prediction
* Large-scale commercial payment processing

These features may be considered for future development.

## 3. Stakeholders

### Customer/Motorist

Customers are users who need vehicle repair and maintenance services. They need a convenient way to find mechanic shops, submit service requests, and monitor their bookings.

### Mechanic Shop

Mechanic shops use the system to receive and manage customer service requests. They also maintain their shop information, services, availability, and location.

### Administrator

The administrator manages and monitors the system. The administrator is responsible for managing users, mechanic shops, bookings, and other system information.

### Development Team

The development team is responsible for designing, developing, testing, documenting, and maintaining the Fixora system.

## 4. Tools & Technologies

### Programming Languages

* TypeScript
* HTML
* SCSS

### Frameworks

* Ionic
* Angular

### Database and Backend Services

* Firebase Authentication
* Firebase Firestore

### Map Integration

* Leaflet
* OpenStreetMap

### Development Tools

* Visual Studio Code
* Git
* GitHub

### Integration Approach

The system will use API-based and service-based integration where appropriate. Firebase services will be used for authentication and database operations, while Leaflet and OpenStreetMap will be used for displaying geographic locations.

### Repository and Collaboration

GitHub will be used as the team's central repository. Git branches and Pull Requests will be used to manage individual contributions, code changes, and reviews.

### Testing Tools and Methods

Testing will include:

* Functional testing
* Integration testing
* User interface testing
* Authentication testing
* Booking workflow testing
* Database testing
* Map and location testing
