from django.db import models

# Create your models here.
from django.db import models

class AdvertiserPerformanceReport(models.Model):
    advertiser_name = models.CharField(max_length=100)
    clicks = models.IntegerField()
    conversions = models.IntegerField()
    views = models.IntegerField()

class UserActivityReport(models.Model):
    registered_users = models.IntegerField()
    active_users = models.IntegerField()
    usage_trends = models.TextField()
    popular_features = models.TextField()

class AdResponseConversionReport(models.Model):
    advertisement = models.CharField(max_length=100)
    users_seen_ad = models.IntegerField()
    users_clicked_ad = models.IntegerField()
    bookings_from_ad = models.IntegerField()
