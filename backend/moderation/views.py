from rest_framework import generics
from .models import Moderation
from .serializers import ModerationSerializer

class ModerationListView(generics.ListCreateAPIView):
    queryset = Moderation.objects.all()
    serializer_class = ModerationSerializer

class ModerationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Moderation.objects.all()
    serializer_class = ModerationSerializer
