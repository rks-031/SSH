# SSH
Attribute Based Encryption system for EHR

## Progress metrics for Mid-term

# Smart Healthcare System: Security and User Interface

This README outlines the initial steps for developing a secure smart healthcare system, focusing on user interface design, data storage, and access control.

## 1. Basic Frontend Development 

*
   *Framework:* Choose a suitable frontend framework like React, Angular, or Vue.js.
*
   *User Interface Design:*
    
*
   *Homepage:*  A welcome page with information about the portal and its features.
    
*
   *User Registration:* A form for users to create accounts, specifying their role (doctor, hospital, organization, or normal user).
    
*
   *User Login:* A secure login page for users to access their accounts.
    
*
   *User Profile:* A page where users can view and update their basic information (name, age, blood group).
    
*
   *Medical Records:* A section to display medical records, with access control mechanisms.
    
*
   *Request Access:* A feature for users to request access to another user's medical records.
    
*
   *Hospital Data Upload:* A section for hospitals to upload patient medical reports.
*
   *Basic Functionality:*
    
*
   *User Registration:* Handle user registration, including validation of input data and password strength.
    
*
   *User Login:* Implement secure login using email and password authentication.
    
*
   *User Profile:* Allow users to view and update their basic information.

## 2. User Data Storage

*
   *Storage Method:*
    
*
   *Database (e.g., MySQL, PostgreSQL):*  A relational database is suitable for storing structured data like user profiles and basic information.
    
*
   *Cloud Storage (e.g., AWS S3, Google Drive):*  Cloud storage can be used for storing medical records, ensuring scalability and redundancy.
*
   *Data Structure:*
    
*
   *User Table:* Store user details (name, age, blood group, email, password, role).
    
*
   *Medical Records Table:* Store medical history, including diagnosis, treatment, and reports.
*
   *Data Security:*
    
*
   *Encryption:* Encrypt sensitive data like medical records both at rest (in storage) and in transit (during transmission).
    
*
   *Access Control:* Implement robust access control mechanisms to restrict access to medical records based on user roles and permissions.
    
*
   *Data Integrity:* Ensure data integrity by implementing measures to prevent unauthorized modifications.

## 3. User Data Visibility and Access Control

*
   *Public Information:* Display basic user information (name, age, blood group) publicly on the user profile page.
*
   *Private Information:* Keep medical records hidden from public view.
*
   *Access Request Mechanism:*
    
*
   *Request Form:* Create a form for users to request access to another user's medical records.
    
*
   *Email Notification:* Send an email notification to the owner of the medical records when a request is made.
    
*
   *Owner Approval:* Allow the owner to approve or deny the access request.
    
*
   *Access Granting:* If approved, grant access to the requested medical records.
*
   *Hospital Data Upload:*
    
*
   *Data Mapping:* Implement a system to automatically map uploaded medical reports to existing user accounts based on patient identifiers.
    
*
   *Data Replication:* If a match is found, automatically replicate the medical report to the user's account.

## 4. Account Creation and Sign-In

*
   *Account Creation:*
    
*
   *Role Selection:* Allow users to choose their role (doctor, hospital, organization, or normal user).
    
*
   *Role-Specific Information:* Ask for role-specific information (e.g., hospital name, doctor specialization) in addition to email and password.
    
*
   *Account Registration:* Register the new user account in the database.
*
   *Sign-In:*
    
*
   *Email and Password Authentication:* Implement secure login using email and password authentication.
    
*
   *Password Security:* Enforce strong password policies (length, complexity).
