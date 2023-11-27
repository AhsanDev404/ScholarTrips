from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.UserCreateView.as_view(), name='user-create'),
    path('users/<int:pk>/', views.UserDetailView.as_view(), name='user-detail'),
    path('users/update-profile/<int:pk>/', views.UserUpdateProfileView.as_view(), name='update-profile'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
    path('password-reset/', views.CustomPasswordResetView.as_view(), name='password-reset'),
    path('password-reset-confirm/', views.CustomPasswordResetConfirmView.as_view(), name='password-reset-confirm'),
    path('update-password/', views.update_password, name='update-password'),
]
