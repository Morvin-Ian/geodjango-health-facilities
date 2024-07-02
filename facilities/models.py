from django.db import models
from django.contrib.gis.db import models as gis_models


class HealthFacilities(models.Model):
    name = models.CharField(max_length=80, null=True, blank=True)
    healthcare = models.CharField(max_length=167, null=True, blank=True)
    amenity = models.CharField(max_length=80, null=True, blank=True)
    operatorty = models.CharField(max_length=80, null=True, blank=True)
    geom = gis_models.PointField(srid=4326)

    def __str__(self) -> str:
        return self.name if self.name else "Unnamed Facility"