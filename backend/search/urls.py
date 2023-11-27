from django.urls import path
from . import views

urlpatterns = [
    path('search/', views.SearchQueryListView.as_view(), name='search-list'),
    path('search/<int:pk>/', views.SearchQueryDetailView.as_view(), name='search-detail'),
]
