from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets
from chat.models import Message
from .serializers import UserSerializer, MessageSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action


@permission_classes([IsAuthenticated])
class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def list(self, request):
        queryset = User.objects.exclude(id=request.user.id)
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)


@permission_classes([IsAuthenticated])
class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    queryset = Message.objects.all()

    def retrieve(self,request, pk=None):
        if pk:
            queryset = Message.objects.filter(sender=request.user.id, receiver=pk)|Message.objects.filter(receiver=request.user.id, sender=pk)
            serializer = MessageSerializer(queryset, many=True)
            
            return Response(serializer.data)
    
    def create(self, request):
        data = dict(request.data)
        message = Message.objects.create(
            message=data['message'],
            sender=request.user,
            receiver=User.objects.get(id=data['receiver'])
        )
        if message:
            print(message)
        
        return Response("BAD")