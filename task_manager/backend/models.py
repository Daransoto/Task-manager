from django.db import models
from django.contrib.auth.models import User

class task(models.Model):
    title = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name='tasks', on_delete=models.CASCADE, null=True)
