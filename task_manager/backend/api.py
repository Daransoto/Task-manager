from backend.models import task
from rest_framework import viewsets, permissions
from .serializers import taskSerializer

class taskViewSet(viewsets.ModelViewSet):
    permissionclasses = [
        permissions.IsAuthenticated,
    ]
    serializer_class = taskSerializer

    def get_queryset(self):
        return self.request.user.tasks.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
