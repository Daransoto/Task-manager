from rest_framework import routers
from .api import taskViewSet

router = routers.DefaultRouter()
router.register('api/tasks', taskViewSet, 'tasks')
urlpatterns = router.urls
