from django.contrib import admin
from leaflet.admin import LeafletGeoAdmin
from facilities.models import HealthFacilities


@admin.register(HealthFacilities)
class HealthFacilitiesAdmin(LeafletGeoAdmin):
    list_display = ('name', 'healthcare', 'geom')
