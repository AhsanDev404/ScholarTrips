from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import AdvertiserPerformanceReport, UserActivityReport, AdResponseConversionReport
from .serializers import (
    AdvertiserPerformanceReportSerializer,
    UserActivityReportSerializer,
    AdResponseConversionReportSerializer
)

@api_view(['GET'])
def advertiser_performance_report(request):
    reports = AdvertiserPerformanceReport.objects.all()
    serializer = AdvertiserPerformanceReportSerializer(reports, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def user_activity_report(request):
    reports = UserActivityReport.objects.all()
    serializer = UserActivityReportSerializer(reports, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def ad_response_conversion_report(request):
    reports = AdResponseConversionReport.objects.all()
    serializer = AdResponseConversionReportSerializer(reports, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
