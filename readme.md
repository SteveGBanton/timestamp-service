
# Welcome to timestamp-service

timestamp-service is a tiny app that returns a time in unix and standard format when either are supplied.

That's it!

## Example input:

https://simple-timestamp-service.herokuapp.com/2147483647
https://backend-projects-stevegbanton.c9users.io/January%2019,%202038

## Example output:

{"unix":2147483647,"natural":"2038-01-19"}
{"unix":2147472000,"natural":"2038-01-19"} 

NOTE: the second output is different because it returns unix time at a different time of the day on Jan 19, 2038.





