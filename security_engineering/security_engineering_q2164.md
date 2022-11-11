# Security Engineering 5: Application Architecture


## Item ID
2164

## Claim
5


## Claim Behavior (evidence)

Using a web server such as NGINX in front of a web application has several security benefits:

- Allows for better logging and monitoring (OWASP A10:2017)
> -- https://owasp.org/www-project-top-ten/2017/A10_2017-Insufficient_Logging%2526Monitoring

- Potential to implement a WAF (Web Application Firewall)
- 
> -- https://owasp.org/www-project-top-ten/

> NGINX faces the Web and passes requests to your application server. This “one weird trick” makes your website run faster, reduces downtime, consumes less server resources, and improves security.
> -- https://www.nginx.com/blog/maximizing-python-performance-with-nginx-parti-web-serving-and-caching/


> Warning http.server is not recommended for production. It only implements basic security checks.

> -- https://docs.python.org/3/library/http.server.html

> -- https://owasp.org/www-project-top-ten/2017/A9_2017-Using_Components_with_Known_Vulnerabilities

Additionally, the usage of sudo or a root user is not recommended as it goes against the principle of least privilege.

> Far too often, web and application servers run at too great a permission level. They execute using privileged accounts such as root in UNIX environment or LOCALSYSTEM in Windows environments. When web and application servers run as root or LOCALSYSTEM, the processes and the code on top of these processes run with all of the rights of these users. Malicious code will execute with the authority of the privileged account, thus increasing the possible damage from an exploit. Web and application servers should be executed under accounts with minimal permissions.

> -- https://owasp.org/www-community/Access_Control

## Content Target
server hardening


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
You have been asked to review the architecture of a legacy python web application your team has inherited. In your review you notice that the application is simply started on the server with `sudo python -m http.server 80`.

Which option is most likely to offer improved security posture?


## Code Snippet (optional)



## Answer Key
Run an NGINX and WSGI web server in front of the python web application. Also, change the web application port to 8080 and do not run as the root user.


## Distractors
### 1.
Run an NGINX and WSGI web server in front of the python web application. Also, change the python http server module used to a third party module.

### 2.
Change the web application port to 8080 and do not run as the root user.

### 3.
Simply remove the `sudo` command.


## Common errors, misconceptions, or irrelevant information:

1. While an improvement, running a web application as the root user/sudo is a security concern since any potential successful attacks will provide root access to the underlying server.
2. This is not ideal and the web application is still exposed to the client directly which has security and performance concerns.
3. This will work if additional OS settings are changed but it is not ideal and the web application is still exposed to the client directly which has security concerns.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

