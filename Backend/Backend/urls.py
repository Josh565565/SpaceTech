# urls.py

from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('SpaceTech.urls')),
    path('auth/', obtain_auth_token),
    # Add your API endpoints here
    # Serve React app at the root URL
]
