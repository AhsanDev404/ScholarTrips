from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.views import PasswordResetView, PasswordResetConfirmView
from django.urls import reverse_lazy
from .models import CustomUser
from .serializers import (
    CustomUserSerializer,
    CustomUserUpdateSerializer,
    CustomPasswordResetSerializer,
)

class UserCreateView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

class UserUpdateProfileView(generics.UpdateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserUpdateSerializer

@api_view(['POST'])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    if username and password:
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def user_logout(request):
    logout(request)
    return Response(status=status.HTTP_200_OK)

class CustomPasswordResetView(PasswordResetView):
    template_name = 'password_reset_form.html'  # Customize template if needed
    email_template_name = 'password_reset_email.html'  # Customize email template if needed
    success_url = reverse_lazy('password_reset_done')  # Customize success URL if needed

class CustomPasswordResetConfirmView(PasswordResetConfirmView):
    template_name = 'password_reset_confirm.html'  # Customize template if needed
    success_url = reverse_lazy('password_reset_complete')  # Customize success URL if needed

@api_view(['POST'])
def update_password(request):
    form = PasswordChangeForm(user=request.user, data=request.data)
    if form.is_valid():
        form.save()
        update_session_auth_hash(request, form.user)
        return Response({'message': 'Password updated successfully'}, status=status.HTTP_200_OK)
    return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)
