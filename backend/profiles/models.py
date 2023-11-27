from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # Add profile fields here
    bio = models.TextField(blank=True)
    # Add other fields as needed
    created_at = models.DateTimeField(auto_now_add=True)
