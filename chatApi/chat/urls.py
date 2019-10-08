from .views import UserViewSet, MessageViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='users')
router.register(r'messages', MessageViewSet, basename='messages')

urlpatterns = router.urls

