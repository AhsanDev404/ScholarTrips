from django.db import models

class Communication(models.Model):
    # Define your communication model fields here
    title = models.CharField(max_length=255)
    content = models.TextField()
    # Add other fields as needed
    created_at = models.DateTimeField(auto_now_add=True)
