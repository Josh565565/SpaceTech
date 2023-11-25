from rest_framework import serializers
from rest_framework import viewsets
from .serializers import SpaceTechSerializer,UserSerializer
from .models import SpaceTech
from django.contrib.auth.models import User

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
# from django.shortcuts import get_object_or_404, render




class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'slug'
    # blog = get_object_or_404(SpaceTech, slug=slug)

class SpaceTechViewSet(viewsets.ModelViewSet):
    queryset = SpaceTech.objects.all()
    serializer_class = SpaceTechSerializer
    lookup_field = 'slug'
    authentication_classes = (TokenAuthentication,)