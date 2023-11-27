from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    # Define additional fields or modifications to the user model
    # Example: 
    # custom_field = models.CharField(max_length=100)
    
    def __str__(self):
        return self.username
