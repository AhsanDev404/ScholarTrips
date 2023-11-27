from rest_framework import generics
from .models import SearchQuery
from .serializers import SearchQuerySerializer

class SearchQueryListView(generics.ListCreateAPIView):
    queryset = SearchQuery.objects.all()
    serializer_class = SearchQuerySerializer

class SearchQueryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SearchQuery.objects.all()
    serializer_class = SearchQuerySerializer
