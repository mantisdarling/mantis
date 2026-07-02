import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SessionGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('join-room')
  handleJoinRoom(
    @MessageBody() roomId: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.join(roomId);
    client.to(roomId).emit('user-connected', client.id);
  }

  @SubscribeMessage('offer')
  handleOffer(
    @MessageBody() data: { offer: any; roomId: string },
    @ConnectedSocket() client: Socket,
  ) {
    client.to(data.roomId).emit('offer', { offer: data.offer, senderId: client.id });
  }

  @SubscribeMessage('answer')
  handleAnswer(
    @MessageBody() data: { answer: any; roomId: string },
    @ConnectedSocket() client: Socket,
  ) {
    client.to(data.roomId).emit('answer', { answer: data.answer, senderId: client.id });
  }

  @SubscribeMessage('ice-candidate')
  handleIceCandidate(
    @MessageBody() data: { candidate: any; roomId: string },
    @ConnectedSocket() client: Socket,
  ) {
    client.to(data.roomId).emit('ice-candidate', { candidate: data.candidate, senderId: client.id });
  }
}
