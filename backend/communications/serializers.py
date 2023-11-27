from rest_framework import serializers
from .models import Communication

class CommunicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Communication
        fields = '__all__'  # Include all fields from the Communication model
