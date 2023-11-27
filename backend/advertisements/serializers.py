from rest_framework import serializers
from .models import Advertisement

class AdvertisementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advertisement
        fields = ('id', 'title', 'content', 'created_at')
