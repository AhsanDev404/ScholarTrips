from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'password')  # Add other fields as needed
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user

class CustomUserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email',)  # Fields to update, add more fields as needed

class CustomPasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()
