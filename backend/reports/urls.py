from django.urls import path
from . import views

urlpatterns = [
    path('advertiser_performance/', views.AdvertiserPerformanceView.as_view(), name='advertiser_performance'),
    path('user_activity/', views.UserActivityView.as_view(), name='user_activity'),
    path('ad_response_conversion/', views.AdResponseConversionView.as_view(), name='ad_response_conversion'),
]
