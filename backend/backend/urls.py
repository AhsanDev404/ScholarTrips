from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('flights/', include('flights.urls')),  # Include flights app URLs
    path('reports/', include('reports.urls')),  # Include reports app URLs
    path('users/', include('users.urls')),      # Include users app URLs
    path('search/', include('search.urls')),    # Include search app URLs
    path('advertisements/', include('advertisements.urls')),  # Include advertisements app URLs
    path('authentication/', include('authentication.urls')),  # Include authentication app URLs
    path('communications/', include('communications.urls')),  # Include communications app URLs
    path('moderation/', include('moderation.urls')),          # Include moderation app URLs
    path('profiles/', include('profiles.urls')),              # Include profiles app URLs
    # Add more paths for other app URLs as needed
]
