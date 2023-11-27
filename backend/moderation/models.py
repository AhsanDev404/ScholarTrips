from django.db import models

class Moderation(models.Model):
    # Define your moderation model fields here
    title = models.CharField(max_length=255)
    description = models.TextField()
    # Add other fields as needed
    created_at = models.DateTimeField(auto_now_add=True)
