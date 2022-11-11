# System Architecture Environment

## Item ID
system-arch-environment

## Claim
System Architecture

## Claim Behavior (evidence)
- [12 Factor: Config](https://12factor.net/config)
- [AWS Lambda environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html)
- [Azure DevOps Define variables](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch)
- [Google Cloud Run - Environment Variables](https://cloud.google.com/run/docs/configuring/environment-variables)
- [Secrets, environment variables ... Rails](https://dev.to/vvo/secrets-environment-variables-config-files-the-ruby-on-rails-case-433f)
- [ngx_core_module env](https://nginx.org/en/docs/ngx_core_module.html#env)
- [Apache Tomcat section 3, configuring Environment Variables](http://tomcat.apache.org/tomcat-7.0-doc/RUNNING.txt)
- [dotnet core multiple environments](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-3.1)
- [GitHub Actions - Encrypted Secrets](https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets)

## Content Target


## Cognitive Model


## Item Type


## Stem

Which of the following reasons is NOT a good use of environment variables.

## Code Snippet (optional)


## Answer Key

To store the user's session id, allowing any function to easily access the value without passing it around.


## Distractors

### 1.

To store the database server address, allowing a server to use a production or test database.


### 2. 

To store the listen port, allowing a proxy server to run multiple services from a single port.


### 3.

To store the host and domain of your web server, allowing the server to easily create full http URLs to the server.


## Common errors, misconceptions, or irrelevant information (optional):

Most of the time, a web server serves content to many different users.  And session ids usually expire faster than web servers are restarted.  Also, saving a value at runtime to a servers environment dictionary is usually language and framework specific, and could have bad security issues, like new visitors being able to see data in old visitor's account as if they were logged in.

Environment variables are set before the process starts.  They are meant for configuring an environment, for example testing, staging, or production.  This is useful for some hardcoded strings like a database address, then the code doesn't need to change
if the database server crashes.

With a database address in an environment variable, a site engineer can start a database at a different address and start a new server pointing to that new database without having to know how the application logic works.  Or a test suite can run on a copy of the production database without changing the real data.

Many articles have been written about storing secrets in environment variables, and depending on your tech stack different solutions exist for storing application secrets and API keys.  

The fundamental idea though, that your app should be configurable and not hard code configurations, still stands as a best practice, even if actual environment variables are not used.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

