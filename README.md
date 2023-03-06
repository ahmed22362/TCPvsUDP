# TCP vs UDP

First TCP stands for transmission control protocol.

TCP and UDP are layer 4 protocols in the OSI model.

Each machine has its ip address to communicate on the internet.

In layer 4 you need a port and ip.

Pros of TCP:

- Acknowledgement: means when you send a message to the server it checks if the server received it by tagging it or adding data to headers.
- Guaranteed delivery: when the server did not receive the acknowledgment it tried to send it again.
- Connection based: to communicate with the server and the client in this protocol it should establish a connection first and the protocol store all the information of this connection.
- Congestion control: it controls the traffic of the packets by waiting and sending it when the connection is free.
- Ordered packets: TCP adds the order of the packets in the header with the request.

Cons of TCP:

- Larger packets: of course after all the added data it’s become bigger.
- More bandwidth: means it needed more speed internet to communicate.
- Slower the UDP: because congestion control and ordered packet it waits a lot of times so it is slower.
- Stateful: (the difference between stateful and stateless by this example “ if you destroy and destroy your server with a cline connected to it if the user continue working with no problem or data loss then this is stateless but when it stateful there are a lot of data loss and will send message to cline that there is problem is the server).
- Server memory; it’s allocate memory in the server to save data about the connection

  (there are limit of connection you can make with TCP)

  DOS attacks use these features to destroy the server.

TCP when it starts is waiting for a connection.

Code example:

We use telnet( need to turn on from the control panel) , which is a protocol built on top of TCP to test TCP in code with node js.

—------------------------------------------------------------------------------------------------------------------

UDP stands for user datagram protocol.

Pros of UDP:

- Stateless
- Small bandwidth
- Faster than TCP
- Smaller packet

Cons of UDP: all the features of TCP that do not appear in UDP.

Code example: use netcat (needed to install on windows)

- ### thanks to Hussein Nasser for all his efforts.
