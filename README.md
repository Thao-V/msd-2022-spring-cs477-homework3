# msd-2022-spring-cs477-homework3
# Lab 3
1. Create a simple Node script that converts 'www.miu.edu' domain name to the equivalent IP address. (Search and learn 'dns' module, resolve4)
2. Create a http server which is listen to 3000 port. 
   1. Create the route of “/” which returns 'Hello World' using http GET. For example, sending a GET request https://localhost:443, the result is "Hello World"
   2. Create the route which returns query strings using https GET. For example, sending a GET request http://localhost:443/users?id=1&&name=thao, the response is {id: 1, name: 'thao'}
   3. Create the route which returns body of POST request. For example, sending a POST request http://localhost:443/users/add with the body is {first_name: 'thao', last_name: 'vu'}, the response will be {first_name: 'thao', last_name: 'vu'}.
3. Create a https server which is listen to port 443
   1. Create the route of “/” which returns 'Hello World' using http GET. For example, sending a GET request https://localhost:443, the result is "Hello World"
   2. Create the route which returns query strings using https GET. For example, sending a GET request http://localhost:443/users?id=1&&name=thao, the response is {id: 1, name: 'thao'}
   3. Create the route which returns body of POST request. For example, sending a POST request http://localhost:443/users/add with the body is {first_name: 'thao', last_name: 'vu'}, the response will be {first_name: 'thao', last_name: 'vu'}.
4. Use Postman or Thunder to test API
5. Please use the certificate & key in this homework
