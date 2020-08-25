from backend.models import task
from rest_framework import viewsets, permissions
from .serializers import taskSerializer

class taskViewSet(viewsets.ModelViewSet):
    queryset = task.objects.all()
    permissionclasses = [permissions.AllowAny]
    serializer_class = taskSerializer
