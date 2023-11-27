from django.urls import path
from . import views

urlpatterns = [
    path('flights/', views.FlightListCreateAPIView.as_view(), name='flight-list-create'),
    path('flights/<int:pk>/', views.FlightRetrieveUpdateDestroyAPIView.as_view(), name='flight-detail'),
]
