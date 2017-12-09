# laravel-mqtt
Display published messages from a mqtt client on laravel app without websockets

- Create mqtt clients (written in nodejs in this case)
  > Publisher : publishes the messages on the broker
  > Subscriber : subscribes to the topic, upon receipt of messages sends a post request to te laravel app.
 
- Update .env file with relevant credentials

- Update laravel app
  > Create Eloquent models (Client_messages, in this case) to handle the table which stores the messages.
  > Configure the route for the mqtt client to post messages to 
  > Add ApiController, MessageController to handle the api request and the display the messages
  > Create a view to render the messages.
 
  
