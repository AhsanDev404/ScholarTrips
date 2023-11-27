from django.urls import path
from . import views

urlpatterns = [
    path('profiles/', views.ProfileListView.as_view(), name='profile-list'),
    path('profiles/<int:pk>/', views.ProfileDetailView.as_view(), name='profile-detail'),
]
