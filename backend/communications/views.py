from rest_framework import generics
from .models import Communication
from .serializers import CommunicationSerializer

class CommunicationListView(generics.ListCreateAPIView):
    queryset = Communication.objects.all()
    serializer_class = CommunicationSerializer

class CommunicationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Communication.objects.all()
    serializer_class = CommunicationSerializer
