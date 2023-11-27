from django.urls import path
from . import views

urlpatterns = [
    path('moderations/', views.ModerationListView.as_view(), name='moderation-list'),
    path('moderations/<int:pk>/', views.ModerationDetailView.as_view(), name='moderation-detail'),
]
