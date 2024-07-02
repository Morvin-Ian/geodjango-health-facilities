from rest_framework.generics import ListAPIView
from facilities.models import HealthFacilities
from .serializers import HealthFacilitiesSerializer


class HealthFacilitiesView(ListAPIView):
    queryset = HealthFacilities.objects.all()
    serializer_class = HealthFacilitiesSerializer