from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Flight
from .serializers import FlightSerializer

@api_view(['GET'])
def get_flights(request):
    flights = Flight.objects.all()
    serializer = FlightSerializer(flights, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_flight(request):
    serializer = FlightSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['PUT'])
def update_flight(request, flight_id):
    try:
        flight = Flight.objects.get(pk=flight_id)
    except Flight.DoesNotExist:
        return Response({'message': 'Flight not found'}, status=404)

    serializer = FlightSerializer(flight, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
def delete_flight(request, flight_id):
    try:
        flight = Flight.objects.get(pk=flight_id)
    except Flight.DoesNotExist:
        return Response({'message': 'Flight not found'}, status=404)

    flight.delete()
    return Response({'message': 'Flight deleted successfully'}, status=204)
