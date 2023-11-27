from rest_framework import serializers
from .models import AdvertiserPerformanceReport, UserActivityReport, AdResponseConversionReport

class AdvertiserPerformanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdvertiserPerformanceReport
        fields = '__all__'

class UserActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserActivityReport
        fields = '__all__'

class AdResponseConversionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdResponseConversionReport
        fields = '__all__'
