from django.db import models

class Flight(models.Model):
    departure_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    cost = models.DecimalField(max_digits=10, decimal_places=2)
    luggage_allowance = models.CharField(max_length=100)
    # Add other fields as needed for your flight model

    def __str__(self):
        return f"Flight from {self.departure_time} to {self.arrival_time}"
