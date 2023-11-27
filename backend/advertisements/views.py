from rest_framework import generics
from .models import Advertisement
from .serializers import AdvertisementSerializer

class AdvertisementListView(generics.ListCreateAPIView):
    queryset = Advertisement.objects.all()
    serializer_class = AdvertisementSerializer

class AdvertisementDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Advertisement.objects.all()
    serializer_class = AdvertisementSerializer
