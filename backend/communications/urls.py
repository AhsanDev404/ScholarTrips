from django.urls import path
from . import views

urlpatterns = [
    path('communications/', views.CommunicationListView.as_view(), name='communication-list'),
    path('communications/<int:pk>/', views.CommunicationDetailView.as_view(), name='communication-detail'),
]
