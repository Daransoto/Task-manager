from rest_framework import serializers
from backend.models import task

class taskSerializer(serializers.ModelSerializer):
    class Meta:
        model = task
        fields = '__all__'
