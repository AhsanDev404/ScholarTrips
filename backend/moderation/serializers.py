from rest_framework import serializers
from .models import Moderation

class ModerationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Moderation
        fields = '__all__'  # Include all fields from the Moderation model
