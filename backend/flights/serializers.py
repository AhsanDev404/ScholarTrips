from rest_framework import serializers
from .models import Flight

class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = ['id', 'departure_time', 'arrival_time', 'cost', 'luggage_allowance']

    def create(self, validated_data):
        return Flight.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.departure_time = validated_data.get('departure_time', instance.departure_time)
        instance.arrival_time = validated_data.get('arrival_time', instance.arrival_time)
        instance.cost = validated_data.get('cost', instance.cost)
        instance.luggage_allowance = validated_data.get('luggage_allowance', instance.luggage_allowance)
        instance.save()
        return instance
